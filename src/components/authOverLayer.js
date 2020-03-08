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
  }

  componentDidMount() {

    Promise.all([firebase, auth, database]).then(values => {
      const firebase = getFirebase(values[0])
      this.setState({ firebase })

      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.setState({ authenticated: false })
        } else {
          this.setState({ authenticated: true })
        }
      })
    })
  }

  render = () => {
    const { firebase, authenticated } = this.state

    if (!firebase) return null
    if (this.props.pageContext.layout === "private") {
        return (
            <FirebaseContext.Provider value={firebase}>
                {authenticated ? this.props.children : <SignIn />}
            </FirebaseContext.Provider>
            )
    }
    return this.props.children
  }
}

export default authOverLayer
