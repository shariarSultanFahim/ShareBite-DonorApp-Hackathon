// "use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";
import { authSession } from "@/lib/server/session.ssr";

interface DonorParams {
  id?: string;
}

export const getDonorDetails = async (params?: DonorParams) =>
  await instance.get("/donor", {
    params,
  });

export const useGetDonorDetails = (params?: DonorParams) => {
  return useQuery({
    queryKey: ["donor-details", params],
    queryFn: () => getDonorDetails(params),
  });
};
