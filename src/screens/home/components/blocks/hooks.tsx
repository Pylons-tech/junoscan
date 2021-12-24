import { useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  BlocksListenerSubscription,
  useBlocksCustomSubscription
} from '@graphql/types';
import { useChainContext } from '@contexts';
import { BlocksState } from './types';

export const useBlocks = () => {
  const { findAddress } = useChainContext();
  const [state, setState] = useState<BlocksState>({
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // block subscription
  // ================================
  const blockSubscription = useBlocksCustomSubscription({ 
    onCompleted: (data) => {   
      handleSetState({
        loading: false,
        items: [
          ...formatBlocks(data),
          ...state.items,
        ],
      });
    },
    onError: (e) => {
      console.log('blockSubscription error = ', e); 
      handleSetState({
        loading: false,
      });
    }
  });

  const formatBlocks = (data: BlocksListenerSubscription) => {
    return data.blocks.map((x) => {
      const proposerAddress = R.pathOr('', ['validator', 'validatorInfo', 'operatorAddress'], x);
      const proposer = findAddress(proposerAddress);
      return ({
        height: x.height,
        txs: x.txs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: {
          address: proposerAddress,
          imageUrl: proposer.imageUrl,
          name: proposer.moniker,
        },
      });
    });
  };

  return {
    state,
  };
};
