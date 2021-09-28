import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          borderRadius: theme.shape.borderRadius * 4,
          overflow: 'hidden',
          background: theme.palette.background.paper,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          '& .MuiListItemIcon-root': {
            minWidth: '48px',
          },
          '&.MuiListItem-gutters': {
            padding: theme.spacing(2, 2.5),
            marginTop: theme.spacing(1),
          },
          '& .MuiListItemText-root': {
            color: theme.palette.custom.general.icon,
          },
          '&.active': {
            background: Color(theme.palette.background.paper)
              .lighten(0.5)
              .string(),
            '& .MuiListItemIcon-root': {
              '& svg': {
                fill: theme?.palette?.primary?.main,
              },
            },
            '& .MuiListItemText-root': {
              color: theme.palette.primary.main,
            },
          },
        },
      };
    }, { index: 1 },
  )();

  return styles;
};
