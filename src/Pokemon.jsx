const Pokemon = ({pokemon}) => {

    return (
        <article>
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.type}</p>
                    <p>{pokemon.capturedAt}</p>
                    <img src={pokemon.image}></img>
                </article>
    )
}

export default Pokemon;