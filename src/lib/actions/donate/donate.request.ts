import { useMutation } from "@tanstack/react-query";
import instance from "..";

interface DonateData {
  images?: string;
  description: string;
  drop_type: string;
  assumed_person_for: string;
  donor_id: string;
}

const donate = (data: DonateData) => {
  console.log(data);
  return instance.post("/drop", { ...data });
};

export const useDonate = () => {
  return useMutation({ mutationFn: donate });
};
