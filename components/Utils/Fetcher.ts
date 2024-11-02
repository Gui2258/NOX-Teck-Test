import { TestimonialsResponse, UsersResponse } from '../types';

const BASE_URL =
    process.env.API_URL || 'https://jsonplaceholder.typicode.com';
export async function getStories(): Promise<TestimonialsResponse[]> {
    const res = await fetch(`${BASE_URL}/posts`, {
        cache: 'no-cache',
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error(
            'Get Stories failed:',
            res.status,
            res.statusText,
            errorBody
        );
        throw new Error('Failed to fetch data');
    }

    const datas: TestimonialsResponse[] = await res.json();
    return datas;
}
export async function getUser(id:string): Promise<UsersResponse> {
    const res = await fetch(`${BASE_URL}/users/${id}`,{
        cache: 'no-cache',
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error(
            'Get Stories failed:',
            res.status,
            res.statusText,
            errorBody
        );
        throw new Error('Failed to fetch data');
    }

    const datas: UsersResponse = await res.json();
    return datas;
}
