import type {User, Task} from "@prisma/client"
import {CreateProject} from "@/app/api/dashboard/createProject"

interface Project {
    project_name: string,
    project_description: string,
    id: bigint,
    author_id: bigint,
    created_at: Date,
    author: User,
    tasks: Task[],
}

export default function ProjectCreator() {
    async function create(formData) {
        "use server"
        const project_name: string = formData.get("project_name");
        const project_description: string = formData.get("project_description");
        const author_username: string = formData.get("author");

        CreateProject(
            author_username,
            project_name,
            project_description
        );
    }

    return (
        <form className={"justify-center"} action={create}>
            <label className={"text-2xl"}>
                Project Name: <input name="project_name" type="text" className={"text-forestgreen"}
                                     defaultValue={"New Project"}/>
            </label>
            <hr/>
            <label>
                Project Description:<br/>
                <input name="project_description" type="text" className={"text-forestgreen"}/><br/>
            </label>
            <label>
                Author:<br/>
                <input name="author" type="text" className={"text-forestgreen"}/>
            </label>
            <br/>
            <button
                type="submit"
                value="Submit"
                className="btn btn-primary p-3 color-cream bg-forestgreen mt-3 rounded-bl-lg rounded-tr-lg"
            >
                Create!!!
            </button>
        </form>
    );
}
