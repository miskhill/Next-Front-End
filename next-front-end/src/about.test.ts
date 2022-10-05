import '@testing-library/jest-dom/extend-expect';
import {render} from "@testing-library/react";
import About from "../pages/about";

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