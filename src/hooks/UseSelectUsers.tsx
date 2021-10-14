import { useCallback, useState } from "react";
import { usersAPI } from "../types/usersAPI";

type Props = {
  id: number;
  users: Array<usersAPI>;
};

export const UseSelectUsers = () => {
  const [selectedUser, setSelectedUser] = useState<usersAPI | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
  }, []);
  return { onSelectUser, selectedUser };
};
