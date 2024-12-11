import {prisma} from '@/app/api/db'
import {Project} from "@prisma/client";

export async function GetProjects(user: string) {

    const UserData  = await prisma.user.findUnique({
        where: {
            user_name: user
        }
    })

    /*
    const AllProjects = await prisma.project.findMany({
        where: {
            author_id: UserData!.id
        }
    })
     */
    let AllProjects: Project[]

    try {
        AllProjects = await prisma.project.findMany({
            where: {
                author_id: UserData!.id
            }
        })
    }
    catch (error) {
        console.error(error)
        return "something happened."
    }

    console.log("complete")
    return AllProjects
}
