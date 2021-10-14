import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { UseMessage } from "./UseMessage";
import { useLoginUser } from "../hooks/UseLoginUser";

export const UseAuth = () => {
  const history = useHistory();
  const { ShowMessage } = UseMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const Login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            history.push("/home");
            ShowMessage({ title: "ログインできたよ！", status: "success" });
            setLoading(false);
          } else {
            ShowMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() =>
          ShowMessage({ title: "ログインできませんでしたー", status: "error" })
        );
    },
    [history, ShowMessage, setLoginUser]
  );
  return { Login, loading };
};
