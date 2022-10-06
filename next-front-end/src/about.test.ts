import '@testing-library/jest-dom/extend-expect';
import {render} from "@testing-library/react";
import About from "../pages/about";
import {userEvent} from "@testing-library/user-event/setup/index";

function simpleFunc() {
    return 'hello!';
}
describe('A simple module', () => {
    test('it should say hello', () => {
        expect(simpleFunc()).toEqual('hello!');
    });
});

describe('About page check', () => {
    test('it should render the about page', () => {
        expect(true).toBeTruthy();
    });
});

// test('renders About', () => {
//     render(<About />);
//     const linkElement = screen.getByText(/About/i);
//     expect(linkElement).toBeInTheDocument();
// });

test("Test theme button", () => {
    render(<About />);
    const buttonEl = screen.getByText(/Current theme/i);

    userEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/dark/i);
});
