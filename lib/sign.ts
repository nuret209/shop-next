"use server"
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
export async function sign() {
    try {
        const user = await currentUser();
        if (!user)     
            return "there is no account";
        const loggedInUser = await prisma.user.findUnique({ where: { id: user.id } });
        if (!loggedInUser) {
            await prisma.user.create(
                {
                    data: {
                        id: user.id,
                        email: user.emailAddresses[0].emailAddress,
                        firstName: user.firstName ? user.firstName : "",
                        lastName: user.lastName ? user.lastName : "",
                        createdAt: user.createdAt ? user.createdAt : 0,
                        imageURL: user.imageUrl ? user.imageUrl : "",
                    }
                }
            );
            return  "created";

        } else
            return  "already created" 
    } catch (err) {
        return  err 
    }
}
