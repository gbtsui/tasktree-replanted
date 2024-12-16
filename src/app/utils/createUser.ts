import saltAndHashPassword from "@/app/utils/password";
import {prisma} from "@/app/api/db";

export default async function CreateUser(details: {
    email: string,
    user_name: string,
    password: string
}) {

    const existsUserWithEmail = await prisma.user.findUnique({
        where: {
            email: details.email,
        }
    })

    if (existsUserWithEmail) {
        throw new Error("Email already in use");
    }

    const existsUserWithUsername = await prisma.user.findUnique({
        where: {
            user_name: details.email,
        }
    })
    if (existsUserWithUsername) {
        throw new Error("Username already in use");
    }

    const hashedPassword = await saltAndHashPassword(details.password);

    const newUser = await prisma.user.create({
        data: {
            email: details.email,
            user_name: details.user_name,
            password: hashedPassword
        }
    })
    console.log("user created successfully")
    console.log(newUser)
    return newUser
}
