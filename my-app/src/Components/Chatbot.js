import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-proj-Y0n2rAPJVNWgZAD113M7T3BlbkFJqhlaF3lzNQPeswTzeohI',
  organization: 'org-Biv2kknXHwCsolQGBYQhEzab',
  dangerouslyAllowBrowser: true
});

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const tools = [
      {
        type: "function",
        function: {
          name: "get_current_weather",
          description: "Get the current weather in a given location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g. San Francisco, CA",
              },
              unit: { type: "string", enum: ["celsius", "fahrenheit"] },
            },
            required: ["location"],
          },
        }
      }
    ];

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [...messages, userMessage],
        tools: tools,
        tool_choice: "auto",
      });

      const gptMessage = { role: 'assistant', content: response.choices[0].message.content };
      setMessages((prevMessages) => [...prevMessages, gptMessage]);

      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 p-4 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 ${msg.role === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'} rounded`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white flex">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-1 p-2 border rounded mr-2"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
