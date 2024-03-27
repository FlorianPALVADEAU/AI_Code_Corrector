import React from 'react';
import ResponseChat from './Components/ResponseChat';
import Input from './Components/Input';

function App() {
  return (
    <div className="w-full h-full flex justify-between items-center flex-col text-white">
      <ResponseChat />
      <Input />
    </div>
  );
}

export default App;
