import Pokemon from "./Pokemon";

const LastCapturedPokemons = ({pokemons}) => {

    const mostRecentsCapturedPokemons = pokemons.sort(function(a,b){
        return new Date(b.capturedAt) - new Date(a.capturedAt);
      });

    const threeLastCapturedPokemons = mostRecentsCapturedPokemons.slice(0,3)

    console.log(threeLastCapturedPokemons)

    return (
        threeLastCapturedPokemons.map ((pokemon) => {
            return (
                <section>
                    <h2>Last Captured Pokemon</h2>
                    <Pokemon pokemon = {pokemon} />
                </section>
        )
  }))}

export default LastCapturedPokemons;