export async function getCharacter() {
    const res = await fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json');
    const results = await res.json();
    const data = results.map((char) => ({
        name: char.name,
        homeworld: char.homeworld,
        species: char.species,
        image: char.image,
    }));
    return data;
}