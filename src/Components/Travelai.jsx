import axios from 'axios';
import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";

const Travelai = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);
  
    const generateAnswer = async (e) => {
      setGeneratingAnswer(true);
      e.preventDefault();
      setAnswer("Loading your answer... \n It might take up to 10 seconds");
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
            import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
          }`,
          method: "post",
          data: {
            contents: [{ parts: [{ text: question }] }],
          },
        });
  
        setAnswer(
          response.data.candidates[0].content.parts[0].text
        );
      } catch (error) {
        console.log(error);
        setAnswer("Sorry - Something went wrong. Please try again!");
      }
  
      setGeneratingAnswer(false);
    };
    return (
       
       <div className=' mx-auto lg:px-20 '>
        <form
      onSubmit={generateAnswer}
      className="w-full  mx-auto  text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
    >
        <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">Travel AI</h1>
   
      <textarea
        required
        className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything"
      ></textarea>
      <button
        type="submit"
        className={`bg-cyan-400 text-white p-3 rounded-md hover:bg-cyan-600 transition-all duration-300 ${
          generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={generatingAnswer}
      >
        Generate answer
      </button>
    </form>
    <div className="w-full mx-auto text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
      <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
    </div>
        </div>
    );
};

export default Travelai;