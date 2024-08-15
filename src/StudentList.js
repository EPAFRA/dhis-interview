import React from 'react';
import studentsData from './studentsData'; 
import './StudentList.css'; 

const calculateTotalScores = (data) => {
  return data.map(student => {
    const courseWorkTotal = student.courseResults.courseWork.reduce((acc, course) => acc + course.score, 0);
    const ueTotal = student.courseResults.ue.reduce((acc, ue) => acc + ue.score, 0);
    const totalScore = courseWorkTotal + ueTotal;
    return {
      studentName: student.studentName,
      studentId: student.studentId,
      totalScore: totalScore,
      courseWork: student.courseResults.courseWork,
      ue: student.courseResults.ue
    };
  });
};

const StudentList = () => {
  const totalScores = calculateTotalScores(studentsData);

  return (
    <div className="student-table">
      <h1>Student Scores and Total Scores</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Subject</th>
            <th>Coursework Score</th>
            <th>UE Score</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {totalScores.map((student, studentIndex) => (
            student.courseWork.map((course, courseIndex) => {
              const ueScore = student.ue.find(ue => ue.subject === course.subject)?.score;
              return (
                <tr key={`${studentIndex}-${courseIndex}`}>
                  {courseIndex === 0 && (
                    <>
                      <td rowSpan={student.courseWork.length}>{student.studentName}</td>
                      <td rowSpan={student.courseWork.length}>{student.studentId}</td>
                    </>
                  )}
                  <td>{course.subject}</td>
                  <td>{course.score}</td>
                  <td>{ueScore}</td>
                  {courseIndex === 0 && (
                    <td rowSpan={student.courseWork.length}>{student.totalScore}</td>
                  )}
                </tr>
              );
            })
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
