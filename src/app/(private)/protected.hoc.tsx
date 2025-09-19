import { ReactNode } from "react";
import { RedirectType, redirect } from "next/navigation";
import { authSession } from "@/lib/server/session.ssr";

export default async function ProtectedHOC({
  children,
}: {
  children: ReactNode;
}) {
  const session = await authSession();
  console.log("Session in HOC:", session);
  if (!session) {
    redirect("/", RedirectType.replace);
  }
  return <>{children}</>;
}
