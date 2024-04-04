import Pokemon from "./Pokemon";

const RandomPokemon = ({pokemons}) => {

      const randomPickPokemon = pokemons[Math.round(Math.random()*pokemons.length-1)]

    return (
        <section>
            <h2>Random Pokemon</h2>
            <Pokemon pokemon = {randomPickPokemon} />
        </section>
    )
}

export default RandomPokemon;