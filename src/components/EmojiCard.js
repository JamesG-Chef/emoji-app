import { useState } from "react";

const EmojiCard = (props) => {
  const { name, code } = props;
  //console.log(props)
  return (
    <li >
      {name} {code}
    </li>
  );
};

export default EmojiCard;
