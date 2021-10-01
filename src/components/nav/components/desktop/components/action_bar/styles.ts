import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          width: '100%',
          background: theme.palette.custom.general.background,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: theme.spacing(2, 3, 2, 3),
        },
        actions: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          zIndex: 5000,
        },
        searchBar: {
          flex: 1,
          marginRight: theme.spacing(2),
          padding: theme.spacing(1),
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.paper,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          '&.open': {
            background: theme.palette.background.default,
          },
        },
        network: {
          height: '3.4rem',
          background: theme.palette.background.paper,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          marginRight: theme.spacing(2),
          '&.open': {
            background: theme.palette.background.default,
          },
        },
        networkList: {
          width: '100%',
          zIndex: 1201,
          opacity: 0,
          visibility: 'hidden',
          transition: '0.2s ease-in-out',
          position: 'fixed',
          top: 0,
          left: 0,
          '&.open': {
            opacity: 1,
            visibility: 'visible',
          },
        },
        content: {
          height: '3.4rem',
          background: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius * 4,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          marginRight: theme.spacing(2),
          '&.open': {
            background: theme.palette.background.default,
          },
          flex: 2,
          marginTop: theme.spacing(2),
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
          },
          [theme.breakpoints.up('lg')]: {
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 0,
            width: '70%',
            padding: theme.spacing(1, 3),
            flexWrap: 'nowrap',
          },
        },
        item: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          padding: theme.spacing(1),
          width: '100%',
          '& .label': {
            marginRight: theme.spacing(1),
          },
          [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
          [theme.breakpoints.up('lg')]: {
            padding: 0,
            width: 'auto',
          },
        },
      };
    },
  )();

  return styles;
};
