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
  body: "Lorem ipsum asdohip asdlkjzxcoi qwelqknsxop Quasdqnao asdoqwx. Asdqweoakal afesem asdhzxtuwqnqlx ;wqeojxzclnnoooweuq Aasdalkjasnzxc as sdae asdqwnas as asdzxwkkme qweqwixzcqn wkejwxmwkqo",
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
