import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.paper,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          '& svg': {
            width: '216px',
            // padding: '16px 12px 20px',
            padding: theme.spacing(2, 1.75, 2.5),
          },
        },
        content: {
          padding: theme.spacing(3),
          height: '400px',
          overflow: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: theme.spacing(3, 2),
        },
      };
    },
  )();

  return styles;
};
