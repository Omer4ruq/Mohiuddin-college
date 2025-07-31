import axios from 'axios'; // Assuming you're using Axios for API calls
import { useState } from 'react';

function DownloadButton({ dataUrl }) { // Pass dataUrl as a prop

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null); // Clear any previous errors

    try {
      const response = await axios.get(dataUrl, {
        responseType: 'blob', 
      });

      const blob = new Blob([response.data], { type: 'image/png' }); 
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'downloaded_file.png'; 
      link.click();

      window.URL.revokeObjectURL(url); 
    } catch (error) {
      console.error('Error downloading file:', error);
      setError(error.message); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="text-primary px-2 border border-primary rounded hover:bg-primary hover:text-textColor"
      disabled={isLoading}
      onClick={handleDownload}
    >
      {isLoading ? 'Downloading...' : 'Download'}
    </button>
  );
}

export default DownloadButton;