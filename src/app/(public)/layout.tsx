export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative max-w-[min(80rem,95vw)] mx-auto pt-10">{children}</div>;
}
