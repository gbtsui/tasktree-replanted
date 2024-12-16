import saltAndHashPassword from "./password"
import {prisma} from "@/app/api/db";

export default async function changePassword(password: string, username: string) {

    const hashedPassword = await saltAndHashPassword(password);

    try {
        await prisma.user.update({
            where: {
                user_name: username
            },
            data: {
                password: hashedPassword
            }
        })
    } catch (error) {
        console.error(error)
        return false
    }


    console.log("user ", username, " password changed")
    return true
}

