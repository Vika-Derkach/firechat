import { Button } from "@material-ui/core";
import firebase from "firebase";
import React from "react";
import { auth } from "../firebase";

function SignIn() {
  function signInWithGoogle(params) {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign In with Google</Button>
    </div>
  );
}

export default SignIn;
