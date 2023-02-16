import styles from "~/styles/card.css";
import { PencilSimple } from "phosphor-react";
import Image from "../assets/user.jpg"

export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }

export default function Card({data}) {
  return (
    <div className="single-card">
      <PencilSimple size={20} className="single-card__icon" / >

      <div> 
      <img src={data.avatar} alt="user" className="single-card__photo" />
      </div>  

      <h3 className="single-card__name" >{data.first_name}</h3>

      <h4 className="single-card__email" >{data.email}</h4>
      
    </div>
  );
}
