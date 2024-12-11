"use server"
import {prisma} from "@/app/api/db"

export async function deleteProject(project_id: bigint): Promise<string>{

    try{
        await prisma.project.delete({
            where: {
                id: project_id
            }
        })
        return "Project deleted successfully"
    } catch (error) {
        // @ts-ignore
        return error.toString()
    }
}