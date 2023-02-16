import styles from "~/styles/wrapperCards.css";
import Card, { links as cardStyle } from "~/components/Card.jsx";
import { useLoaderData } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: styles }, ...cardStyle()];
}

export const loader = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1");

  return await res.json();
};

export default function Users() {
  const users = useLoaderData();
  
  return (
    <div className="wrapper-cards">
      <div className="container">
        <h1 className="admim-title">Administrar usuários</h1>
        <div className="grid-cards">
        {users.data.map((item, index) => {
        return <Card data={item} key={index} />
        })} 
        </div>
        <div className="counter">
        <span className="counter__text">Mostrando 6 de 12</span>
        </div>
      </div>
    </div>
  );
}
