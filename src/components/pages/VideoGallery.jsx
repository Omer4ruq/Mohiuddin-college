import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function VideoGallery() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
     Axios.get('/video-gallery/')
       .then(response => {
         setData(response.data);
         setLoading(false);
       })
       .catch(error => {
         setError(error);
         setLoading(false);
       });
   }, []);
   
  
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>  
    return (
      <div>
         <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
            Video Gallery
         </h1>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-16">
                {data.map(video => (
                    <div key={video.id} className="bg-gray-100 shadow-md rounded-lg mb-2">
                        <iframe 
                            className="w-full h-80 rounded-md"
                            src={video.link} 
                            title={video.title}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                        <h3 className="text-start text-primary text-2xl p-3">{video.title}</h3>
                    </div>
                ))}
            </div>
      </div>
    );
}