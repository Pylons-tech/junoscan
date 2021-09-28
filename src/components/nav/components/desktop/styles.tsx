import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      const OPEN_DRAWER_WIDTH = 200;
      const CLOSED_DRAWER_WIDTH = 80;

      return {
        root: {
          '& .MuiDrawer-paperAnchorDockedLeft': {
            border: 'none',
          },
        },
        logo: {
          width: '216px',
          padding: theme.spacing(2, 1, 2.5),
          '&:hover': {
            cursor: 'pointer',
          },
        },
        appBar: {
          ...theme.mixins.toolbar,
          height: '6.5rem !important',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          color: theme?.palette?.custom?.fonts?.fontTwo ?? 'inherit',
          width: `calc(100% - ${CLOSED_DRAWER_WIDTH}px)`,
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
          '&.MuiPaper-elevation4': {
            boxShadow: 'none',
          },
          '&.open': {
            marginLeft: OPEN_DRAWER_WIDTH,
            width: `calc(100% - ${OPEN_DRAWER_WIDTH}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        },
        drawer: {
          width: OPEN_DRAWER_WIDTH,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
        },
        drawerOpen: {
          width: OPEN_DRAWER_WIDTH,
          padding: theme.spacing(1),
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        drawerClose: {
          padding: theme.spacing(1),
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
          width: CLOSED_DRAWER_WIDTH,
        },
      };
    },
  )();

  return styles;
};
