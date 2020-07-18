import React from "react";
import Category from "../components/Category";

function ViewCategories(props) {
  return (
    <div>
      <Category
        name="DESAYUNO"
        styleInfo={{ background: "#401B13", color: "white" }}
        openCategory={() => props.openCategory("viewBreakfast")}
      />
      <Category
        name="ALMUERZO"
        styleInfo={{ background: "#D9B1A3", color: "black" }}
        openCategory={() => props.openCategory("viewLunch")}
      />
      <Category
        name="CENA"
        styleInfo={{ background: "#A66F5B", color: "black" }}
        openCategory={() => props.openCategory("viewDinner")}
      />
    </div>
  );
}

export default ViewCategories;
