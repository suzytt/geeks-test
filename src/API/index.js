import axios from "axios";


const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemons = async () => {
    try {
        const response = await axios.get(API_URL)
        // console.log(response.data.results);

        const getDetailedPokemons = await Promise.all(
            response.data.results.map(async (p) => {
                const res = await axios.get(p.url)
                // console.log(res.data);
                return {
                    name: res.data.name,
                    img: res.data.sprites.front_default
                }

            }
            )
        )
        return getDetailedPokemons

    } catch (error) {
        console.log('Ошибка при выведении покемонов');
        return []
    }
}