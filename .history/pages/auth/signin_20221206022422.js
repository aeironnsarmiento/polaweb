import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signin(providers) {
  return <div>signin</div>;
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
