"use client";

import { Controller, useForm } from "react-hook-form";
import signupSchema, { FormValues } from "./donate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Form, Input, message, Space } from "antd";
import { useDonate } from "@/lib/actions/donate/donate.request";

import { useSession } from "next-auth/react";
const { Item, ErrorList } = Form;

export function DonateForm() {
  const session = useSession();
  const userId = session?.data?.user?.id;

  const { mutateAsync: donate, isPending } = useDonate();

  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      drop_type: "",
      description: "",
      images: "",
      assumed_person_for: "1",
      donor_id: userId,
    },
  });

  async function onSubmit(values: FormValues) {
    // console.log(values);
    // Clearing errors
    message.open({
      type: "loading",
      content: "Donating...",
      duration: 0,
    });

    // Ensure avatar is a File or undefined
    const donateData = {
      ...values,
      images: typeof values.images === "string" ? undefined : values.images,
    };

    // Making the request
    const res = await donate(donateData);

    message.destroy();

    if (res.status === 201) {
      reset();
      message.success("Drop successful!");
    } else {
      message.error("Failed to drop. Please try again.");
    }
    message.destroy();
  }

  return (
    <>
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
            name={"drop_type"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Donation Type"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Form.Item noStyle>
                      <Space.Compact>
                        <Form.Item noStyle>
                          <select
                            className={`ant-input ant-input-lg ${
                              error ? "border-red-500" : ""
                            }`}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            style={{
                              width: "100%",
                              height: 40,
                              borderRadius: 6,
                              paddingLeft: 8,
                            }}
                          >
                            <option value="">Select type</option>
                            <option value="Food">Food</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Cloth">Cloth</option>
                          </select>
                        </Form.Item>
                      </Space.Compact>
                    </Form.Item>
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="drop_type"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"description"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Description"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Input
                      placeholder="I'm donating . . . "
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="description"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"assumed_person_for"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="For how many people"
                  style={{ marginBottom: "12px" }}
                >
                  <Item noStyle>
                    <Input
                      placeholder="1"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="assumed_person_for"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />

          <Controller
            control={control}
            name={"images"}
            render={({
              field: { ref, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Image"
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
                    fieldId="images"
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
        </Form>
      </Card>
    </>
  );
}
