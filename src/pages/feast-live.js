import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import Header from "../components/header"
import MainFeaturedPost from "../components/mainFeaturedPost"
import Main from "../components/main"
import Sidebar from "../components/sideBar"
import Footer from "../components/footer"
import Typography from "@material-ui/core/Typography"
import { graphql } from 'gatsby'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const mainFeaturedPost = {
  title: "Feast Live",
  description:
    "You are loved",
  image: "https://www.reliancedigital.in/wp-content/uploads/2019/02/netflix_movies_cover.jpg",
  imgText: "compilation of feast light talks",
  linkText: "Join for free.",
}

const sidebar = {
  title: "About",
  description:
    "​The Feast Light is a small gathering of friends who want to receive spiritual nourishment from the series of talks recorded from a live audience at The Feast.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 2019", url: "#" },
    { title: "October 2019", url: "#" },
    { title: "September 2019", url: "#" },
    { title: "August 2019", url: "#" },
    { title: "July 2019", url: "#" },
    { title: "June 2019", url: "#" },
    { title: "May 2019", url: "#" },
    { title: "April 2019", url: "#" },
  ],
  social: [
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
}

const eq = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function LandingPage({data}) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="the FEAST Light Bay Area" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid container spacing={4}>
              {data.feastLive.nodes.map((feastlive) => (
                <Grid item key={feastlive} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {feastlive.title}
                      </Typography>
                      <Typography>
                        {`${feastlive.scheduleDay} ${feastlive.scheduleTime}`}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {feastlive.builders.map((person)=> (
                        <Button size="small" color="primary">
                        {`Bro. ${person.firstName} ${person.lastName}`}
                      </Button>
                      ))}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Feast Light Bay Area"
        description="Make Disciples. Bring People. Closer to Jesus."
      />
    </React.Fragment>
  )
}

export const query = graphql`
  query contentfulFeastLive{
    feastLive: allContentfulFeastLive {
    nodes {
      scheduleDay
      scheduleTime
      title
      location {
        lat
        lon
      }
      builders {
        firstName
        lastName
        picture {
          fixed {
            src
          }
        }
      }
    }
  }
}

`
