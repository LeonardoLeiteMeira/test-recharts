import { createContext, useState } from "react";

// exemplo de uso correto do context API
// Artigo => https://www.dtidigital.com.br/blog/context-api-como-usar-de-forma-simples-e-facil/#O-que-e-a-Context-API 
// Repositorio => https://github.dev/devluispereira/context-api-example

type UserType = {
  name: string;
  lastName: string;
  email: string;
};

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  
};

export {UserContextProvider}
export default UserContext