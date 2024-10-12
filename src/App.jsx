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

  const [currentUser, isLoading, fetchUserInfo] = useUserState(null); // Manage user state dynamically

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user.uid);
      setUser(user); // Update the user state when authentication state changes
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        currentUser ? (
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
