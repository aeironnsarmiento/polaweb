import React from "react";
import {
  getSessionProvider,
  signIn as SignIntoProvider,
} from "next-auth/react";

function signin(providers) {
  return <div>signin</div>;
}

export async function getServerSideProps() {
  const providers = await getSessionProvider();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
