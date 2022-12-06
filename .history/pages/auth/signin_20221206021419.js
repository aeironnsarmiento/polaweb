import React from "react";
import { getProviders, signIn } from "next-auth/client";

function signin() {
  return (
    <div>
      <h1>signin</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = getProviders();
}

export default signin;
