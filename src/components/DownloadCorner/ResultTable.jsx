import "jspdf-autotable";
import { useState } from "react";
import Axios from "../../axios/axios";

export default function ResultTable({results, passed, gpa}) {
   let customizedResult = [];
   const [grades, setGrades] = useState([]);

   Axios.get('/api/grades')
   .then(response => {
      setGrades(response.data);
   })
   .catch(error => {
      console.log(error);
   });

   function findGrade(m1, m2){
      const totalMark = m1 + m2;
      const halfMark = Math.ceil(totalMark / 2);
      let myGrade = 0;
      grades?.forEach(item => {
         if(halfMark >= item.min_mark && halfMark <= item.max_mark){
            myGrade = item.gpa;
         }
      });
      return myGrade;
   }

   results?.forEach(result =>{
      customizedResult.forEach(item =>{
         if(item[0].subject_marge === result.subject_marge){
            const newResult = customizedResult.filter(res => res[0].subject_marge !== result.subject_marge);
            customizedResult = [...newResult, [result, item[0]]];
         } else {
            customizedResult = [...customizedResult, [result]];
         }
      })

      // initalize
      if(customizedResult.length == 0){
         customizedResult = [[result]];
      }
   });


  return (
   <tbody className="text-center text-gray-700 text-lg md:text-xl">
      {customizedResult?.map((result, index) => (
         <>
         {
            result?.length > 1 ? (
               <tr key={index}>
                  <td className="py-2 px-4 border-t">
                  {result[0].subject_name }<br></br> {result[1].subject_name}
                  </td>
                  <td className="py-2 px-4 border-t">{result[0].obtained_marks }<br></br> {result[1].obtained_marks}</td>
                  <td className="py-2 px-4 border-t">{result[0].total_marks }<br></br> {result[1].total_marks}</td>
                  <td className="py-2 px-4 border-t">{result[0].percentage }<br></br> {result[1].percentage}</td>
                  <td className="py-2 px-4 border-t">{findGrade(result[0].obtained_marks, result[1].obtained_marks)}</td>
               </tr>
            ) : (
            <tr key={index}>
               <td className="py-2 px-4 border-t">{result[0].subject_name}</td>
               <td className="py-2 px-4 border-t">{result[0].obtained_marks}</td>
               <td className="py-2 px-4 border-t">{result[0].total_marks}</td>
               <td className="py-2 px-4 border-t">{result[0].percentage}</td>
               <td className="py-2 px-4 border-t">{result[0].grade}</td>
            </tr>
            )
         }
         </>
      ))}
      <tr className="bg-gray-200">
         <td className="py-2 px-4 border-t"></td>
         <td className="py-2 px-4 border-t">Total</td>
         <td className="py-2 px-4 border-t">{results?.obtained_marks}</td>
         <td className="py-2 px-4 border-t">Status : {passed ? "Passed" : "Failed"}</td>
         <td className="py-2 px-4 border-t">{gpa}</td>
      </tr>
   </tbody>
  )
}
