import { useState } from "react";
import EmojiCard from "./EmojiCard";
import Search from "./Search.js"

const Emojilist = () => {

  const [searchTerm, setSearchTerm] = useState('')
  
  console.log(searchTerm);

  //FETCH using the search value

  const [emojiList, setEmojiList] = useState([
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
      <Search setSearchTerm={setSearchTerm}></Search>

    </>
  );
};

export default Emojilist;
