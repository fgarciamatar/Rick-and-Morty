import Card from "../Card/Card";
import Title from "../Title/Title";
import style from "./Cards.module.css";
export default function Cards({characters, onClose}) {

  return (
    
    <div className={style.container}>
      <Title/>
      {characters.map(({name, status, gender,species, image, origin, id,type}) => {
        return (
          <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            type={type}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
