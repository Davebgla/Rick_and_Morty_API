import React from "react";

const FavouriteCharacters = ({ characters, onCharacterSelected }) => {

    const favouriteCharacters = characters.filter(character => character.favourite)

    return (
    
        <>
        <div class="faves">
            <h3>Favourite Characters:</h3>
            <ul>
                {favouriteCharacters.map(character => {
                    return (
                        <li key={character}>
                            <img src={character.image}></img><p onClick={() => onCharacterSelected(character)}>{character.name} </p> 
                        </li>
                    )
                })}
            </ul>
            </div>
        </>
       
    )
}

export default FavouriteCharacters;