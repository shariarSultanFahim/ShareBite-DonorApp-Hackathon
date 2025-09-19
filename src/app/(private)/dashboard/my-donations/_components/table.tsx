"use client";

import { useGetDonationListByDonorId } from "@/lib/actions/donate/list.donation";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "donor_id",
    key: "donor_id",
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
  },
];

export default function DonationTable({ userId }: { userId?: string }) {
  const { data: donations, isLoading } = useGetDonationListByDonorId({ id: userId, paginate: false });

  return (
    <Table
      dataSource={donations?.data?.data?.results}
      columns={columns}
      rowKey="id"
      loading={isLoading}
      pagination={{ position: ["bottomRight"], defaultPageSize: 5 }}
    />
  );
}
