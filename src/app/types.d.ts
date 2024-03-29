export interface UserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export interface LoginResponse {
    token: string;
};

export interface LoginData {
    email: string;
    password: string;
};

export interface UserApiResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserData[];
    support: {
        url: string;
        text: string;
    };
};

export interface UserDetailResponse {
    data: UserData;
};