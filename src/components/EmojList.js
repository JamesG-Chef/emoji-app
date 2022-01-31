import { useState } from "react";
import EmojiCard from "./EmojiCard";

const Emojilist = () => {
  const [emojiList, setEmojiList] = useState([
    {
      name: "slightly smiling face",
      category: "smileys and people",
      group: "face positive",
      htmlCode: ["&#128578;"],
      unicode: ["U+1F642"],
    },
  ]);

  return (
    <>
      <ul>
        {emojiList.map((emoji) => {
          return (
            <EmojiCard
              key={emoji.name}
              name={emoji.name}
              code={emoji.htmlCode[0]}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Emojilist;
