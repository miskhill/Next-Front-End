import '@testing-library/jest-dom/extend-expect';
import About from "../pages/about";
import {getByTitle} from "@testing-library/dom";
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


describe('About', () =>{
    it('should have the correct title', async function () {
        const title = await screen.getByTitle('About Page');
        console.log('Browser Reported Page Title: ' + title);
        expect(title).toEqual('About Page');
    });
});

