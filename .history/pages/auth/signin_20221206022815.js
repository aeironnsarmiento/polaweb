import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signIn(providers) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
