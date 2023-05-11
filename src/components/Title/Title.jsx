import style from "./Title.module.css";

const Title = () => {
  return (
    <div className={style.Title}>
      <img className={style.Image} src="../../imagenes/rickandmorty.png" alt="." />
    </div>
  );
};
export default Title;
