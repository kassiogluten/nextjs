import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
const Context = createContext({} as ContextProviderProps);

interface SidebarDrawerProvider {
  children: ReactNode;
}

type ContextProviderProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function ContextProvider({ children }: SidebarDrawerProvider) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
