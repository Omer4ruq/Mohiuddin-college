import jsPDF from "jspdf";
import Axios from "../axios/axios";

async function downloadReportCard(studentId, results, passed, gpa){
   const doc = new jsPDF();
   doc.setFontSize(16);
   doc.text("Student Result", 20, 10);

   let studentData = {};

   Axios.get(`/api/student-profile/${studentId}`)
   .then(response => {
     studentData = response.data;
   })
   .catch(error => {
      console.log(error);
   })

   doc.setFontSize(12);
   doc.text(`Name: ${studentData.name}`, 20, 20);
   doc.text(`Roll: ${studentData.roll}`, 20, 30);
   doc.text(`Class: ${studentData.class_id}`, 20, 40);

   let customizedResult = [];
   let grades = [];

   Axios.get('/api/grades')
   .then(response => {
      grades = response.data;
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

   // Table Headers
   const tableColumn = ["Subject", "Marks", "Total Marks", "Percentage", "Grade"];
   const tableRows = [];

   customizedResult?.forEach((result) => {
      if (result.length > 1) {
         tableRows.push([
            `${result[0].subject_name}\n${result[1].subject_name}`,
            `${result[0].obtained_marks}\n${result[1].obtained_marks}`,
            `${result[0].total_marks}\n${result[1].total_marks}`,
            `${result[0].percentage}\n${result[1].percentage}`,
            findGrade(result[0].obtained_marks, result[1].obtained_marks),
         ]);
      } else {
         tableRows.push([
            result[0].subject_name,
            result[0].obtained_marks,
            result[0].total_marks,
            result[0].percentage,
            result[0].grade,
         ]);
      }
   });

   // Add total row
   tableRows.push([
      "",
      "Total",
      results?.obtained_marks || "",
      `Status: ${passed ? "Passed" : "Failed"}`,
      gpa,
   ]);

   doc.autoTable({
      startY: 60, // Start table below student info
      head: [tableColumn],
      body: tableRows,
   });

   doc.save(`Result_${studentData.roll}.pdf`);
}

export default downloadReportCard;