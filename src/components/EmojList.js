import { useState, useEffect } from "react";
import EmojiCard from "./EmojiCard";
import Search from "./Search.js";
import Welcomepage from "./Welcome-page";
import "../Styles/EmojiList.css";

const Emojilist = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  const [welcome, toggleWelcome] = useState(true);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://emojihub.herokuapp.com/api/all/category_${searchTerm}`)
        .then((res) => res.json())
        .then((emojis) => setEmojiList(emojis));
    }
  }, [searchTerm]);

  const [emojiList, setEmojiList] = useState([]);

  return emojiList.length === 0 ? (
    <>
      <Welcomepage />
      <Search setSearchTerm={setSearchTerm}></Search>
    </>
  ) : (
    <>
      <Search setSearchTerm={setSearchTerm}></Search>
      <ul className="emojilist">
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
