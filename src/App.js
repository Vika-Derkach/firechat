import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
