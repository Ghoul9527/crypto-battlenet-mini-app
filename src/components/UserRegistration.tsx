import React, { useState } from 'react';
import { registerUser} from '../api/api';
import { UserRegisterRequest } from '../types';

const UserRegistration: React.FC = () => {
    const [userData, setUserData] = useState<UserRegisterRequest>({ tonConnectWalletAddress: '', username: '', telegramId: '' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const user = await registerUser(userData);
            console.log('User Registered:', user);
            alert('User registered successfully!');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Failed to register user.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="tonConnectWalletAddress" value={userData.tonConnectWalletAddress} onChange={handleInputChange} placeholder="Wallet Address" />
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="Username" />
            <input type="text" name="telegramId" value={userData.telegramId} onChange={handleInputChange} placeholder="Telegram ID" />
            <button type="submit">Register</button>
        </form>
    );
};

export default UserRegistration;
