import React from "react";    

const CharacterAdd = ({character, onFavouriteToggle}) => {

if (!character) {
    return null
}

const handleClick = () => {
    onFavouriteToggle(character.name)
}

const favouriteBtnText = character.favourite ? 'Remove from favourites' : 'Add to Favourites'

return (
    <div class='details'>
    <img src={character.image}></img>
    <h3> {character.name}</h3>
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Last Known Location: {character.location.name}</p>
    <button onClick={handleClick}>{favouriteBtnText}</button>
    </div>
    )

}

export default CharacterAdd;