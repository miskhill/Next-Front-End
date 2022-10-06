import '@testing-library/jest-dom/extend-expect';
import About from "../pages/about";
import {render, screen} from '@testing-library/react'

//just testing that the library is correctly working with this test.
function simpleFunc() {
    return 'hello!';
}
describe('A simple module', () => {
    test('it should say hello', () => {
        expect(simpleFunc()).toEqual('hello!');
    });
});

//and here - should return true.
describe('About page check', () => {
    test('it should render the about page', () => {
        expect(true).toBeTruthy();
    });
});


//check text on the about page equals I added
describe('About page check', () => {
    test('it should render the about page', () => {
        render(<About/>) //render the about page
        expect(screen.getByText('I added this text')).toBeInTheDocument();
    });
});


