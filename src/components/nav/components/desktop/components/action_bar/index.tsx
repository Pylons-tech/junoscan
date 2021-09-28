import React from 'react';
import classnames from 'classnames';
import { useGetComponentDimension } from '@hooks';
import { useChainContext } from '@src/contexts';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { formatMarket } from './utils';
import { useStyles } from './styles';
import {
  Network,
  NetworkList,
  SettingsList,
} from './components';
import { SearchBar } from '../../..';

const ActionBar: React.FC<{
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
}> = ({
  toggleNetwork,
  className,
  isNetwork,
}) => {
  const {
    ref: heightRef,
    height,
  } = useGetComponentDimension();
  const { t } = useTranslation('common');
  const classes = useStyles();

  const { market: marketContext } = useChainContext();
  const market = formatMarket(marketContext);

  return (
    <div className={classnames(className, classes.root)} ref={heightRef}>
      <div className={classes.actions}>
        <div className={classnames(classes.content, { open: isNetwork })}>
          {market.map((x) => (
            <div key={x.key} className={classes.item}>
              <Typography variant="body1" className="label">
                {t(x.key)}
              </Typography>
              <Typography variant="body1">{x.data}</Typography>
            </div>
          ))}
        </div>
        <SearchBar
          isNetwork={isNetwork}
          className={classnames(classes.searchBar, { open: isNetwork })}
        />
        <Network
          className={classnames(classes.network, { open: isNetwork })}
          toggleNetwork={toggleNetwork}
        />
        <SettingsList />
      </div>
      <NetworkList
        actionHeight={height}
        className={classnames(classes.networkList, {
				  open: isNetwork,
        })}
      />
    </div>
  );
};

export default ActionBar;
