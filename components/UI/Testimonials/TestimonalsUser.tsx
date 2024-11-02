import { User, Skeleton } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { getUser } from '../../Utils/Fetcher';
import { UsersResponse } from '../../types';

interface ITestimonalsUserProps {
    id: number
}

export const TestimonalsUser: React.FunctionComponent<ITestimonalsUserProps> = ({ id }) => {
    const [userData, setUserData] = useState<UsersResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await getUser(id.toString());
                setUserData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error loading user:', error);
                setError(true);
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col items-center gap-[16px] pt-[24px]">
                <Skeleton className="rounded-full w-[64px] h-[64px]" />
                <Skeleton className="h-3 w-[100px] rounded-lg" />
                <Skeleton className="h-3 w-[80px] rounded-lg" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center gap-[16px] pt-[24px]">
                <p className="text-red-500">Error loading user data</p>
            </div>
        );
    }


    return (
        <div className="flex flex-col items-center gap-[16px] pt-[24px]">
            {/* <Image
                src={'https://i.pravatar.cc/64'}
                alt="Avatar image"
                width={64}
                height={64}
                className="rounded-full"
            /> */}
            <User
                name={userData?.name}
                description={userData?.company.name}
                avatarProps={{
                    src: `https://i.pravatar.cc/64?img=${id}`,
                }}
            />
            <h4 className="font-normal text-[18px] text-[#0F172A]">
                {userData?.name}
            </h4>
            <p className="font-normal text-[16px] text-[#0F172A]">
                {userData?.company.name}
            </p>
        </div>
    );
};
