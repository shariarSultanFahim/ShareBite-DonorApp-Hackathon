import { DonateForm } from "./_components/donate.form";
import { authSession } from "@/lib/server/session.ssr";

export default async function DonatePage() {
  const session = await authSession();
  const userId = session?.user?.id;

  return (
    <>
      <DonateForm userId={userId} />
    </>
  );
}
