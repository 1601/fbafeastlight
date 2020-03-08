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
  image: "https://previews.123rf.com/images/rawpixel/rawpixel1810/rawpixel181007033/109637827-group-of-interlocked-fingers-praying-together.jpg",
  imgText: "compilation of feast light talks",
}

const aboutUs = {
  title: "What is the Feast Light ?",
  body1: "​The Feast Light is a small gathering of friends who want to receive spiritual nourishment from the series of talks recorded from a live audience at The Feast. The Feast is a weekly gathering of the Light of Jesus Family.",
  body2: "The Feast Light is a spiritual nourishment to help the viewer live a more fulfilling life.",
  body3: "The Feast Light is a small group of people (from 10 to 50 people) who gather in their homes or offices, pray together, share together, and watch and listen to God’s Word via a video each week. (Yes, you don’t have to preach; I or another preacher will do that for your group via video.) After watching with your friends or office-mates, you can have a short sharing. We are sure that the topics will bless each one of you in a particular way. We encourage you to invite your friends and share the message for the week."
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
                {aboutUs.body1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="body2" color="inherit" paragraph>
                {aboutUs.body2}
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="body2" color="inherit" paragraph>
                {aboutUs.body3}
              </Typography>
            </Grid>
            <Grid item>
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/67sec027cDc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
