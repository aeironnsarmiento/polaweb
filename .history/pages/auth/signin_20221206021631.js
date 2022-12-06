import React from "react";
import { getProviders, signIn } from "next-auth/client";

function signIn(providers) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const providers = getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
