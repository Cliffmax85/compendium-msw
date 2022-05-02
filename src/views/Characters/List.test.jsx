import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from 'msw/node';
import { MemoryRouter } from "react-router-dom";
import List from './List';

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
    res(ctx.json(char)))
);

beforeAll(() => server.listen());
afterEach(() => server.close());

it('should grab some data from the list page', async () => {
    render(<List />)
    // await screen.findAllByText(/loading/i)

    // const h2 = await screen.findAllByRole('heading')

    // console.log(h2.textContent);
    // screen.debug();
})