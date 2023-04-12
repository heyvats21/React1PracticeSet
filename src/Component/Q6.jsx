export default function Q6({ products, header }) {
  return (
    <div>
      <h2>Question 6</h2>
      <h2>{header}</h2>
      {products
        .filter((item) => item.sales > item.quantity)
        .map((elem) => (
          <li>
            Name:{elem.name} ,Quantity: {elem.quantity},Sales: {elem.sales}
          </li>
        ))}
    </div>
  );
}
