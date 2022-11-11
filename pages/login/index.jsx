import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import Loginform from "../../Components/login/Loginform";

const LoginPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Enter your email and password to login"
        />
      </Head>
      <div>
        <Loginform />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { session } };
}

export default LoginPage;
