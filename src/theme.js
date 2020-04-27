import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
