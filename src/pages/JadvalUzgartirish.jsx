import { Button, Divider, Form, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";

const MyOption = [
  {
    id: 1,
    value: "Keyingi hafta jadvalini o'zgartirish",
  },
  {
    id: 1,
    value: "Dars kunlarini tanlash",
  },
];

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const JadvalUzgartirish = () => {
  const [loading, setLoading] = useState(false);
  function a() {
    setLoading(true);
    setTimeout(() => {
      message.success("Jadval Yaratildi!");
      setLoading(false);
    }, 3000);
  }
  return (
    <>
      <>
        <h1>Jadval O'zgartirish</h1>
        <Divider />
      </>
      <Form layout="vertical" name="uqituvchi">
        <Form.Item
          label="Quyidagi varianlardan birini tanlang"
          name="yo'nalish"
          rules={[
            {
              required: true,
              message: `Iltimos yuqoridagi variantlardan birini tanlang!`,
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Quyidagi varianlardan birini tanlang"
            options={MyOption.map((option) => ({
              value: option.value,
              label: option.value,
            }))}
            style={{
              width: 500,
              fontWeight: 700,
              textAlign: "center",
            }}
          />
        </Form.Item>
      </Form>
      <Form layout="vertical">
        <Form.Item
          label="Quyidagi varianlardan birini tanlang"
          name="yo'nalish"
          rules={[
            {
              required: true,
              message: `Iltimos yuqoridagi variantlardan birini tanlang!`,
            },
          ]}
        >
          <TextArea placeholder="Sababni kiriting" rows={4} />
        </Form.Item>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
        <Divider />
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          style={{
            height: 50,
            fontSize: 24,
            textAlign: "center",
            fontWeight: 700,
          }}
          loading={loading}
          onClick={() => a()}
        >
          Jadval yaratish
        </Button>
      </Form>
    </>
  );
};

export default JadvalUzgartirish;
