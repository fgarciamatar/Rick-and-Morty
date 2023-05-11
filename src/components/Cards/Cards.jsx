import Card from "../Card/Card";
import style from "./Cards.module.css";
export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.container}>
      {characters.map(({ name, status, gender,species, image,origin,id }) => {
        return (
          <Card 
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
