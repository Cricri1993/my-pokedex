import PropTypes from "prop-types";

function PokemonCard({pokemon}){
  console.log(pokemon);
    return (
      <div>
        <figure>{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
        </figure>
        <figcaption>{pokemon.name ? pokemon.name : <p>???</p>}
        </figcaption>
      </div>
    );
  }     

PokemonCard.propTypes = {
  pokemon: PropTypes.shape ({
    name: PropTypes.string,
    imgSrc: PropTypes.string.isRequired
  })
}


  export default PokemonCard;
