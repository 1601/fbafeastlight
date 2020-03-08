import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Header from "../components/header"
import MainFeaturedPost from "../components/mainFeaturedPost"
import Footer from "../components/footer"

const mainFeaturedPost = {
  title: "Contact us",
  description:
    "We wanna know what you think.",
  image: "https://www.fbafeastlight.com/static/creative-4b1a8f84c8e861834bca4f04b5dcbf9e.png",
  imgText: "compilation of feast light talks",
  linkText: "Join Chat",
}

export default function ContactUs() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="the FEAST Light Bay Area" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
      <Footer
        title="Feast Light Bay Area"
        description="Make Disciples. Bring People. Closer to Jesus."
      />
    </React.Fragment>
  )
}
