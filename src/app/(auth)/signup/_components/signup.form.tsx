"use client";

import { useSignup } from "@/lib/actions/auth/sign-up";
import { Controller, useForm } from "react-hook-form";
import signupSchema, { FormValues } from "./signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Form, Input, message } from "antd";
import { signIn } from "next-auth/react";
const { Item, ErrorList } = Form;

export function SignupForm() {
  // const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const { mutateAsync: signup, isPending } = useSignup();

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      phone: "",
      address: "",
      avatar: "",
    },
  });

  async function onSubmit(values: FormValues) {
    console.log(values);
    // Clearing errors
    messageApi.open({
      type: "loading",
      content: "Signing up...",
      duration: 0,
    });

    // Ensure avatar is a File or undefined
    const signupData = {
      ...values,
      avatar: typeof values.avatar === "string" ? undefined : values.avatar,
    };

    // Making the request
    const res = await signup(signupData);

    messageApi.destroy();

    if (res.status === 201) {
      //sign in the user using next auth
      messageApi.loading("Logging in...");
      await signIn("credentials", {
        email: values.email,
        password: values.password,
      });

      // router.push("/login");
    } else {
      messageApi.error("Failed to signup. Please try again.");
    }
    messageApi.destroy();
  }

  return (
    <>
      {contextHolder}
      <div className="pb-10 text-center">
        <h1 className="pb-1 text-2xl font-bold">Welcome</h1>
        <p className="font-medium">Sign Up</p>
      </div>
      <Card className="shadow-md">
        <Form
          layout="vertical"
          className="font-semibold"
          requiredMark={false}
          onSubmitCapture={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name={"username"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues> label="Name" style={{ marginBottom: "12px" }}>
                  <Item noStyle>
                    <Input
                      placeholder="JhonDoe12"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="username"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"email"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Email"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Input
                      placeholder="john@example.com"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="email"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"phone"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Phone"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Input
                      placeholder="017XXXXXXXX"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="phone"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"password"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Password"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Input.Password
                      placeholder="******"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="password"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"address"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Address"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Input
                      placeholder="1234 Main St"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="address"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />

          <Controller
            control={control}
            name={"avatar"}
            render={({
              field: { ref, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Avatar"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Input
                      type="file"
                      accept="image/*"
                      name="avatar"
                      ref={ref}
                      onBlur={onBlur}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          onChange(file);
                        }
                      }}
                    ></Input>
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="avatar"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />

          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full"
            disabled={isPending}
          >
            Submit
          </Button>
          <h1 className="py-2 text-center text-sm font-medium">
            Already have an account? <a href="/login">Log in</a>
          </h1>
        </Form>
      </Card>
    </>
  );
}
