import { useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

const Chat =() => {
const [open,setOpen] = useState(false);
const [text, setText] = useState("");

const handleEmoji = e => {
    setText((prev) =>prev + e.emoji);
    setOpen(false)
};

console.log(text)

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Sam Star</span>
                        <p>prayer makes man perfect lorem10</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum doloelit. Maiores sunt 
                            ipsum tempora ipsam dicta iure temporibus, beatae autem perferendis velit itaque.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://www.google.com/search?q=image&sca_esv=8c3f90bc5e947fd3&sca_upv=1&rlz=1C1UEAD_enIN1102IN1103&sxsrf=ADLYWIKCpe_IIY3451hRz-XpCFZ7aeRCHg:1726483837082&udm=2&source=iu&ictx=1&vet=1&fir=Q53WJiavu6IJtM%252C0JWe7yDOKrVFAM%252C%252Fm%252F0jg24%253BtYmxDgFq4MrkJM%252C-t22bY2ix3gHaM%252C_%253BsKMM4eBjWSQEBM%252CB51x0PBR9KNzvM%252C_%253B2brKLR3s5kTpPM%252CExDvm63D_wCvSM%252C_%253B5RFroDSkyf1y6M%252CYAe2I9AqIHgndM%252C_&usg=AI4_-kRmEeoXPibEaVcHVEiWnr5hnUnfig&sa=X&ved=2ahUKEwjsj8e-pceIAxV8zzgGHaHTJ9kQ_B16BAgtEAE#vhid=Q53WJiavu6IJtM&vssid=mosaic&vwlns=WyIwQ0JVUWg2Y0dhaGNLRXdpUXlZckNwY2VJQXhVQUFBQUFIUUFBQUFBUUJBIl0=&lns=W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIkVrY0tKREExWlROaE5URTNMVEUzTVdVdE5EYzJPQzA0WWpsaExUaGlaVFUyTldJME1UQTVZeElmYXpob1FuZHFibkpCVWpSbGMwWldkMUYzZG5veE4wVlhSV3MyYmtoNGF3PT0iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsWyI1YTI3NDQwNC03MjJiLTQxOTEtOWRjZi1iMDEzYmQyYWZmZTYiXV0=" alt="" />
                        <p>Lorem ipsum doloelit. Maiores sunt 
                            ipsum tempora ipsam dicta iure temporibus, beatae autem perferendis velit itaque.</p>
                        <span>1 min ago</span>

                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum doloelit. Maiores sunt 
                            ipsum tempora ipsam dicta iure temporibus, beatae autem perferendis velit itaque.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum doloelit. Maiores sunt 
                            ipsum tempora ipsam dicta iure temporibus, beatae autem perferendis velit itaque.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." 
                value={text}
                onClick={(e)=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)} />
                    <div className="picker">
                      <EmojiPicker open={open}  onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat 
//19.30