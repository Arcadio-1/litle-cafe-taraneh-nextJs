import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import ProfileForm from "../../Components/profile/ProfileForm";

const ProfilePage = () => {
  return (
    <div>
      <Head>
        <title>Change Password</title>
        <meta
          name="description"
          content="here you can change your login password"
        />
      </Head>
      <ProfileForm />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permenent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default ProfilePage;
