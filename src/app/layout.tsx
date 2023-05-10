import Dashboard from "@/components/Dashboard";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";

import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "It Serv Management",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let signedIn = true;

  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={`light ${inter.className}`}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
    // </ClerkProvider>
  );
}

function YouNeedToSignIn() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h1>You are not signed in! Go Sign In 👇</h1>
      <Button>Sign In</Button>
    </div>
  );
}

function Button({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      {children}
    </button>
  );
}
