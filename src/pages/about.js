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

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const sections = [
  { title: "Home", url: "#" },
  { title: "About Us", url: "#" },
  { title: "Feast Live Schedule & Location", url: "#" },
  { title: "Feast Talks", url: "#" },
  { title: "Feast Light Locations", url: "#" },
  { title: "Contact Us", url: "#" },
]

const mainFeaturedPost = {
  title: "About Us",
  description: "BRING PEOPLE. CLOSER TO JESUS.",
  image:
    "https://static.wixstatic.com/media/a3bae67a4b0b484babca20ada21eb6bf.jpg/v1/fill/w_1600,h_1067,al_c,q_90/file.jpg",
  imgText: "compilation of feast light talks",
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

const bibleVerses = {
  body: `“‘Come, follow me,’ Jesus said, ‘and I will send you out to fish for people.’ At once they left their nets and followed him.”`,
  verse: "Matthew 4:19-20",
  subtitle:
    "God often uses the stories of fisherman in His Word. He wants us to literally “fish for men.” When He asks them to leave their nets, He’s talking about leaving our security, our comfort, and all that we know and follow HIM! For aren’t men more important than “fish?”",
}

export default function Blog() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="the FEAST Light Bay Area" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                align="center"
                variant="body1"
                color="inherit"
                paragraph
              >
                {bibleVerses.body}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="center"
                variant="caption"
                color="error"
                display="block"
                paragraph
              >
                <i>{bibleVerses.verse}</i>
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="center"
                variant="body2"
                color="inherit"
                paragraph
              >
                {bibleVerses.subtitle}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Upcoming Events" />
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
