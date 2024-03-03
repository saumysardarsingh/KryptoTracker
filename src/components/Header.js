import {
  AppBar,
  Button,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AIcoins from '../Pages/AIcoins'

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Tracker
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            {/* <input type="Button" value="Crypto Academy" color="Red"></input> */}
            
            <a href="https://cryptosaumy.weebly.com">
            <Button variant="outlined" color="primary" onClick={()=>Response.render('Pages/Academy')}>
              Academy
            </Button>
            </a>

            <a href="https://cryptosaumy.weebly.com/ai-coins.html">
            <Button variant="outlined" color="primary" onClick={()=>Response.render('Pages/AIcoins')}>
             AI Coins
            </Button>
            </a>


            <a href="https://accounts.binance.com/register?ref=36838397">
            <Button variant="outlined" color="primary" onClick={()=>Response.render('Pages/CoinPage')}>
             Buy/Sell Crypto
            </Button>
            </a>
            
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
