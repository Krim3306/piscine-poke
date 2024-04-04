import Pokemon from "./Pokemon";

const LastCapturedPokemons = ({pokemons}) => {

    const mostRecentsCapturedPokemons = pokemons.sort(function(a,b){
        return new Date(b.capturedAt) - new Date(a.capturedAt);
      });

    const threeLastCapturedPokemons = mostRecentsCapturedPokemons.slice(0,3)

    console.log(threeLastCapturedPokemons)

    return (
        <section>
            <h2>Last Captured Pokemon</h2>
            <div className="allArticles">
                {threeLastCapturedPokemons.map ((pokemon) => {
                return (
                    <Pokemon pokemon = {pokemon} displayImage = {true}/>
        )})}
            </div>
        </section>)}

export default LastCapturedPokemons;