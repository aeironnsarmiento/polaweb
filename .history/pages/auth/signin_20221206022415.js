import React from "react";
import { getProvider, signIn as SignIntoProvider } from "next-auth/react";

function signin(providers) {
  return <div>signin</div>;
}

export async function getServerSideProps() {
  const providers = await getProvider();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
