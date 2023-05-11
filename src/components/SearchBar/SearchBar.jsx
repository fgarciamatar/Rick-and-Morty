import style from "./SearchBar.module.css"
export default function SearchBar({ onSearch }) {
  return (
    <div className= {style.divInput}>
      <input type="search"  placeholder="Buscar/Agregar ID" className= {style.input}/>
      <button className= {style.button}
        onClick={(id) => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
