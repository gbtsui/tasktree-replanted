import {prisma} from '@/app/api/db'

export async function GetProjects(user: string) {
    const UserData  = await prisma.user.findUnique({
        where: {
            user_name: user
        }
    })
    console.log(UserData)

    const AllProjects = await prisma.project.findMany({
        where: {
            author_id: UserData!.id
        }
    })

    console.log(AllProjects)

    return AllProjects
}
