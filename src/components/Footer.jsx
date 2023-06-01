import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography, Button, TextField, IconButton } from "@mui/material";
import { GitHub, Twitter, Instagram } from "@mui/icons-material";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Typography variant="h4" p={1}>
        HealthTrack
      </Typography>
      <div className="container">
        <div>
          <Typography variant="subtitle1" mb={2}>
            general
          </Typography>
          <Typography variant="subtitle2">
            <ul>
              <li>
                <a href="#">faqs</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
            </ul>
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" mb={2}>
            Account
          </Typography>
          <Typography variant="subtitle2">
            <ul>
              <li>
                <a href="#">sign up</a>
              </li>
              <li>
                <a href="#">sign in</a>
              </li>
            </ul>
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" mb={2}>
            features
          </Typography>
          <Typography variant="subtitle2">
            <ul>
              <li>
                <a href="#">workout</a>
              </li>
              <li>
                <a href="#">nutrition</a>
              </li>
              <li>
                <a href="#">challenges</a>
              </li>
              <li>
                <a href="#">reminder</a>
              </li>
            </ul>
          </Typography>
        </div>
        <form>
          <Typography variant="h5" mb={4}>
            <label htmlFor="subscription">subscribe to our newsletter</label>
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            type="email"
            placeholder="Email Address"
            color="primary"
            sx={{ marginBottom: "18px" }}
            htmlFor="subscription"
          />
          <Button variant="outlined" size="medium">
            subscribe
          </Button>
        </form>
      </div>
      <div className="icon-button">
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton sx={{ marginLeft: "10px", marginRight: "10px" }}>
          <Twitter />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
      </div>
      <Typography variant="overline" display="block" align="center">
        &#169; HealthTrack. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
