const Pokemon = ({pokemon, displayImage}) => {

    return (
        <article>
            <h3>{pokemon.name}</h3>
            <p className={pokemon.type}>{pokemon.type}</p>
            <p>{pokemon.capturedAt}</p>
            {displayImage && <img src = {pokemon.image}></img>}
        </article>
    )
}

export default Pokemon;