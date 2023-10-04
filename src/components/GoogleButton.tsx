"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  const router = useRouter()

  return (
    <button onClick={() => signIn("google", { callbackUrl })}>
      Sign in with Google
    </button>
    // <button onClick={() => router.push('/profile')}>Go to Another Page</button>
  );
};

export { GoogleButton };