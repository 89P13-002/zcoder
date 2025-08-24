import { useState, useRef, useEffect, createContext } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";

export const AccountContext = createContext(null);
function AccountProvider({ children }) {

  const [account, setAccount] = useState(() => {
    const savedAccount = Cookies.get("account");
    return savedAccount ? JSON.parse(savedAccount) : null;
  });

  // const initialPage = parseInt(Cookies.get('page') || '6', 10);

  const [person, setPerson] = useState({});
  const [page, setPage] = useState(6);
  const [profile, setProfile] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const socket = useRef();
  useEffect( () => {
    socket.current = io("ws://localhost:8000");
  },[]);

  // useEffect(() => {
  //     Cookies.set('page', page.toString(), {expires: 1,secure:true,sameSite:'Strict'});
  // }, [page]);

  useEffect(() => {
    if(account){
      Cookies.set("account",JSON.stringify(account),{expires : 1,secure:true,sameSite:'Strict'});
    }
    else{
      Cookies.remove("account");
    }
  },[account]);

  return (
    <AccountContext.Provider value={{ 
        account, 
        setAccount, 
        person, 
        setPerson, 
        page, 
        setPage, 
        profile, 
        setProfile, 
        activeUsers, 
        setActiveUsers,
        socket
        }}>
      {children}
    </AccountContext.Provider>
  )

}
export default AccountProvider