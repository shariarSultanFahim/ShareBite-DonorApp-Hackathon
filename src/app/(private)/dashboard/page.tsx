"use client";

import { useGetAdminList } from "@/lib/actions/admin/list.get";

export default function DashboardPage() {
  const { data, isLoading } = useGetAdminList({
    paginate: true,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">
          Employee List Client Side
        </h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-disc pl-5">
            {data?.data?.results?.map(
              (employee: { id: string; first_name: string }) => (
                <li key={employee.id}>{employee.first_name}</li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
