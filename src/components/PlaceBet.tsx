import React, { useState } from 'react';
import { placeBet } from '../api/api';
import { BetRegisterRequest } from '../types';

const PlaceBet: React.FC = () => {
    const [betData, setBetData] = useState<BetRegisterRequest>({
        amount: 0,
        userId: 0,
        optionId: 0
    });
    const [contestId, setContestId] = useState<number>(0);
    const [roundId, setRoundId] = useState<number>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setBetData({ ...betData, [name]: parseInt(value, 10) });
    };

    const handleContestIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContestId(parseInt(event.target.value, 10));
    };

    const handleRoundIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoundId(parseInt(event.target.value, 10));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await placeBet(contestId, roundId, betData);
            alert('Bet placed successfully!');
        } catch (error) {
            console.error('Error placing bet:', error);
            alert('Failed to place bet.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="contestId" value={contestId} onChange={handleContestIdChange} placeholder="Contest ID" />
            <input type="number" name="roundId" value={roundId} onChange={handleRoundIdChange} placeholder="Round ID" />
            <input type="number" name="amount" value={betData.amount} onChange={handleInputChange} placeholder="Amount" />
            <input type="number" name="userId" value={betData.userId} onChange={handleInputChange} placeholder="User ID" />
            <input type="number" name="optionId" value={betData.optionId} onChange={handleInputChange} placeholder="Option ID" />
            <button type="submit">Place Bet</button>
        </form>
    );
};

export default PlaceBet;
