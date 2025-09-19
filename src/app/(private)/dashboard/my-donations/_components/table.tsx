"use client";

import { useGetDonationList } from "@/lib/actions/donate/list.donation";
import { Table, Tag } from "antd";

const statusColors: Record<string, string> = {
  PENDING: "gold",
  ACCEPTED: "blue",
  REJECTED: "red",
  PICKED: "purple",
  DELIVERED: "green",
  CANCELLED: "volcano",
};

const columns = [
  {
    title: "Name",
    dataIndex: ["donor", "username"],
    key: "donor_name",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_: any, record: any) => record.donor?.username || record.donor_id,
  },
  {
    title: "Drop Type",
    dataIndex: "drop_type",
    key: "drop_type",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Tag color={statusColors[status] || "default"}>{status}</Tag>
    ),
  },
];

export default function DonationTable({ userId }: { userId?: string }) {
  const { data: donations, isLoading } = useGetDonationList({
    paginate: false,
  });

  // Filter donations by userId === donor_id
  const filteredDonations = donations?.data?.data?.results?.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => String(item.donor_id) === String(userId)
  );

  return (
    <Table
      dataSource={filteredDonations}
      columns={columns}
      rowKey="id"
      loading={isLoading}
      pagination={{ position: ["bottomRight"], defaultPageSize: 5 }}
    />
  );
}
