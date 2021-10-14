import axios from "axios";
import { useCallback, useState } from "react";
import { usersAPI } from "../types/usersAPI";
import { UseMessage } from "./UseMessage";

export const UseAllUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<usersAPI>>([]);
  const { ShowMessage } = UseMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<usersAPI>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        ShowMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(setLoading(false));
  }, [ShowMessage]);

  return { getUsers, loading, users };
};
