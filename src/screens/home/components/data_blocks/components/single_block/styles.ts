import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.paper,
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          height: '110px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          color: theme.palette.custom.fonts.fontFive,
          '& .label': {
            marginBottom: theme.spacing(2),
          },
          '& .content': {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          },
          '& .description': {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'block',
            },
          },
        },
      };
    },
  )();

  return styles;
};
