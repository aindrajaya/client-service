import { LOAD_OFF_CHAIN_TRANSACTIONS } from "../types";

const offLists = []

const offChainLists = (state=offLists, action) => {
  const {type, payload} = action

  switch (type) {
    case LOAD_OFF_CHAIN_TRANSACTIONS:
      return payload
    default:
      return state
  }
}

export default offChainLists