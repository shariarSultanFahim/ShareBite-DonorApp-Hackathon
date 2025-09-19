import { authSession } from "@/lib/server/session.ssr";
import DonationTable from "./_components/table";

export default async function MyDonationsPage() {
  const session = await authSession();
  const userId = session?.user?.id;
  return <DonationTable userId={userId} />;
}
