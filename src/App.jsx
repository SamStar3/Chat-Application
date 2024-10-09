import { useEffect, useState } from "react";
import Chat from "./component/chat/Chat";
import Detail from "./component/detail/Detail";
import AddUser from "./component/list/chatLIst/addUser/AddUser";
import List from "./component/list/List";
import Login from "./component/login/Login";
import Notification from "./component/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase"; // Import 'auth' from your Firebase config

const App = () => {

  const [user, setUser] = useState(null); // Manage user state dynamically

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user); // Update the user state when authentication state changes
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <div className='container'>
      {
        user ? (
          <>
            <List user = {user}/>
            <Chat user = {user}/>
            <Detail user = {user}/>
          </>
        ) : (
          <Login />
        )
      }
      <Notification />
    </div>
  );
};

export default App;
