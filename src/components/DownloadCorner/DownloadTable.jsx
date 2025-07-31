import DownloadButton from "./DownloadButton";

export default function DownloadTable({data}) {
    
  return (
   <div className="bg-white shadow-md rounded-lg overflow-hidden border border-primary">

      <table className="min-w-full bg-white">
         <thead className="bg-primary text-textColor text-xl md:text-2xl">
         <tr>
            <th className="py-2 px-4">ID
            </th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">
            Document</th>
            <th className="py-2 px-4">Date</th>
         </tr>
         </thead>
         <tbody className="text-center text-gray-700 text-lg md:text-xl">
         {data?.map((result, index) => (
            <tr key={index}>
               <td className="py-2 px-4 border-t">{result.id}</td>
               <td className="py-2 px-4 border-t">{result.title}</td>
               <td className="py-2 px-4 border-t">
               {/* <button className="text-primary px-2 border border-primary rounded hover:bg-primary hover:text-textColor">
                  Download
               </button> */}
               <DownloadButton dataUrl={result.files} />
               </td>
               <td className="py-2 px-4 border-t">{new Date(result?.updated_at)}</td>
            </tr>
         ))}
         </tbody>
      </table>
   </div>
  )
}
