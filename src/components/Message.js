import axios from "axios";
import React, {useState, useEffect }from "react";

const Message = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get("https://ayulintangapi.herokuapp.com/api/comment")
        .then(res => {
            console.log(res.data);
            setMessages(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        
    }, []);

    return (
        <div className="mt-10 px-5">
            <div classname="container justify-center flex">
                {messages.map(val => (
                    <div className="w-full pt-5 text-gray-100">
                    <h1 className="bg-gray-700 px-5 py-5 rounded-xl" id={val.id}>{val.message}</h1>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Message;