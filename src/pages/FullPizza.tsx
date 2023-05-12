import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63fe042bcd13ced3d7c47f84.mockapi.io/items/` + id
        );
        setPizza(data);
      } catch {
        console.log("Ошибка приполучении питсы");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container">
      <img
        width="300"
        height="300"
        src={`${process.env.PUBLIC_URL}/pizzasImg/` + pizza.imageUrl}
        alt=""
      />
      <h2>{pizza.title}</h2>
      <p>Lorem ipsum dolor sit {pizza.title}</p>
      <h4>{pizza.price} р.</h4>
      <div>
        Rating {pizza.rating / 2} <span style={{cursor: 'default'}}>{"⭐".repeat(pizza.rating / 2)}</span>
      </div>
      <br/>
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <button className="full-pizza-btn button button--outline button--add">
          <svg
            fill="none"
            height="24"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
