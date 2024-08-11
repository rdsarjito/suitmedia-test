import { PropsWithChildren } from "react";
import Header from "./header";
import "./layout.style.scss";

type Props = PropsWithChildren<{
  title?: string;
}>;

const MainLayout = (props: Props) => {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default MainLayout;
