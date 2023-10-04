"use client";

import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const session = useSession();

  const isAuthenticated = !!session?.data;

  if (isAuthenticated) {
    router.push("/");
  }

  return children;
};

export default SignInGuard;
