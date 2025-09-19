"use client";

import { Controller, useForm } from "react-hook-form";
import signupSchema, { FormValues } from "./donate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDonate } from "@/lib/actions/donate/donate.request";

import { Button, Card, Form, Input, InputNumber, message, Select, Space } from "antd";
const { Item, ErrorList } = Form;
const { Option } = Select;
export function DonateForm({ userId }: { userId?: string }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { mutateAsync: donate, isPending } = useDonate();

  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      drop_type: "",
      description: "",
      images: "",
      assumed_person_for: 1,
      donor_id: userId as unknown as number,
    },
  });
  async function onSubmit(values: FormValues) {
    // Clearing errors
    messageApi.open({
      type: "loading",
      content: "Submitting...",
      duration: 0,
    });

    // Ensure avatar is a File or undefined
    const donateData = {
      ...values,
      donor_id: userId as unknown as number,
      images: "",
    };
    // Making the request
    const res = await donate(donateData);

    messageApi.destroy();

    if (res.status === 201) {
      reset();
      messageApi.success("Drop successful!");
    } else {
      messageApi.error("Failed to drop. Please try again.");
    }
    messageApi.destroy();
  }

  return (
    <>
      {contextHolder}
      <Card className="shadow-md">
        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 md:flex-row flex-col">
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
                    style={{ marginBottom: "12px", width: "100%" }}
                  >
                    <Item noStyle>
                      <Form.Item noStyle>
                        
                          <Form.Item noStyle>
                            <Select
                              className={`${
                                error ? "border-red-500" : ""
                              }`}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              style={{
                                width: "100%",
                                height: 40,
                                borderRadius: 6,
                               
                              }}
                            >
                              <Option value="">Select type</Option>
                              <Option value="Food">Food</Option>
                              <Option value="Medicine">Medicine</Option>
                              <Option value="Cloth">Cloth</Option>
                            </Select>
                          </Form.Item>
                    
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
              name={"assumed_person_for"}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <>
                  <Item<FormValues>
                    label="For how many people"
                    style={{ marginBottom: "12px", width: "100%", }}
                  >
                    <Item noStyle>
                      <InputNumber
                        placeholder="1"
                        size="large"
                        style={{ width: "100%" }}
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
          </div>
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
            name={"images"}
            render={({
              field: { ref, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Image"
                  style={{ marginBottom: "12px", }}
                >
                  <Item noStyle>
                    <Input
                      className="ant-input"
                      style={{
                        height: 40,
                        paddingTop: 8,
                        borderRadius: 6,
                        display: "block",
                      }}
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
            className="w-full "
            disabled={isPending}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}
