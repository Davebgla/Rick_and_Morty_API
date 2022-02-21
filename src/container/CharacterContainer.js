import React, {useState, useEffect} from "react";
import CharacterSelector from "../components/CharacterSelector";
import CharacterAdd from "../components/CharacterAdd";
import FavouriteCharacters from "../components/FavouriteCharacters";


const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacters, setSelectedCharacter] = useState('')


    useEffect(() =>{
        getCharacters();
    }, [])

    const getCharacters = function () {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(character => setCharacters(character.results))
    }

    const handleCharacterSelected = name => {
        setSelectedCharacter(name)
    }

    const handleFavouriteToggle = (name) => {
        const updatedCharacters = characters.map((character) => {
            if (character.name === name){
                character.favourite = !character.favourite
            }
            return character
        })
        setCharacters(updatedCharacters)
    }

    const selectedCharacter = characters.find(character => character.name === selectedCharacters)
    

    return(

        <>
        <CharacterSelector characters={characters} onCharacterSelected={handleCharacterSelected} />
        <CharacterAdd character={selectedCharacter} onFavouriteToggle={handleFavouriteToggle} />
        <FavouriteCharacters characters={characters} onCharacterSelected={handleCharacterSelected} />
        </>
    )

}

export default CharacterContainer;