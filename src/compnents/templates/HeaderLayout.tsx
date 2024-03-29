import { memo, ReactNode, VFC } from "react";
import { Header } from "../organism/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
});
