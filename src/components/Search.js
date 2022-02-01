import { useState } from "react";
import "../Styles/Search.css"

const Search = (props) => {
  const { setSearchTerm } = props;

  const [catSelection, setCatSelection] = useState("default");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(catSelection);
    setCatSelection("default");
  }

  function handleChange(event) {
    setCatSelection(event.target.value);
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <select className="select" name="category" onChange={handleChange} value={catSelection}>
          <option value="default">choose category</option>{" "}
          {/*make unselectable*/}
          <option value="smileys_and_people">smileys and people</option>
          <option value="animals_and_nature">animals and nature</option>
          <option value="food_and_drink">food and drink</option>
          <option value="travel_and_places">travel and places</option>
          <option value="activities">activities</option>
          <option value="objects">objects</option>
          <option value="symbols">symbols</option>
          <option value="flags">flags</option>
        </select>
        <button className="button" type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default Search;
