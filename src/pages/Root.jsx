import { Layout } from "antd";
import Sidebar from "../layout/MySidebar";
import MyHeader from "../layout/MyHeader";
import MyContent from "../layout/MyContent";
import { useState } from "react";

const Root = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Sidebar collapse={collapse} setCollapse={setCollapse} />
      <Layout>
        <MyHeader collapse={collapse} setCollapse={setCollapse} />
        <Layout style={{ padding: 24 }}>
          <MyContent />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Root;
