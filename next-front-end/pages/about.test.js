import {getStaticProps} from "./motorpointUsers";

require('reflect metadata')
require('testing-library/jest-dom/extend-expect')


function simpleFunc() {
    return 'hello!';
}
describe('A simple module', () => {
    test('it should say hello', () => {
        expect(simpleFunc()).toEqual('hello!');
    });
});

//write a test to test getStaticProps
// describe('getStaticProps', () => {
//     test('it should return a list of motorpoint users', async () => {
//         const result = await getStaticProps();
//         expect(result).toContain("Ervin Howell");
//     });
// });
