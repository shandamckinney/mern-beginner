import './App.css';
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [listOfRecipes, setListOfRecipes] = useState([]);

  const addRecipe = () => {
    Axios.post('https://mern-tutoriallll.herokuapp.com/addrecipe', {name: name, rating: rating}).then(() => {
      alert('yes');
    }).catch(() => {
      alert('nope');
    });
  };

  useEffect(() => {
    Axios.get('https://mern-tutoriallll.herokuapp.com/read', {name: name, rating: rating})
    .then((response) => {
     console.log(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);
  
  return (
    <div className="App">
      <div className="inputs">
        <input type="text" placeholder="recipe name" onChange={(e) => {setName(e.target.value)}}/>
        <input type="number" placeholder="recipe rating" onChange={(e) => {setRating(e.target.value)}}/>

        <button onClick={(addRecipe)}>Add Recipe</button>
      </div>
    </div>
  );
}

export default App;
