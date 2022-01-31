import { useState, useEffect } from "react";
import EmojiCard from "./EmojiCard";
import Search from "./Search.js"

const Emojilist = () => {

  const [searchTerm, setSearchTerm] = useState(null)
  
  //welcome page renders when emojiList.length is 0
 
  useEffect(()=>{
    if(searchTerm){
    fetch(`https://emojihub.herokuapp.com/api/all/category_${searchTerm}`)
    .then((res)=> res.json())
    .then((emojis)=> setEmojiList(emojis))
  }}, [searchTerm])



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
              code={emoji.htmlCode[emoji.htmlCode.length - 1]}
            />
          );
        })}
      </ul>
      <Search setSearchTerm={setSearchTerm}></Search>

    </>
  );
};

export default Emojilist;
