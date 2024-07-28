import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

const questionStrings = ["How are ya feeling today?", "How are things at home? Do you have fun with your family?", "How are things with your friends? Do you have fun at school or do you ever feel upset there?", "What do you like to do for fun? Do you have any favorite games or activities?", "Have you felt sad, angry, or scared lately? What made you feel that way?", "Is there any place where you feel really happy and safe? Can you tell me about it?", "If you ever feel sad or scared, is there someone you talk to who makes you feel better?", ];

const tools = [
  {
    type: "function",
    function: {
      name: "track_feelings",
      description: "Track the child's feelings over time. Comfort the child and reassure them feeling a certain way is normal.",
      parameters: {
        type: "object",
        properties: {
          feeling: {
            type: "string",
            enum: ["happy", "sad", "angry", "scared", "excited"],
            description: "The feeling expressed by the child.",
          },
          timestamp: {
            type: "string",
            format: "date-time",
            description: "The time when the feeling was recorded.",
          },
        },
        required: ["feeling", "timestamp"],
      },
    }
  }
];

const openai = new OpenAI({
  apiKey: "sk-proj-tCW9NmPvZ3CUXQ0w13HYT3BlbkFJRzhr6iT4qXARnb16RvF9",
  organization: "org-Biv2kknXHwCsolQGBYQhEzab",
  dangerouslyAllowBrowser: true
});

const Chatbot = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);

  useEffect (() => {

    const setupModel = async () => {
      const setupMessage = { role: 'assistant', content: "I am Popo. I will converse with children and help them navigate through their feelings. I will talk warmly with them and help them understand their feelings. Don't ask questions. Instead, make the child understand that the way they are feeling is normal and support them through it. Maybe try sharing a story that cheers them up. Separate parts of the prompt into paragraphs accordingly. At the end of each reply, let the child know they can press the next question button to move on in the conversation if they want to."};
      setMessages((prevMessages) => [...prevMessages, setupMessage]);
    };

    setupModel();
  }, [])
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleStep = () => {
      setStep(step + 1);
      const startMessage = { role: 'assistant', content: questionStrings[step]};
      setMessages((prevMessages) => [...prevMessages, startMessage]);
    }
  

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

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
        <button onClick={handleStep} className="p-2 ml-5 bg-blue-500 text-white rounded">Next Question </button>
      </div>
    </div>
  );
};

export default Chatbot;
