"use client";
import { Proposal } from "@prisma/client";
import React, { ReactNode, useEffect } from "react";
import ReduxProvider from "./redux-provider";
import { useDispatch } from "react-redux";
import { initializeProposals } from "./slice/proposal-slice";

interface Props {
  children: ReactNode;
  proposal: Proposal[];
}

const ReduxProviderInt = ({ children, proposal }: Props) => {
  return (
    <ReduxProvider>
      <Initializer proposal={proposal} />
      {children}
    </ReduxProvider>
  );
};

export default ReduxProviderInt;

const Initializer = ({ proposal }: { proposal: Props["proposal"] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (proposal) {
      dispatch(initializeProposals(proposal));
    }
  }, [dispatch, proposal]);

  return null;
};
