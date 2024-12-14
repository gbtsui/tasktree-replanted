import saltAndHashPassword from "./password"
import {prisma} from "@/app/api/db";

export default async function changePassword(password: string, username: string) {

    const hashedPassword = await saltAndHashPassword(password);

    await prisma.user.update({
        where: {
            user_name: username
        },
        data: {
            password: hashedPassword
        }
    })

    console.log("user ", username, " password changed")
    return true
}

