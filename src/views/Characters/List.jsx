import { useEffect, useState } from "react";
import { getCharacter } from "../../services/api-call";
import Card from '../../components/Character/Card';
import styles from '../../App.css';

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
        char.name.toLowerCase().includes(e.target.value.toLowerCase().trim()));

        setResults(searchedCharacters);
    } 
    
  useEffect(() => {
        async function fetchCharacters() {
        const data = await getCharacter();
        // console.log(data);
        setCharacters(data);
        setLoading(false);
    }
    fetchCharacters();
    }, []);
    return (
      <>
        <h2>Star Wars Characters</h2>
        <div>
            <input 
              placeholder="Search Star Wars Characters"
              value={search}
              onChange={handleSearch}
            />
        </div>
        <div>
            {loading ? (
                <p>...Loading</p>
            ) : (
                

        <div className={styles.chars}>
            {characterList.map((char) => {
                return (
                    <Card key={char.id}
                      name={char.name}
                      image={char.image}
                      world={char.homeworld}
                      species={char.species}
                    />
                )
            })}
        </div>
        )}
        </div>
        {noResults && <h1>NO CHARACTERS FOUND?!!!!!!!????</h1>}
      </>
  );
}