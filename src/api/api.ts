import axios from 'axios';
import {
    UserRegisterRequest,
    UserDetailsResponse,
    ContestRegisterRequest,
    ContestDetails,
    ContestWebsocketResponse, // 保留这个导入
    BetRegisterRequest,
} from '../types';  // 确保路径正确

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = process.env.REACT_APP_API_CONTENT_TYPE;

// Function to register a user
export const registerUser = async (userData: UserRegisterRequest): Promise<UserDetailsResponse> => {
    const response = await axios.post<UserDetailsResponse>('/users/register', userData);
    return response.data;
};

// Function to get user by ID
export const getUserById = async (userId: number): Promise<UserDetailsResponse> => {
    const response = await axios.get<UserDetailsResponse>(`/users/${userId}`);
    return response.data;
};

// Function to register a contest
export const registerContest = async (contestData: ContestRegisterRequest): Promise<ContestDetails> => {
    const response = await axios.post<ContestDetails>('/contests/register', contestData);
    return response.data;
};

// Function to get contest by ID
export const getContestById = async (contestId: number): Promise<ContestDetails> => {
    const response = await axios.get<ContestDetails>(`/contests/${contestId}`);
    return response.data;
};

// Example function to handle WebSocket messages
export const handleWebSocketMessage = (message: ContestWebsocketResponse) => {
    console.log('Received WebSocket message:', message);
    // Handle the WebSocket message
};

// Function to place a bet
export const placeBet = async (contestId: number, roundId: number, betData: BetRegisterRequest): Promise<void> => {
    await axios.put(`/contests/${contestId}/${roundId}/bet`, betData);
};


