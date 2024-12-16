import {GetProjects} from "@/app/api/dashboard/getProjects"
import ProjectList from "@/app/components/dashboard/projectList"
import ProjectCreator from "@/app/components/dashboard/projectCreator"

export default async function Dashboard() {
    const user: string = "gbtsui"
    const projects = await GetProjects(user)

    return (
        <main>
            <h1 className={"mb-4 text-8xl font-bold"}>
                Dashboard
            </h1>
            <ProjectList projects={projects}/>
            <ProjectCreator/>
        </main>
    )
}