import Q1 from "./Component/Q1";
import "./styles.css";
import Q2 from "./Component/Q2";
import Q3 from "./Component/Q3";
import { items, products, student, employees } from "./data";
import Q4 from "./Component/Q4";
import Q5 from "./Component/Q5";
import Q6 from "./Component/Q6";
import Q7 from "./Component/Q7";
import Q8 from "./Component/Q8";

export default function App() {
  const backgroundColor = "lightgreen";
  const color = "darkgreen";
  const borderRadius = "5px";
  const padding = "10px";

  const imageLink =
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";
  return (
    <div className="App">
      {/* <Q1
        name={"Vatsal Singh"}
        designation={"FrontEnd Developer"}
        workExperience={"1 Year"}
      /> */}
      {/* <Q2
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={borderRadius}
        padding={padding}
      /> */}

      {/* <Q3 items={items} header={"Stationery Items"} /> */}

      {/* <Q4 imageLink={imageLink} caption={caption} /> */}
      {/* <Q5 products={products} header={"PRODUCT NAME"} /> */}
      {/* <Q6 products={products} header={"PRODUCT NAME"} /> */}
      {/* <Q7 student={student} /> */}
      <Q8 employees={employees} />
    </div>
  );
}
