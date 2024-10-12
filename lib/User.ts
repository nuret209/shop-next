"use server"
import { currentUser } from '@clerk/nextjs/server'
export const getUser = async () => {
    const user = await currentUser();
    return user;
}
export const getProfileImage = async () => (await getUser())?.imageUrl;
export const getFullName = async () => `${(await getUser())?.fullName}`
export const getUserName = async () => `${(await getUser())?.username}`