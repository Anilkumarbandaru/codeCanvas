"use client"
import { auth } from '@/configs/firebaseConfig';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../provider';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function ProfileAvatar() {
    const authContext = useAuthContext();
    const user = authContext?.user;
    const router = useRouter();
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    
    useEffect(() => {
        // Add debugging to see what's available
        console.log("Auth context:", authContext);
        console.log("User object:", user);
        console.log("Photo URL:", user?.photoURL);
        
        if (user?.photoURL) {
            setPhotoUrl(user.photoURL);
        }
    }, [user]);
    
    const onButtonPress = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            router.replace('/')
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    }
    
    // If we don't have a photo, show a placeholder or initial
    const renderProfileImage = () => {
        if (photoUrl) {
            return <img src={photoUrl} alt='profile' className='w-[35px] h-[35px] rounded-full' />;
        } else if (user) {
            // Show a circle with user's initial as fallback
            const initial = user.displayName?.charAt(0) || user.email?.charAt(0) || '?';
            return (
                <div className='w-[35px] h-[35px] rounded-full bg-blue-500 flex items-center justify-center text-white font-medium'>
                    {initial.toUpperCase()}
                </div>
            );
        } else {
            // Not logged in or loading state
            return <div className='w-[35px] h-[35px] rounded-full bg-gray-300'></div>;
        }
    };
    
    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    {renderProfileImage()}
                </PopoverTrigger>
                <PopoverContent className='w-[150px] max-w-sm'>
                    <div className="flex flex-col gap-2">
                        {user && <p className="text-sm truncate">{user.displayName || user.email}</p>}
                        <Button variant={'ghost'} onClick={onButtonPress} className='w-full'>Logout</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default ProfileAvatar