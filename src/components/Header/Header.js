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
  link: {
    textDecoration: 'none',
    color: '#FFF'
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
          <Typography variant="title" color="inherit">
            <Link to="/" className={classes.link}>Tech Tube</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);