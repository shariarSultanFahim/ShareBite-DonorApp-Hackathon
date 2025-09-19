import { useMutation } from "@tanstack/react-query";
import instance from "..";

interface DonateData {
  images?: string;
  description: string;
  drop_type: string;
  assumed_person_for: number;
  donor_id: number;
}

const donate = (data: DonateData) => {
  console.log(data);
  return instance.post("/drop", { ...data });
};

export const useDonate = () => {
  return useMutation({ mutationFn: donate });
};
