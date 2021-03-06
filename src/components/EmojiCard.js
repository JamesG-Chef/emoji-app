import { useState } from "react";
import "../Styles/EmojiCard.css"

const EmojiCard = (props) => {
    const { name, code } = props;
    
  
  return (
    <li className="emoji-list-item">
      
      <p className="emoji-name">{name}</p>
          <p className="emoji" dangerouslySetInnerHTML={{ __html: code }}></p>
          <p className="code">HTML: {code}</p>
      
          
    </li>
  );
};

export default EmojiCard;
