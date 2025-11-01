import React, { useEffect, useState } from 'react';
import { getPokemons } from '../../API';
import PokemonCard from '../PokemonCard/PokemonCard';
import './Main.css'

const Main = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemons()
            setPokemons(data)
        }
        fetchData()
    }, [])

    return (
        <div className='container'>
            {pokemons.map((p) => (
                <PokemonCard key={p.name} name={p.name} img={p.img} />
            ))}
        </div>
    );
};

export default Main;