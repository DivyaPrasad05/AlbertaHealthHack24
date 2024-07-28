import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';
import NavBar from "../Components/NavBar.js";
import { FaMicrophone, FaArrowRight } from 'react-icons/fa';

const questionStrings = [ 
  "How are things at home? Do you have fun with your family?", 
  "How are things with your friends? Do you have fun at school or do you ever feel upset there?", 
  "What do you like to do for fun? Do you have any favorite games or activities?", 
  "Have you felt sad, angry, or scared lately? What made you feel that way?", 
  "Is there any place where you feel really happy and safe? Can you tell me about it?", 
  "If you ever feel sad or scared, is there someone you talk to who makes you feel better?",
  "Wow, we had such a great time chatting! Remember, Popo is always here whenever you need a friend to talk to. Keep being the amazing, curious, and kind person you are! Until next time, have lots of fun and keep smiling! Goodbye for now, friend!"
];

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
  apiKey: "sk-proj-BFqQP7sbpEqGIEYzvYCeT3BlbkFJOdHkGKbZEFzi9ffwXkot",
  organization: "org-Biv2kknXHwCsolQGBYQhEzab",
  dangerouslyAllowBrowser: true
});

const Question = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);

  useEffect(() => {
    const setupModel = async () => {
      const setupMessage = { role: 'assistant', content: "I am Popo. I will converse with children and help them navigate through their feelings. I will talk warmly with them and help them understand their feelings. Don't ask questions. Instead, make the child understand that the way they are feeling is normal and support them through it. Maybe try sharing a story that cheers them up. Separate parts of the prompt into paragraphs accordingly. At the end of each reply, let the child know they can press the next question button to move on in the conversation if they want to. Also make the answers concise and short", };
      setMessages((prevMessages) => [...prevMessages, setupMessage]);
      const starter = { role: 'assistant', content: "How are ya feeling today?"};
      setMessages((prevMessages) => [...prevMessages, starter]);
    };

    setupModel();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleStep = () => {
    if (step < questionStrings.length) {
      setStep(step + 1);
      const startMessage = { role: 'assistant', content: questionStrings[step] };
      setMessages((prevMessages) => [...prevMessages, startMessage]);
    }
    if (step > questionStrings.length) {
        document.getElementById('submit-button').disabled = true;
    }
  };

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
    <div className="min-h-screen" style={{ backgroundImage: 'url(/QuestionPageImage.png)' }}>
      <NavBar />
      <div className="mt-5">
        <div className="relative ml-10 w-5/6 sm:max-w-xl sm:ml-80 ">
          <img src="/chatbox.png" alt="chatbox" />
          <div className="absolute top-4 left-16 sm:top-7 sm:left-28 w-3/5 max-h-28 sm:max-h-56 bg-white text-black px-4 py-2 rounded-lg overflow-auto">
            {messages.map((msg, index) => (
              <p key={index} className={msg.role === 'user' ? 'bg-blue-200 text-right mt-5' : 'bg-gray-200 text-left mt-5'}>
                {msg.content}
              </p>
            ))}
          </div>
          
        </div>

        <div className="ml-5 sm:ml-48 flex flex-row">
          <img src="/po1.png" alt="Panda" className="w-32 sm:w-48" />
          <div className="sm:ml-10 ml-3 flex items-end mb-3">
            <div className="bg-gray-200 rounded-full flex py-2 px-10 w-60 sm:w-96">
              <input
                type="text"
                placeholder="Talk to Popo"
                className="flex-grow p-2 outline-none w-4/6 sm:w-5/6"
                value={input}
                onChange={handleInputChange}
              />
              <button className="bg-blue-500 mx-1 p-1 rounded-full text-white" onClick={handleSend}>
                <FaArrowRight />
              </button>
              <button id="submit-button" className=" bg-blue-500 text-white px-2 py-2 rounded-full" onClick={handleStep}>
            Next Question
          </button>
              <button className="">
                <FaMicrophone className="text-gray-600 hover:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
