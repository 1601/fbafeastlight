import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Hidden from "@material-ui/core/Hidden"
import { Room, AccessTime } from '@material-ui/icons';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
}));

export default function Main(props) {
  const classes = useStyles()
  const { title, events } = props
  
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {events.map(event => (

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Button color="secondary">
              <Moment format="D MMM">
                {event.date}
              </Moment>
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {event.title}
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item>
              <AccessTime></AccessTime>
            </Grid>
          
            <Grid item>
              <Button color="primary">
                <Moment format="hh:mm A">
                  {event.date}
                </Moment>
              </Button>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item>
              <Room></Room>
            </Grid>
          </Hidden>
          <Grid item>
            <Button color="primary">{event.locationTitle}</Button>
          </Grid>
        </Grid>
      </Paper>
      ))}
    </Grid>
  )
}

Main.propTypes = {
  events: PropTypes.array,
  title: PropTypes.string,
}
