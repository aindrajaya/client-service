import { LOAD_ON_CHAIN_TRANSACTIONS } from "../types";

const offLists = []

const onChainLists = (state=offLists, action) => {
  const {type, payload} = action

  switch (type) {
    case LOAD_ON_CHAIN_TRANSACTIONS:
      return payload
    default:
      return state
  }
}

export default onChainLists