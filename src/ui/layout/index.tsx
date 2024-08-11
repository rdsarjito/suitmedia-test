import { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = PropsWithChildren<{
  title: string
}>;

const MainLayout = (props:Props) => {
  return (
    <div>
      <Header title={props.title} />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;