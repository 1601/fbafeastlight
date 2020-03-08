import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Header from "../components/header"
import MainFeaturedPost from "../components/mainFeaturedPost"
import Footer from "../components/footer"
import Typography from "@material-ui/core/Typography"

const mainFeaturedPost = {
  title: "About Us",
  image: "https://www.fbafeastlight.com/static/creative-4b1a8f84c8e861834bca4f04b5dcbf9e.png",
  imgText: "compilation of feast light talks",
}

const aboutUs = {
  title: "About Us",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}

export default function About() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="the FEAST Light Bay Area" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography align="center" variant="body1" color="inherit" paragraph>
                {aboutUs.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="body2" color="inherit" paragraph>
                {aboutUs.body}
              </Typography>
            </Grid>
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
