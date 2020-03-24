import React, { Component } from 'react'

import getFirebase from '../firebase'
import FirebaseContext from './FirebaseContext'
import SignIn from '../containers/SignIn'
import { firebase } from '@firebase/app'
import * as auth from '@firebase/auth'
import * as database from '@firebase/database'
import 'firebase/auth'

class authOverLayer extends Component {
  state = {
    firebase: null,
    authenticated: false,
    user: null
  }

  componentDidMount() {

    Promise.all([firebase, auth, database]).then(values => {
      const firebase = getFirebase(values[0])
      this.setState({ firebase: [this.state.user, firebase] })

      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.setState({ authenticated: false, firebase: [user, firebase] })
        } else {
          this.setState({ authenticated: true, firebase: [user, firebase] })
        }
      })
    })
  }

  render = () => {
    const { firebase, authenticated } = this.state

    if (!firebase) return <>firebase not available</>
    if (this.props.pageContext.layout === "private") {
      return (
          <FirebaseContext.Provider value={firebase}>
              {authenticated ? this.props.children : <SignIn />}
          </FirebaseContext.Provider>
          )
    }
    return (
      <FirebaseContext.Provider value={firebase}>
          {this.props.children}
      </FirebaseContext.Provider>
      )
  }
}

export default authOverLayer
