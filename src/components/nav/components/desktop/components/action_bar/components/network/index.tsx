import {
  useState,
} from 'react';
import {
  useChainIdQuery, ChainIdQuery,
} from '@graphql/types';

import classnames from 'classnames';
import { ExpandMore } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { chainConfig } from '@configs';
import * as R from 'ramda';
import { useStyles } from './styles';

const Network:React.FC<{
  className?: string;
  toggleNetwork: () => void;
}> = ({
  className, toggleNetwork,
}) => {
  const classes = useStyles();
  const [chainId, setChainId] = useState(chainConfig.chianid);
  const formatUseChainIdQuery = (data: ChainIdQuery) => {
    return R.pathOr(chainConfig.chianid, ['genesis', 0, 'chainId'], data);
  };

  useChainIdQuery(
    {
      onCompleted: (data) => {
        setChainId(formatUseChainIdQuery(data));
      },
    },
  );

  return (
    <div
      className={classnames(className, classes.root)}
      onClick={toggleNetwork}
      role="button"
    >
      <Typography variant="body1">
        {chainId}
      </Typography>
      <ExpandMore />
    </div>
  );
};

export default Network;
