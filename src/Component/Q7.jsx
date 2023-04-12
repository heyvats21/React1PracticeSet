export default function Q7({ student }) {
  const totalMarks = student.english + student.maths + student.computers;
  // we have made a let variable
  let grade = "";
  if (totalMarks >= 225) {
    grade = "A";
  } else if (totalMarks >= 180) {
    grade = "B";
  } else if (totalMarks >= 150) {
    grade = "C";
  } else {
    grade = "D";
  }

  return (
    <div>
      <h2>Question 7</h2>
      <p>Name:{student.name}</p>
      <p>English:{student.english}</p>
      <p>Math:{student.maths}</p>
      <p>Computers:{student.computers}</p>

      <p style={{ fontWeight: "bold" }}>Total Marks:{totalMarks}</p>
      <p>Grades:{grade} </p>
    </div>
  );
}
