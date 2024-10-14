import "./addUser.css";
import {db} from "../../../../lib/firebase"
import { collection, doc, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { useState } from "react";
import { create } from "zustand";

const AddUser = () => {

  const [user, setUser] = useState(null)

  const {currentUser} = useUserStore()

  const handleSearch =async e =>{
    e.preventDefualt()
    const formData = new FormData(e.target)
    const username = form.get("username")

    try{

      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", "username"));

      const querySnapShot = await getDoc(q)

      if(!querySnapShot.empty){
        setUser(querySnapShot.doc)
      }
    }catch (err){
      console.log(err)
    }
  }

  const handleAdd = async ()=> {

    const chatRef = collection(db, "chats")
    const userChatsRef = collection(db, "userchats")
    try{
      const newChatsRef = doc(chatRef)

      const chat = await setDoc(chatRef,{
        createdAt: serverTimestamp(), 
        Message: []
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chat:arrayUnion({
          chatId: newChatRef.id,
          lastMessage:"",
          receiverId:currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chat:arrayUnion({
          chatId: newChatsRef.id,
          lastMessage:"",
          receiverId:user.id,
          updatedAt: Date.now(),
        }),
      });
    }catch (err){
      console.log(err);
    }
  }
    return (
        <div className="addUser">
            <form onSubmit={handleSearch}>
              <input type="text" placeholder="Username" name="username"/>
              <button>Search</button>
            </form> 
            {user && <div className="user">
              <div className="detail">
                <img src={user.avatar || "./avatar.png"} alt="" />
                <span>user.username</span>
              </div>
              <button onClick={handleAdd}>Add User</button>
            </div>}
          </div>
    );
};

export default AddUser;