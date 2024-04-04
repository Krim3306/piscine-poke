import Pokemon from "./Pokemon";

const RandomPokemon = ({pokemons}) => {

      const randomPickPokemon = pokemons[Math.round(Math.random()*pokemons.length-1)]

    return (
        <section>
            <h2>Random Pokemon</h2>
            <div className="allArticles">
                <Pokemon pokemon = {randomPickPokemon} />
            </div>
        </section>
    )
}

export default RandomPokemon;