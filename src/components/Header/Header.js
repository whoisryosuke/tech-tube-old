import React from 'react';
import Link from 'gatsby-link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#000000'
  }
};

function Header(props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Link to="/">
            <Typography variant="title" color="inherit">
              Tech Tube
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);