import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        icon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.paper,
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          '&:hover': {
            cursor: 'pointer',
          },
          '& svg': {
            fill: theme.palette.custom.general.icon,
            '& path': {
              fill: theme.palette.custom.general.icon,
            },
          },
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
        },
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .MuiIconButton-root': {
            padding: 0,
          },
        },
        dialog: {
          '& .MuiDialog-paper': {
            width: '500px',
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius * 4,
            background: theme.palette.background.paper,
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          },
        },
        formItem: {
          marginBottom: theme.spacing(2),
          '& .MuiOutlinedInput-root': {
            width: '100%',
          },
          '& .form-item--label': {
            marginBottom: theme.spacing(1),
          },
        },
      };
    },
  )();

  return styles;
};
