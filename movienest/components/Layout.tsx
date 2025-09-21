import { ReactNode } from "react";
import Head from "next/head";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>MovieNest</title>
      </Head>
      <main className="p-4">{children}</main>
    </div>
  );
}
