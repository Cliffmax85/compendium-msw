import { screen, render, waitForElementToBeRemoved, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from 'msw/node';
import List from './List';
import userEvent from '@testing-library/user-event';

const char = {
    "id": 1,
    // Changing Name
    "name": "Cliffy Skywalker",
    "height": 1.72,
    "mass": 73,
    "gender": "male",
    "homeworld": "tatooine",
    "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
    "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "born": -19,
    "bornLocation": "polis massa",
    "died": 34,
    "diedLocation": "ahch-to",
    "species": "human",
    "hairColor": "blond",
    "eyeColor": "blue",
    "skinColor": "light",
    "cybernetics": "Prosthetic right hand",
    "affiliations": [
      "Alliance to Restore the Republic",
      "Red Squadron",
      "Rogue Squadron",
      "Massassi Group",
      "Leia Organa's team",
      "Endor strike team",
      "Jedi Order",
      "Bright Tree tribe",
      "New Republic",
      "Resistance"
    ],
    "masters": [
      "Obi-Wan Kenobi",
      "Yoda",
      // And Masters
      "Cliffy-Won Kliffobi"
    ],
    "apprentices": [
      "Leia Organa",
      "Ben Solo (along with a dozen apprentices)",
      "Rey"
    ],
    "formerAffiliations": [
      
    ]
}

const server = setupServer(
    rest.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json', (req, res, ctx) =>
    res(ctx.json([char])))
);

beforeAll(() => server.listen());
afterEach
afterEach(() => server.close());

it('should grab some data from the list page', async () => {
    render(<List />)
    screen.getByText(/loading/i)

    const h2 = screen.getByRole('heading')
    // Star Wars Characters resposne to below log. 
    expect(h2.textContent).toEqual('Star Wars Characters');

    const name = await screen.findByText(char.name);
    // Returning Cliffy Skywalker
    expect(name).toBeInTheDocument();

    // Find seach bar and type in luke
    const searchBox = await screen.findByPlaceholderText('Search Star Wars Characters');
    userEvent.type(searchBox, 'clifford');

    // Search for clifford and expect to find 'no chars' placeholder
    // Because clifford isnt on the page 
    const searchChars = await screen.findByText('NO CHARACTERS FOUND?!!!!!!!????')
    expect(searchChars).toBeInTheDocument();


})
