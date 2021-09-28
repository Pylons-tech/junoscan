import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return {
        root: {
          padding: theme.spacing(3, 6, 3),
          borderRadius: theme.shape.borderRadius * 4,
          background: theme.palette.background.paper,
          boxShadow:
						'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',

          color: theme.palette.custom.fonts.fontOne,
          '& .footer__closing--container': {
            '& a': {
              color: theme.palette.custom.fonts.highlight,
            },
          },
          '& .MuiDivider-root': {
            margin: theme.spacing(4, 0),
          },
          '& p': {
            marginBottom: theme.spacing(2),
          },
          '& .footer__logo--container': {
            '& p': {
              marginTop: theme.spacing(1),
              marginBottom: 0,
            },
          },
          '& .footer__logo': {
            width: '180px',
            padding: theme.spacing(1),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            borderRadius: theme.shape.borderRadius * 4,
            backgroundColor: theme.palette.background.default,
            boxShadow:
							'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          },
          '& .footer__closing--text': {
            color: theme.palette.custom.fonts.fontTwo,
          },
          '& .footer__links': {
            padding: theme.spacing(3),
            flex: 1,
            borderRadius: theme.shape.borderRadius * 4,
            background: theme.palette.background.default,
            boxShadow:
							'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',

            marginTop: '1rem',
          },
          '& .footer__divider': {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(4),
          },
          '& .footer__divideBar': {
            flex: 1,
            color: '#000',
            height: '10%',
          },
          '& h3': {
            color: theme.palette.custom.fonts.fontThree,
            fontWeight: 700,
            borderBottom: '4px solid #F0827D',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
          },
          '& .links__group': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& a': {
              margin: '0.5rem 0',
              color: 'inherit',
              textDecoration: 'none',
              paddingBottom: '1rem',
              borderBottom: `solid 1px ${theme.palette.custom.fonts.fontFour}`,
              transition: '0.2s',
              width: '100%',
              '&:hover': {
                color: Color(theme.palette.primary.light).string(),
              },
            },
            '&.forbole': {
              '& a:last-child': {
                paddingBottom: '0',
                borderBottom: 'none',
              },
            },
            '&.media': {
              display: 'none',
            },
            [theme.breakpoints.up('lg')]: {
              '& a': {
                borderBottom: 'none',
                padding: 0,
                width: 'auto',
              },
              '&.media': {
                display: 'grid',
              },
            },
          },
          [theme.breakpoints.up('md')]: {
            paddingBottom: 0,
            '& .MuiDivider-root': {
              marginBottom: 0,
            },
            '& .footer__closing--container': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: theme.spacing(1, 0),
            },
          },
          [theme.breakpoints.up('lg')]: {
            '& .MuiDivider-root': {
              marginTop: theme.spacing(5),
            },
            '& .footer': {
              display: 'flex',
              flex: 1,
            },
            '& .footer__links': {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: 0,
            },
            '& h3': {
              fontSize: '1.125rem',
              marginTop: 0,
            },
            '& .footer__social': {
              justifyContent: 'flex-end',
            },
          },
        },
      };
    },
  )();

  return styles;
};
