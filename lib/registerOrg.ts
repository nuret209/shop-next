"use server"
import { prisma } from "./prisma";

interface RegisterProps {
    name: string,
    slug: string,
    address: string,
    email: string,
    password: string,
    profilePicture: File | null,
};

export async function registerPrisma(formData: RegisterProps) {
    console.log("hello");
    const user = await prisma.organization.create({
        data: {
            name: formData.name,
            slug: formData.slug,
            adrressOrg: formData.address,
            email: formData.email,
            password: formData.password,
            image: {
                create: {
                    Image: formData.profilePicture?.name || ""
                },
            },
        },
    });
    console.log(user);
}