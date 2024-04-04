import Pokemon from "./Pokemon";

const ListAllPokemons = ({pokemons}) => {

    return (
        <section>
            <h2>All Pokemons List</h2>
                <div className="allArticles">
                    {pokemons.map((pokemon) =>{
                        return(
                            <Pokemon pokemon = {pokemon} displayImage = {false}/>
                        )
                    })}
                </div>
        </section>
    )
}

export default ListAllPokemons;