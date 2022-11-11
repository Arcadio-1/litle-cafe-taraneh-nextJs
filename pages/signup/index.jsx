import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import SignupForm from "../../Components/signup/signupForm";
const SignupPage = () => {
  return (
    <div>
      <Head>
        <title>SignUp</title>
        <meta name="description" content="you can signup here in this page!" />
      </Head>
      <SignupForm />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permenent: false,
      },
    };
  }
  return { props: { session } };
}

export default SignupPage;
