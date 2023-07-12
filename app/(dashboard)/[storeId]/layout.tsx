import { auth } from "@clerk/nextjs";

export async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
}) {
  const { userId } = auth();
  return <div>{children}</div>;
}
