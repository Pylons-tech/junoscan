import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: theme.spacing(6),
          backgroundImage: theme.palette.custom.primaryData.one,
          '& svg': {
            width: '100%',
          },
          [theme.breakpoints.up('sm')]: {
            '& svg': {
              width: '300px',
            },
          },
        },
        logo: {
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '300px',
          },
        },
        divider: {
          margin: theme.spacing(2, 0),
          padding: theme.spacing(1),
          width: '80rem',
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.paper,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        },
      };
    },
  )();

  return styles;
};
