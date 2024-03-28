import ReactMarkdown from "react-markdown";

function ResponseChat({ message }: { message: string }) {
  return (
    <div className="w-full h-10  p-4 h-fit min-h-[80vh] mb-4 text-white">
      <ReactMarkdown>{message}</ReactMarkdown>
    </div>
  );
}

export default ResponseChat;
