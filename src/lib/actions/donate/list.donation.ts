// "use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

interface DonationListParams {
  page?: number;
  paginate?: boolean;
  search?: string;
}

export const getDonationList = async (params?: DonationListParams) =>
  await instance.get(`/drop`, {
    params,
  });

export const useGetDonationList = (params?: DonationListParams) => {
  return useQuery({
    queryKey: ["drop-list", params],
    queryFn: () => getDonationList(params),
  });
};
