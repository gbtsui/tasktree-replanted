import type {User, Task} from "@prisma/client"

interface Project {
    project_name: string,
    project_description: string,
    id: bigint,
    author_id: bigint,
    created_at: Date,
    author: User,
    tasks: Task[],
}

export default function ProjectList({projects}: {projects: Project[]}) {
    return (
        <div className={"flex flex-wrap m-2 justify-center"}>
            {
                projects.map(
                    x => <div className={"border-2 border-forestgreen p-4 m-3 w-1/3 flex-auto overflow-auto"}>
                        <h1 className={"text-3xl font-bold"}>
                            {x.project_name} [{x.id}]
                        </h1>
                        <p className={"text-m"}>
                            {x.project_description}
                        </p>
                        <p className={"text-sm"}>
                            Created by [{x.author_id}] at {x.created_at.toString()}
                        </p>
                    </div>
                )
            }
        </div>
    )
}
