import { createContext, useState, ReactNode } from "react";

import { useMutateUser } from "../hooks/queries/user";
import { useToast } from "../hooks/use-toast";

import { UserModel } from "../domain/models/user/userModel";
import { treatmentRequest } from "../services/config/treatmentRequest";

interface IUserProvider {
  children: ReactNode;
}

interface IUser {
  name: string;
}

export interface IUserContext {
  loading: boolean;
  createUser: (user: UserModel) => Promise<boolean>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const createUserQuery = useMutateUser();
  const { messageToast } = useToast();

  const createUser = async (user: UserModel) => {
    var result = true;
    try {
      const response = await createUserQuery.mutateAsync(user);
      treatmentRequest(response);

      messageToast("Parabéns", "Seu usuário foi criado com sucesso!", {
        status: "success",
      });
    } catch (error) {
      if (error instanceof Error)
        messageToast("Ops...", error.message, { status: "error" });
      result = false;
    }

    return result;
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
