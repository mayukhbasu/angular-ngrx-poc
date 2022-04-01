export interface PersonError {
    field: string;
    message: string;
} 

export interface PersonErrorResponse {
    error: PersonError[];
}