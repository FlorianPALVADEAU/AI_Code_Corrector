import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Input({ onSendMessage, setMessage:setAppMessage }: any) {
  const [message, setMessage] = useState("");

  const handleClick = (e: any) => {
    onSendMessage(message, e);
    setMessage("");
  };

  return (
    <div className="">
      <form className="flex w-full">
        <textarea
          name="content"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            setAppMessage(e.target.value)
          }}
          className="w-full px-4 py-2 h-12  min-h-12 rounded-s-xl text-neutral-600 outline-none focus:text-white focuse:outline-none text-base border border-gray-400 border-r-0 bg-transparent resize-none"
        ></textarea>
        <button
          onClick={(e) => { handleClick(e)}}
          className="w-[100px] h-12 bg-green-700 rounded-e-xl border border-gray-400 hover:bg-green-800"
          type="submit"
        >
          <div>
            <FontAwesomeIcon color="white" icon={faPaperPlane} />
          </div>
        </button>
      </form>
    </div>
  );
}

export default Input;
