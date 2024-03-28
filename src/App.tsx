import React, { RefObject, useRef, useState } from "react";
import ResponseChat from "./Components/ResponseChat";
import Input from "./Components/Input";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [result, setResult] = useState(``);
  const handleSendMessage = async (message: any, e: any) => {
    const fetchData = async () => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:8000/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "codellama",
            prompt: message,
          }),
        });

        if (!response.body || !response.ok) {
          throw new Error("Failed to fetch");
        }

        const reader = response.body.getReader();

        const readStream = async () => {
          const { done, value } = await reader.read();

          if (done) {
            return;
          }

          const chunk = new TextDecoder().decode(value);
          const chunkParsed = JSON.parse(chunk);

          // const formattedResponse = chunkParsed.response.replace(
          //   /\n/g,
          //   `<br />`
          // );

          setResult((prevData) => prevData + chunkParsed.response);

          readStream();
        };

        readStream();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <div className="flex items-center justify-center w-full h-screen p-10 overflow-x-hidden">
      <div className="w-full max-w-[800px]">
        <ResponseChat message={result} />

        <Input onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
