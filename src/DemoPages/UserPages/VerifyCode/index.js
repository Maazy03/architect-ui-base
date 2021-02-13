import React, { useState } from "react";
import {
  Spinner,
  FormFeedback,
  Col,
  Form,
  Row,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as utils from "../../../common/utils";
import { useSelector } from "react-redux";
import Art_Img from "../../../assets/img/Reserves1.jpeg";
const axios = require("axios");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        AfricanArt.International
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Art_Img})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    marginBottom: 40,
    flexGrow: 1,
    fontFamily: "Dancing Script",
    cursor: "pointer",
  },
}));

export default function VerifyCodeBoxed(props) {
  const classes = useStyles();
  const [state, setState] = useState({ code: "" });
  const [stateLoader, setStateLoader] = useState(false);
  const [stateIsCodeValid, setStateIsCodeValid] = useState(true);
  const [stateIsFormValid, setStateIsFormValid] = useState(false);
  const token = useSelector((state) => state.auth.token);

  function _onBlur(event) {
    const { value } = event.target;
    let codeValid = utils.isVerifyCodeValid(value);
    setStateIsCodeValid(Boolean(codeValid));
  }

  function _onChange(event) {
    const { value } = event.target;
    setState({ code: value });
    if (state.code.length > 3) {
      setStateIsFormValid(true);
    } else {
      setStateIsFormValid(false);
    }
  }

  async function onVerifyCode() {
    try {
      setStateLoader(true);
      const { code } = state;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/verifyCode`,
        { code: code },
        config
      );
      setStateLoader(false);
      setState({ code: "" });
      props.history.push({
        pathname: "/pages/reset-password-boxed",
      });
    } catch (error) {
      console.log("check error", error);
      if (error.response) {
        utils._toast(error.response.data.responseMessage, "error");
      } else {
        utils._toast("Netwrok Error", "error");
      }
      setStateLoader(false);
      setState({ code: "" });
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h5" className={`${classes.title}`}>
            <b>AfricanArt International</b>
          </Typography>
          <Typography component="h1" variant="h5">
            Admin Panel
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Code"
            helperText={
              stateIsCodeValid ? "" : "Code length min 5 and max 6 digit."
            }
            type="number"
            name="code"
            placeholder="code here..."
            value={state.code}
            onChange={_onChange}
            onBlur={_onBlur}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!stateIsFormValid}
            className={classes.submit}
            onClick={onVerifyCode}
          >
            {stateLoader ? (
              <div style={{ width: "130px" }}>
                <Spinner
                  style={{ width: "20px", height: "20px" }}
                  color="light"
                />
              </div>
            ) : (
              "Verify Code"
            )}
          </Button>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
