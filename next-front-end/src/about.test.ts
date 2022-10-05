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

// Language: typescript