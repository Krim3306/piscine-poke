import Pokemon from "./Pokemon";

const FirePokemons= ({pokemons}) => {

    const firePokemons  = 
    pokemons.filter ((pokemon) => {
           return (pokemon.type == "Fire")
        })
        
        return (<section>
                    <h2>Fire Pokemons</h2>
                    <div className="allArticles">
                        {firePokemons.map ((firePokemon) => {
                        return (
                            <Pokemon pokemon = {firePokemon} />
                        )})}
                    </div>
                </section>
        )}

export default FirePokemons;