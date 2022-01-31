import { useState } from "react";

const Search = (props) => {
  const { setSearchTerm } = props;

  const [catSelection, setCatSelection] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(catSelection)
  }

  function handleChange(event) {
    setCatSelection(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>select category</label>
      <select name="category" onChange={handleChange}>
        <option value="default">choose category</option>
        <option value="smileys_and_people">smileys and people</option>
        <option value="animals_and_nature">animals and nature</option>
        <option value="food_and_drink">food and drink</option>
        <option value="travel_and_places">travel and places</option>
        <option value="activities">activities</option>
        <option value="objects">objects</option>
        <option value="symbols">symbols</option>
        <option value="flags">flags</option>
      </select>
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default Search;
