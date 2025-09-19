// "use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

interface DonationListParams {
  page?: number;
  paginate?: boolean;
  search?: string;
  id?: string;
}

export const getDonationListByDonorId = async (params?: DonationListParams) =>
  await instance.get(`/drop/donor`, {
    params
  });

export const useGetDonationListByDonorId = (params?: DonationListParams) => {
  return useQuery({
    queryKey: ["drop-list", params],
    queryFn: () => getDonationListByDonorId(params),
  });
};
