import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function FullPizza() {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63fe042bcd13ced3d7c47f84.mockapi.io/items/` + id);
        setPizza(data);
      } catch {
        console.log("Ошибка приполучении питсы");
        navigate('/')
      }
    }
    fetchPizza()
  }, []);

  if (!pizza) {
    return "Загрузка..."
  }

  return (
    <div className="container">
      <img width="300" height="300" src={'/pizzasImg/' + pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit {pizza.title}
      </p>
      <h4>{pizza.price} р.</h4>
      <div>Rating {pizza.rating/2} <span>{'⭐'.repeat(pizza.rating/2)}</span></div>
    </div>
  );
}

export default FullPizza;
