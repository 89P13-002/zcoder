import {GoogleOAuthProvider} from "@react-oauth/google"
import Messenger from "./components/Messenger";
import AccountProvider from "./components/constants/contexts/AccountProvider";

const App = () =>{
  const clientId = "542992746592-gbv5al89ssai7b0md7n50lbq08mbcdmf.apps.googleusercontent.com";
  return(
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger></Messenger>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}
export default App;