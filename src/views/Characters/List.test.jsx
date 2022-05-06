import { screen, render, waitForElementToBeRemoved, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from 'msw/node';
import List from './List';
import { char } from './Char.js';




const server = setupServer(
    rest.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json', (req, res, ctx) =>
    res(ctx.json(char)))
);

beforeAll(() => server.listen());
afterEach
afterEach(() => server.close());

it('should test that a list of characters is loading on the screen', async () => {
    render(<List />)

    const r2 = await screen.findByText(/r2-d2/i);
    // Add more chars and findallby and expect char[]to equal whatever 
    expect(r2.textContent).toEqual('R2-D2');
    expect(char.length).toEqual(4);
    const thirdChar = char[2];
    expect(thirdChar.homeworld).toEqual('naboo');
    screen.debug();
})
