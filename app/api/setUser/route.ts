import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const user = await currentUser();
        if (!user)
            return NextResponse.json({ message: "there is no account" });
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
            return NextResponse.json({ message: "created" })

        } else
            return NextResponse.json({ message: "already created" })
    } catch (err) {
        return NextResponse.json({ message: err })
    }
}
