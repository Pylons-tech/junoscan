import {
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.default,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          overflow: 'auto',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
        table: {
          '& .MuiTableBody-root': {
            '& .MuiTableCell-root': {
              whiteSpace: 'nowrap',
            },
          },
        },
      };
    },
  )();

  return styles;
};
