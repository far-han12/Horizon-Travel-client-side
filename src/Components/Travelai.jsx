import axios from 'axios';
import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import NavBar from './NavBar';
import Footer from './Footer';
import { MdOutlineCardTravel } from "react-icons/md";
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
        setQuestion("")
      } catch (error) {
        console.log(error);
        setAnswer("Sorry - Something went wrong. Please try again!");
      }
     
      setGeneratingAnswer(false);
    };
    return (
       
      <div>
        <NavBar></NavBar>
      

         <div className='my-8 mx-auto md:px-10  lg:px-14 '>
      <div>
            
      <h1 className='font-semibold text-2xl lg:text-3xl text-center'>Discover the Future of Travel with Travel AI Powered by Gemini</h1>
<h2 className='font-medium text-xl lg:text-2xl text-center mt-5 mb-3 lg:mb-5'>Plan Your Perfect Trip with Intelligent Recommendations and Insights</h2>
      </div>
        <form
      onSubmit={generateAnswer}
      className="w-full  mx-auto  text-center rounded-lg shadow-lg bg-white  py-6 px-4 transition-all duration-500 transform hover:scale-105"
    >
        <h1 className="text-4xl flex justify-center mt-5  font-bold text-blue-500 mb-4 animate-pulse">Travel AI <MdOutlineCardTravel></MdOutlineCardTravel></h1>
   
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
    <div className="w-full mx-auto text-center rounded-lg  bg-white  my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
      <ReactMarkdown className="p-4 text-left ">{answer}</ReactMarkdown>
    </div>
        </div>
      </div>
    );
};

export default Travelai;