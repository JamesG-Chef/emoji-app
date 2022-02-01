import { useState, useEffect } from "react";
import EmojiCard from "./EmojiCard";
import Search from "./Search.js"
import Welcomepage from "./Welcome-page";
import "../Styles/EmojiList.css"

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
      <Welcomepage emojiList={emojiList} />
      <Search setSearchTerm={setSearchTerm}></Search><ul className="emojilist">
        
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
