import axios from "axios";
import React, { useState } from "react";


const Contact = () => {
    const [messages, setMessages] = useState({
        message: "",
    });

    const handleChange = (e) => {
        const newMessage = { ...messages };
        newMessage[e.target.id] = e.target.value;
        setMessages(newMessage);
        console.log(messages);
    }
    const refreshPage = () => {
        window.location.reload(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://ayulintangapi.herokuapp.com/api/comment", messages)
            .then(res => {
                refreshPage();
            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="mt-10 px-5">
            <div classname="container justify-center flex">
                <h2 className="text-white flex justify-center text-xl lg:text-4xl">Contact Me</h2>
                <form class="w-full" onSubmit={(e) => handleSubmit(e)}>
                    
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea onChange={(e) => handleChange(e)} class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Send
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
