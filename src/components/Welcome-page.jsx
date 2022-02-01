import { useState } from "react";
import "../Styles/Welcomepage.css";

const Welcomepage = (props) => {
  console.log(props);
  if (props.emojiList.length === 0) {
      return (
          <div className="welcome-page">
              <p>Welcome to Emoji Searcher, please select an emoji category....</p>

              <p className="poo">&#128169;</p>
          </div>);
  } else {
    return <span></span>;
  }
};

export default Welcomepage;
