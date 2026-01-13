import { useState } from 'react'
import './App.css'
import axios from "axios";
import DesignInput from './components/DesignInput.tsx';
import ReviewResult from './components/ReviewResult.tsx';
import MermaidDiagram from "./components/MermaidDiagram";

function App() {
  const [result, setResult] = useState<Record<string, string> | null>(null);
  const [diagram, setDiagram] = useState<string>("");

  const handleSubmit = async (designDescription: string) => {
    try {
      const response = await axios.post('http://localhost:4000/api/review', {designDescription});
      const data = response.data.review();
      setResult(data);
      setDiagram(response.data.mermaidDiagram);
    }
    catch (error) {
      console.error("Error submitting design:", error);
    }
  }

   return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI System Design Reviewer</h1>
      <DesignInput onSubmit={handleSubmit} />
      <ReviewResult result={result} />
      {diagram && <MermaidDiagram diagram={diagram} />}
    </div>
  );
}

export default App
