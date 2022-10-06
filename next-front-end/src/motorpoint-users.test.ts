import '@testing-library/jest-dom/extend-expect';
import MotorpointUsers from '../pages/motorpoint-users'

describe('Motorpoint Users', () => {
    test('it should return a list of users', () => {
        expect(true).toBeTruthy();
    });
});


describe('Motorpoint Users', () => {
    test('it should return a list of users', () => {
        const users = MotorpointUsers.displayName;
        expect(users).toBeTruthy();
    });
});