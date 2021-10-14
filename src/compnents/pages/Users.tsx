import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organism/user/UserCard";
import { UseAllUsers } from "../../hooks/UseAllUsers";
import { UserModal } from "../organism/user/UserModal";
import { UseSelectUsers } from "../../hooks/UseSelectUsers";

export const Users: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = UseAllUsers();
  const { onSelectUser, selectedUser } = UseSelectUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users });
      onOpen();
    },
    [users, onOpen, onSelectUser]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} w="100%" mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.name}
                userTrueName={user.username}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
