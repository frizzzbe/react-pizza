import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function FullPizza() {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63fe042bcd13ced3d7c47f84.mockapi.io/items/` + id);
        setPizza(data);
      } catch {
        console.log("эОшибка приполучениий питсы");
      }
    }
    fetchPizza()
  }, []);

  if (!pizza) {
    return "Загрузка..."
  }

  return (
    <div className="container">
      <img src={'/pizzasImg/' + pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!
        Assumenda officiis eum quaerat libero ut non provident magnam incidunt
        rem asperiores ipsum quod labore nobis ducimus, id aspernatur quia! Vel
        natus dignissimos assumenda, dolorum possimus error officiis, autem
        nobis magnam modi itaque nam? Quaerat, soluta voluptatum! Ullam culpa
        deleniti adipisci nostrum similique nihil? Alias laborum culpa quisquam
        velit blanditiis! Consequuntur dolor quas doloremque repudiandae autem
        aut laborum quam magni tenetur porro recusandae quibusdam sint quidem
        nam minus, nostrum dolore minima itaque a nihil perspiciatis. Modi
        officiis quasi voluptatibus nesciunt.
      </p>
      <h4>{pizza.price} р.</h4>
    </div>
  );
}

export default FullPizza;
