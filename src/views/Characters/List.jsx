import { useEffect, useState } from "react";
import { getCharacter } from "../../services/api-call";
import Card from '../../components/Character/Card';

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        async function fetchCharacters() {
        const data = await getCharacter();
        console.log(data);
        setCharacters(data);
    }
    fetchCharacters();
}, []);
  return (
      <>
        <h2>Star Wars Characters</h2>
        <div className="chars">
            {characters.map((char) => {
                return (
                    <Card
                      name={char.name}
                      image={char.image}
                      world={char.world}
                      species={char.species}
                    />
                )
            })}
        </div>
      </>
  );
}