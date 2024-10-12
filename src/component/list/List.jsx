import ChatList from "./chatLIst/ChatList"
import "./list.css"
import Userinfo from "./userInfo/UserInfo"

const List =(user) => {
    console.log(user);
    
    return (
        <div className="list">
            <Userinfo/>
            <ChatList/>
            </div>
    )
}

export default List 