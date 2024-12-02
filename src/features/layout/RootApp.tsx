import { PropsWithChildren } from "react";
import Body from "./Body";
import Header from "./Header";
import Layout from "./Layout";

export default function RootApp({ children }: PropsWithChildren) {
  return (
    <Layout>
      <Header />
      <Body>{children}</Body>
    </Layout>
  );
}
