function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {
  const handleClick = (e) => {
    let id = e.target.getAttribute("id");
    setPokemonIndex(id);
  };

  return (
    <>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name} onClick={handleClick} id={pokemon.id}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
