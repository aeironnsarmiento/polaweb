import React from "react";
import {
  getSessionProvider,
  signIn as SignIntoProvider,
} from "next-auth/react";

function signin(providers) {
  return <div>signin</div>;
}

export async function getServerSideProps() {
  return {
    props: {
      session: await getSessionProvider(),
    },
  };
}

export default signin;
