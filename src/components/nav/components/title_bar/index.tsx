import React from 'react';
import classnames from 'classnames';
import {
  useChainContext,
} from '@contexts';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { formatMarket } from './utils';
import PylonsIcon from '@assets/add/pylons.svg'; 

const TitleBar:React.FC<{
  className?: string;
  title: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const { market: marketContext } = useChainContext();

  const market = formatMarket(marketContext);

  return (
    <div className={classnames(className, classes.root)}> 
      <PylonsIcon className={classes.pylonIcon}/>  
      {/* <Typography variant="h1" style={{color:'red'}}>PYLONS</Typography> */} 
      <div className={classes.content}>
        {market.map((x) => (
          <div key={x.key} className={classes.item}>
            <Typography variant="body1" className="label">
              {t(x.key)}
            </Typography>
            <Typography variant="body1">
              {x.data}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
