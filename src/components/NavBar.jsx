function NavBar ({pokemonList, pokemonIndex, setPokemonIndex}) {
    const handleClickPrecedent = (event) => {
        setPokemonIndex(pokemonIndex -1)
      }
    
      const handleClickSuivant = (event) => {
        setPokemonIndex(pokemonIndex +1)
      }    
    return <>
    {pokemonIndex > 0 && (<button onClick={handleClickPrecedent}>Précédent</button>)}
    {pokemonIndex < pokemonList.length -1 && (<button onClick={handleClickSuivant}>Suivant</button>)}
    </>
    }

export default NavBar;