import { GetStaticProps, GetStaticPropsContext, NextApiRequest } from 'next';
import React, { ReactChild, useState } from "react";
import { Flex, VStack, Stack, Heading } from "@chakra-ui/react";
import { UserProfileCard } from "../../core/User/components/UserProfileCard";
import { UserBasicInfo } from "../../core/User/components/UserBasicInfo";
import { UserBioCard } from "../../core/User/components/UserBioCard";
import { ProfileSectionsTab } from "../../core/User/components/ProfileSectionsTab";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useSwr";
import { UpdateUserInfoModal } from "../../core/User/components/UpdateUserInfoModal";
import { Card, Modal, Spinner } from "ui";
import { User } from "@prisma/client";
import { redirectUnauthorized } from 'utils/auth';

export default function UserProfile() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const { data: user, isLoading, isError } = useFetch(`/users/${router.query.username}`);
  const openModal = () => { }
  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <>
      {
        isLoading ? <Spinner />: (
          <Flex width="100%" gap={8} height="100%">
            <VStack alignItems="flex-start" width="35%">
              <UserProfileCard user={user?.data} />
              <UserBioCard user={user?.data} />
            </VStack>
            <ProfileSectionsTab user={user?.data} />
          </Flex>
        )
      }
    </>
  );
}

export async function getServerSideProps(context: GetStaticPropsContext) {
  return redirectUnauthorized(context);
}
