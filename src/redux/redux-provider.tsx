import { ReactNode } from "react";
import { makeStore } from "./store";
import { Provider } from "react-redux";

export const store = makeStore();

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;