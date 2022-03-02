import React from "react";
import "./tribute.css";

function Tribute() {
  return (
    <div id="tribute">
      <h1 className="tribute-title" id="title">
        Quincy Larson
      </h1>
      <main id="main">
        <figure id="img-div">
          <img
            id="image"
            src="https://www.freecodecamp.org/news/content/images/2019/07/Quincy_Larson.jpeg"
            alt="Quincy Larson"
          />
          <figcaption id="img-caption">
            Photo of Quincy Larson the founder of freeCodeCamp
          </figcaption>
        </figure>
        <section id="tribute-info">
          <p>
            Quincy Larson was a school director for six years before he started
            to learn to code so that he could create tools for making schools
            more efficient. His own journey into learning to code was long and
            winding and he recognized the need for a single-track curriculum for
            newbie developers. Upon analyzing data on coding boot camps in the
            US and realizing how inaccessible coding education was to the
            masses,he set out to create a fully-online inclusive free platform
            for peer-driven learning of coding - the result of which is
            freeCodeCamp. He lives in Texas with his family and spends his time
            working on freeCodeCamp, writing and interviewing authors for the
            freeCodeCamp publication, coordinating open source projects such as
            Chapter (a free MeetUp alternative), advocating for a free and open
            internet and playing with his two young kids.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            id="tribute-link"
            href="https://en.wikipedia.org/wiki/FreeCodeCamp"
          >
            Read more about freeCodeCamp
          </a>
        </section>
      </main>
    </div>
  );
}

export default Tribute;
