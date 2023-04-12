export default function Q3({ items, header }) {
  console.log(items);
  return (
    <div>
      <h2>Question 3</h2>
      <h1>{header}</h1>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}
