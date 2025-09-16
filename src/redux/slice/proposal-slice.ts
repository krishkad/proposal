import { Proposal } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProposalState {
  proposals: Proposal[];
}

const initialState: ProposalState = {
  proposals: [],
};

export const proposal_slice = createSlice({
  name: "proposals",
  initialState,
  reducers: {
    initializeProposals: (state, action: PayloadAction<Proposal[]>) => {
      state.proposals = action.payload;
    },
    updateProposal: (state, action: PayloadAction<Proposal>) => {
      const updated_proposals = state.proposals.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              proposal: action.payload.proposal,
            }
          : { ...item }
      );

      state.proposals = updated_proposals;
    },
    addProposal: (state, action: PayloadAction<Proposal>) => {
      state.proposals.push(action.payload);
    },
    deleteProposal: (state, action: PayloadAction<Proposal>) => {
      const updated_proposals = state.proposals.filter(
        (item) => item.id !== action.payload.id
      );
      state.proposals = updated_proposals;
    },
  },
});

export const { initializeProposals, updateProposal, addProposal, deleteProposal } = proposal_slice.actions;
export default proposal_slice.reducer;
