export default function Q8({ employees }) {
  console.log(employees[1].level);
  const totalSalary = employees.reduce((acc, curr) => (acc += curr.salary), 0);
  return (
    <div>
      <h2>Question 8, 9 , 10 & 11 </h2>
      {employees.map(({ name, level, dept, designation, salary }) => (
        <li
          style={{
            backgroundColor: level === 2 && "orange",
            border: designation === "President" && "4px solid #4cd137"
          }}
        >
          {name},{level},{dept},{designation},{salary}
        </li>
      ))}

      <p>Total Salary Expense:{totalSalary}</p>
    </div>
  );
}
