export default function Q5({ products, header }) {
  return (
    <div>
      <h2>Question 5</h2>
      <h1>{header}</h1>
      {products.map(({ name }) => (
        <li>{name}</li>
      ))}
    </div>
  );
}
