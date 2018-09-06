import React from 'react';
import Link from 'gatsby-link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderMenu from './HeaderMenu'

const styles = {
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#FFF',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  header: {
    backgroundColor: '#000000',
  },
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  toggleDrawer = (openState) => () => {
    this.setState({
      open: openState
    });
  };

  render() {
    const { classes, categories } = this.props;
    const { open } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="sticky" className={classes.header}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              <Link to="/" className={classes.link}>Tech Tube</Link>
            </Typography>
          </Toolbar>

        </AppBar>
        <HeaderMenu open={open} onClose={this.toggleDrawer} categories={categories} />
      </div>
    )
  }
}

export default withStyles(styles)(Header);