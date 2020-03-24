import React, { useContext} from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography"
import LinkM from "@material-ui/core/Link"
import { Link, navigate } from 'gatsby'
import FirebaseContext from "./FirebaseContext"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  hideOnMobile: {
    [theme.breakpoints.down('sm')]: {
      display: "none",
    }
  }
}))

const sections = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Feast Live Schedule & Location", url: "/feast-live" },
  { title: "Feast Talks", url: "/feast-talks" },
  { title: "Feast Light Locations", url: "/feast-light" },
  { title: "Contact Us", url: "/contact-us" },
]

export default function Header(props) {
  const classes = useStyles()
  const { title } = props
  const auth = useContext(FirebaseContext)

  function logout(e) {
    e.preventDefault()
    auth[1].auth().signOut()
  }
  
  function login(e) {
    e.preventDefault()
    navigate('/about')
  }
  

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" className={classes.hideOnMobile}>Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton className={classes.hideOnMobile}>
          <SearchIcon />
        </IconButton>
  {auth[0] ? <Button size="small" className={classes.hideOnMobile}>Hi {auth[0].displayName}, </Button>: <></>}
        {auth[0] ? 
          <Button variant="outlined" size="small" className={classes.hideOnMobile} onClick={logout}>
            Log Out
          </Button> : 
          <Button variant="outlined" size="small" className={classes.hideOnMobile} onClick={login}>
            Log In
          </Button>}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link to={section.url}>
            <LinkM
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </LinkM>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
