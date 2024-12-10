import {User, Project} from '@prisma/client'
import {prisma} from '@/app/api/db'

export async function CreateProject(user_name: string, project_name: string, project_description: string) {
    const UserData  = await prisma.user.findUnique({
        where: {
            user_name: user_name
        }
    })
    if (!UserData) {
        return Error('User not found')
    }

    await prisma.project.create({
        data: {
            project_name: project_name,
            project_description: project_description,
            author_id: UserData.id,
        }
    })

    return "Project created"
}
