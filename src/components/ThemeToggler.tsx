import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import { useThemeContext } from '../context/ThemeContext';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.contrastText,
  },
}));
const ThemeToggler = (): JSX.Element => {
  const classes = useStyles();
  const { themeType, setThemeType } = useThemeContext();
  return (
    <IconButton
      onClick={() => setThemeType(themeType === 'dark' ? 'light' : 'dark')}
    >
      {themeType === 'dark' ? (
        <WbSunnyIcon />
      ) : (
        <Brightness2Icon className={classes.icon} />
      )}
    </IconButton>
  );
};

export default ThemeToggler;