"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`hover:text-sky-400 font-bold ${isActive ? "text-sky-700" : ''}`}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </div>
  );
};

export { Navigation };