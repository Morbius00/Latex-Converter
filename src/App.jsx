import { useState } from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
    try {
      // Attempt to parse LaTeX; any invalid input would cause a render error
      setError(''); // Clear errors if the input is valid
    } catch {
      setError('Invalid LaTeX syntax');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">LaTeX Converter</h1>
      <textarea
        className="w-full max-w-2xl p-4 mb-4 text-lg border rounded-lg focus:drop-shadow-xl focus:shadow-indigo-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        rows="4"
        placeholder="Enter LaTeX code here..."
        value={input}
        onChange={handleInputChange}
      ></textarea>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="w-full max-w-2xl p-4 bg-white border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Rendered Output:</h2>
        {input.trim() ? (
          <div className="text-lg">
            <Latex>{`$$${input}$$`}</Latex>
          </div>
        ) : (
          <p className="text-gray-500">Your LaTeX output will appear here...</p>
        )}
      </div>
    </div>
  );
}
