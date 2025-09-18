import { getAdminList } from "@/lib/actions/admin/list.get";
import { ReactNode } from "react";
export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const data = await getAdminList();
  console.log("Admin Data:", data);
  return <>{children}</>;
}
