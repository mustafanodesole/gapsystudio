import React, { useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import '../css/ChatButton.css'
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { ImCross } from "react-icons/im";



const FloatingChatButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="fab-container">
            {isChatOpen && (
                <div className="chat-box w-[95%] h-[88vh] sm:h-auto sm:w-[400px] ml-10">
                    <div className="text-white p-5 bg-[#2A2A2A] cursor-pointer flex flex-col gap-2 justify-center items-center" onClick={toggleChat}>
                        <span className="flex items-center gap-2 bg-[#454545] px-3 py-1 rounded-xl">
                            <IoChatbubblesSharp />
                            <p className="text-white font-neue-montreal">Chat</p>
                        </span>
                        <div className="flex items-center">
                            <span>
                                <MdAccountCircle className="text-3xl" />
                            </span>

                            <span className="bg-white p-1 rounded-full">
                                <img src='/images/120_.webp' className="w-5" />
                            </span>
                        </div>

                        <div>
                            <p className="text-white text-center">Questions? Chat with us!</p>
                            <p className="text-sm text-center">Last active 9/20/2024</p>
                        </div>
                    </div>


                    {/* chat content */}
                    <div className="chat-content h-[60vh] sm:h-auto sm:pb-10">
                                <div className="flex justify-start items-start gap-1">
                                    <img src='/images/120_.webp' className="w-6"/>
                                    <div>
                                        <p>gapsystudio</p>
                                        <p className="p-2 bg-[#2A2A2A] text-white text-sm rounded-lg">How Can we help with gapsystudio?</p>
                                    </div>
                                </div>
                    </div>

                    {/* Chat footer */}
                    <div className="chat-footer">

                        <input type="text" placeholder="Compose your message" className="bg-transparent " />
                        <button><IoMdSend /></button>
                    </div>
                </div>
            )}
            <button className="fab" onClick={toggleChat}>
                {!isChatOpen ?  <FaCommentAlt /> : <ImCross />}
            </button>
        </div>
    );
};

export default FloatingChatButton;
