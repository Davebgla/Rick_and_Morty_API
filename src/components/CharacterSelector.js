import React from "react";

const CharacterSelector = ({characters, onCharacterSelected}) => {

    const handleChange = event => {
        onCharacterSelected(event.target.value)
    }

    return (

        <div class="select">
        <select defaultValue="" onChange = {handleChange} >
            <option value = "" disabled > Choose a character </option> {
                characters.map(character => {
                    return ( < 
                        option key = {character.name}
                        value = {character.name} > {character.name}</option>
                        )
                })
            }
        </select>
        </div>
    )
}

export default CharacterSelector;