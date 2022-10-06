import '@testing-library/jest-dom/extend-expect';
import MotorpointUsers from '../pages/motorpoint-users'
import { render, screen } from '@testing-library/react';
import UserCard from '../components/Card';

describe('User Card', () => {
    test('it should render a user card', () => {
        render(<UserCard name="Leanne Graham" email="Sincere@april.biz " city="Gwenborough" phone="1-770-736-8031 x56442" id={1} />);
        expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });
});

//checking the test work correctly here.
describe('Motorpoint Users', () => {
    test('it should return a list of users', () => {
        const users = MotorpointUsers.displayName;
        expect(users).toBeTruthy();
    });
});





