import Pokemon from "./Pokemon";

const FirePokemons= ({pokemons}) => {

    const firePokemons  = 
    pokemons.filter ((pokemon) => {
           return (pokemon.type == "Fire")
        })
        
        return (
            firePokemons.map ((firePokemon) => {
                return (
                    <section>
                        <h2>Fire Pokemons</h2>
                        <Pokemon pokemon = {firePokemon} />
                    </section>
                )
            }))}

export default FirePokemons;