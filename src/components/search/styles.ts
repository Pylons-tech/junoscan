import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          '& .MuiInputBase-root': {
            width: '100%',
            background: theme.palette.background.paper,
            padding: theme.spacing(0.4, 1.2),
            borderRadius: theme.shape.borderRadius,
            '& .open': {
              background: theme.palette.background.default,
              display: 'none',
            },
          },
          '& .MuiInputBase-input': {
            textOverflow: 'ellipsis',
            '& .open': {
              background: `${theme.palette.background.default} !important`,
              display: 'none',
            },
            '&::placeholder': {
              color: theme.palette.custom.fonts.fontFour,
            },
          },
        },
      };
    },
  )();

  return styles;
};
