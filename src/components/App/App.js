import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Menu from '../Menu';
import firebase from 'firebase';
import firebaseConfig from '../config';
firebase.initializeApp(firebaseConfig);



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    if (firebase.auth().currentUser) {
      this.setState({ user: firebase.auth().currentUser });
    }

    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      this.setState({ user });
    });
  }
  SignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  LogOut() {
    firebase.auth().signOut();
  }


  render() {
    return (
      <div className="app">
        <div>
          <h2>
            B3 Dev - React.js
          </h2>
          {!this.state.user ? 
            (<button className="app__button" onClick={this.SignIn.bind(this)}>S'enregistrer</button>)
            : 
            (<button className="app__button" onClick={this.LogOut.bind(this)}>Déconnexion</button>)
          }
          {this.state.user?
            (  <Menu / > )
            :
            ''
          }

        </div>
        {this.state.user ?
          <div className="app__list">
            <Form user={this.state.user}/>
          </div> : "Veuillez vous connecter pour entrer dans la discussion"
        }
      </div>
    )
  }
}
export default App;