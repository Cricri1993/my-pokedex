function PokemonCard({name, imgSrc}){
  console.log(imgSrc);
    return (
      <div>
        <figure>{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
        </figure>
        <figcaption>{name ? name : <p>???</p>}
        </figcaption>
      </div>
    );
  }     
  export default PokemonCard;