import { UsersResponse } from '../types';

const BASE_URL =
    process.env.API_URL || 'https://jsonplaceholder.typicode.com/posts';
export async function getStories(): Promise<UsersResponse[]> {
    const res = await fetch(`${BASE_URL}`, {
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

    const datas: UsersResponse[] = await res.json();
    return datas;
}
