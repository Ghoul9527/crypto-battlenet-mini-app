export interface UserRegisterRequest {
    tonConnectWalletAddress: string;  // Use 'string' instead of 'String'
    username: string;
    telegramId: string;
}

export interface UserDetailsResponse {
    userId: number;
    userName: string;
    points: number;
}

export interface ContestRegisterRequest {
    content: string;
    minBetAmount: number;
    maxBetAmount: number;
    userId: number;
    contestStartDateTime: string;  // Use ISO 8601 string for date-time
    contestEndDateTime: string;
    options?: string[];
}

export interface ContestDetails {
    contestId: number;
    content: string;
    minBetAmount: number;
    maxBetAmount: number;
    options: string[];
}

export interface RoundDetails {
    roundId: number;
    startPrice: number;
    endPrice: number;
    startTime: number;
    endTime: number;
    priceFactor: number;
}

export interface ContestWebsocketResponse {
    contest: ContestDetails;
    roundId: RoundDetails;
    lastPrice: number;
    pricePool: number;
    lockedPrice: number;
}

export interface BetRegisterRequest {
    amount: number;
    userId: number;
    optionId: number;
}