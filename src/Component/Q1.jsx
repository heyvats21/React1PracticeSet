export default function Q1({ name, designation, workExperience }) {
  return (
    <div>
      <h2>Question 1</h2>
      <p>Name:{name}</p>
      <p style={{ color: "green" }}>Designation:{designation}</p>
      <p style={{ color: "blue" }}>Work Experience:{workExperience}</p>
    </div>
  );
}
