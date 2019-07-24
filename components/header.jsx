import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import Link from "./link";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
    opacity: 0.8,
    '&:hover': { textDecoration: 'none' },
    '&:active': { opacity: 1 }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link className={classes.link} href="/" as="/blog">
            <Typography variant="h6" color="inherit">
              Next.js blog
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
