import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { usersAPI } from "../types/usersAPI";

type LoginUser = (usersAPI & { isAdmin: boolean }) | null;

export type LoginUserContextType = {
  lpginUser: LoginUser;
  setLoginUser: Dispatch<SetStateAction<usersAPI | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
