import { NewJourney } from "./components/Onboarding/NewJourney";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";


export default function NewJourneyPage(props) {
    return (
        <NewJourney user={props.user}/>
    );
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    const { id, email, name, bio, image } = session?.user;
  
    return {
      props: {
        user: {
          id,
          email,
          name,
          bio,
          image
        }
      },
    }
  }