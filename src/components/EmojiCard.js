import { useState } from "react";

const EmojiCard = (props) => {
    const { name, code } = props;
    
  console.log(props)
  return (
    <li >
          <p>{name}</p>
          <p dangerouslySetInnerHTML={{ __html: code }}></p>
          <p>HTML: {code}</p>
    </li>
  );
};

export default EmojiCard;
