"use client"
import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  // Handle button click
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle evaluation (calculate the result)
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-end">
        <input
          type="text"
          className="w-full p-4 text-right text-2xl font-bold border border-gray-300 rounded-lg mb-4"
          value={input}
          readOnly
        />
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('7')}
        >
          7
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('8')}
        >
          8
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('9')}
        >
          9
        </button>
        <button
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handleClick('/')}
        >
          ÷
        </button>

        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('4')}
        >
          4
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('5')}
        >
          5
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('6')}
        >
          6
        </button>
        <button
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handleClick('*')}
        >
          ×
        </button>

        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('1')}
        >
          1
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('2')}
        >
          2
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('3')}
        >
          3
        </button>
        <button
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handleClick('-')}
        >
          −
        </button>

        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('0')}
        >
          0
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleEvaluate}
        >
          =
        </button>
        <button
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handleClick('+')}
        >
          +
        </button>

        <button
          className="col-span-4 p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
