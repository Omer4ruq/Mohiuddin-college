import { useState } from "react";
import ResultCard from "./ResultCard";
import ResultForm from "./ResultForm";


const ExamResult = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  return (
  <div>

    <ResultForm setLoading={setLoading} setError={setError} setResults={setResults} />

    
    {loading && !results && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}

    {
      results && <ResultCard results={results} />
    }
  </div>
  );
};

export default ExamResult;
