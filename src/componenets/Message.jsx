import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function Message({message}){

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({behavior:"smooth"})
    }, [message]);

    // console.log(data.user.photoURL );
    var date=message.date;
    console.log(date.seconds);
    date=(new Date(Number(date.seconds)*1000).toTimeString());
    console.log(date.substring(0,8));
    date=date.substring(0,8);
    return (
        <div ref={ref}
         className={`message ${message.senderId === currentUser.uid && "owner"}`}
         >
            <div className="messageInfo">
                <img src={
                    message.senderId === currentUser.uid 
                       ? currentUser.photoURL 
                       : data.user.photoURL 
                   }
                
                 alt="" />
                <span>{date}</span> 
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt=""/>}

            </div>
        </div>
    )
}

export default Message;