import {prisma} from '@/app/api/db'

export async function GetProjects(user: String) {
    const UserData = await prisma.user.findUnique({
        where: {
            user_name: user
        }
    })


    const AllProjects = await prisma.project.findMany({
        where: {
            author_id: UserData.id
        }
    })

    return AllProjects
}
