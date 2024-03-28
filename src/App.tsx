import { useState } from "react";
import ResponseChat from "./Components/ResponseChat";
import Input from "./Components/Input";
import logo from './images/logo_white.png'

function App() {
  const [result, setResult] = useState(``);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const handleSendMessage = async (message: any, e: any) => {
    const fetchData = async () => {
      e.preventDefault();
      try {
        setLoading(true);
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
        setLoading(false);

        const reader = response.body.getReader();

        const readStream = async () => {
          const { done, value } = await reader.read();

          if (done) {
            setResult((prevData) => {
              console.log(prevData);
              return prevData + ` \n\n---\n`;
            });
            return;
          }

          const chunk = new TextDecoder().decode(value);
          const chunkParsed = JSON.parse(chunk);

          setResult((prevData) => {
            console.log(prevData);
            return prevData + chunkParsed.response;
          });

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
        {
          message ? (
            <ResponseChat message={result} loading={loading} />
          ) : (
            <div className="w-full h-18 flex justify-start items-center flex-col p-4 h-fit min-h-[80vh] mb-4 text-white gap-2">
              <img src={logo} alt="logo" width={100}/>
              <h1 className="text-4xl font-semibold" >Welcome on Whoopty AI.</h1>
            </div>
          )
        }

        <Input setMessage={setMessage} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
