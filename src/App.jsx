import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return (
      <div className="loading">
        <ClipLoader color={"#123abc"} loading={isLoading} size={150} />
      </div>
    );
  }

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={currentUser ? <List /> : <Login />} />
          <Route path="/chat" element={currentUser ? <Chat /> : <Login />} />
          <Route path="/detail" element={currentUser ? <Detail /> : <Login />} />
        </Routes>
        <Notification />
      </div>
    </Router>
  );
};

export default App;
