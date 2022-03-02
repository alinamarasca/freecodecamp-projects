import React from "react";
import Project from "./Project";

function Main() {
  return (
    <div>
      <Project
        title={"Tribute page"}
        link={"/ffc-html-tribute"}
        ffcLink={
          "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page"
        }
        codepenId={"QWOqYZq"}
      />

      <Project
        title={"Survey form"}
        link={"/ffc-html-survey"}
        ffcLink={
          "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form"
        }
        codepenId={"zYPyoeLj"}
      />
      <Project
        title={"Landing page"}
        link={"/ffc-html-landing"}
        ffcLink={
          "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page"
        }
        codepenId={"rNYoMEj"}
      />
    </div>
  );
}

export default Main;
