import Chat from "./component/chat/Chat";
import Detail from "./component/detail/Detail";
import AddUser from "./component/list/chatLIst/addUser/AddUser";
import List from "./component/list/List"
import Login from "./component/login/Login";
import Notification from "./component/notification/Notification";

const App = () => {

  const user = true 

  return (

    <div className='container'>
      {
        user ? (
          <>
          <List/>
          <Chat/>
          <Detail/>
          {/* <AddUser/> */}
          </>
        ) : (
          <Login />
        )}
        <Notification/>
    </div>
  );
};

export default App