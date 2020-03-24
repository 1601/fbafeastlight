import React from "react"
import { StyledFirebaseAuth } from "react-firebaseui"
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core"
import Header from "../components/header"
import Footer from "../components/footer"
import { getUiConfig } from "../firebase"
import { withFirebase } from "../components/FirebaseContext"

const signInText = {
  title: "Hi, please login to view & download exclusive content.",
  body: "Having trouble? Ask for help on our chat support.",
}

const SignIn = ({ firebase }) => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header title="the FEAST Light Bay Area" />
      <main>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography align="center" variant="h6" color="inherit" paragraph>
              {signInText.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              variant="p"
              color="error"
              display="block"
              paragraph
            >
              <i>{signInText.body}</i>
            </Typography>
          </Grid>
          <Grid item>
            <StyledFirebaseAuth
              uiConfig={getUiConfig(firebase[1])}
              firebaseAuth={firebase[1].auth()}
            />
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

export default withFirebase(SignIn)
