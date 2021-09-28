import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        networkList: {
          padding: theme.spacing(4),
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.default,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '& img': {
            width: '25px',
            marginRight: theme.spacing(2),
          },
          '& .network': {
            flex: 2,
            minWidth: 0,
          },
        },
      };
    },
  )();

  return styles;
};
