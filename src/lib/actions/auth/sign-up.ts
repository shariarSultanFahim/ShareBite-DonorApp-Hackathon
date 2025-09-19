import { useMutation } from "@tanstack/react-query";
import instance from "..";

interface SignupData {
  email: string;
  password: string;
  username: string;
  phone: string;
  address: string;
  avatar?: File;
}

const signup = (data: SignupData) => {
  return instance.post("/donor/register", { ...data });
};

export const useSignup = () => {
  return useMutation({ mutationFn: signup });
};
