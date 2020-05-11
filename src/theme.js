import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: orange,
    success: green,
  },
  status: {
    danger: red,
  },
});

export default theme;