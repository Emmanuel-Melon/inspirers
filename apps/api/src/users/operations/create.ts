import { Invitation, User, WaitlistMember } from "@prisma/client";
import short from "short-uuid";
import { v5 as uuidv5 } from "uuid";
import { host } from "../../config";

const generateHashedLink = (id: number) => {
  const translator = short();
  const seed = `${id}:${new Date().getTime()}`;
  const uid = translator.fromUUID(uuidv5(seed, uuidv5.URL));
  return uid;
};

export const generateInvitationLink = async (
  invitation: Invitation
): Promise<Invitation> => {
  let ts = Math.round(new Date().getTime() / 1000);
  let tsTomorrow = ts + 24 * 3600;

  const hashedLink = generateHashedLink(5);
  try {
    return prisma.invitation.create({
      data: {
        ...invitation,
        expiresAt: new Date(tsTomorrow),
        url: `${host}/join/${hashedLink}`,
      },
    });
  } catch (err) {}
};

export const joinWaitingList = (member: WaitlistMember): Promise<WaitlistMember> => {
  try {
    return prisma.waitlistMember.create({
      data: member
    });
  } catch(err) {}
}