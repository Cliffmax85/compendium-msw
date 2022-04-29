import { useEffect, useState } from "react";
import { getCharacter } from "../../services/api-call";
import Card from '../../components/Character/Card';

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const searching = !!search.length;
    const noResults = searching && !results.length;
    const characterList = searching ? results:characters; 

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const searchedCharacters = characters.filter((char) => 
        char.name.toLowercase().includes(e.target.value.toLowercase().trim()));

        setResults(searchedCharacters);
    } 
    
  useEffect(() => {
        async function fetchCharacters() {
        const data = await getCharacter();
        console.log(data);
        setCharacters(data);
        setLoading(false);
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