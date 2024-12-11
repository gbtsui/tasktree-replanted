import {CreateProject} from "@/app/api/dashboard/createProject"


export default function ProjectCreator() {
    async function create(formData) {
        "use server"
        const project_name: string = formData.get("project_name");
        const project_description: string = formData.get("project_description");
        const author_username: string = formData.get("author");



        await CreateProject(
            author_username,
            project_name,
            project_description
        );
        /*
        function refresh_page(){
            window.location.reload();
        }
        refresh_page()
         */
    }

    return (
        <form className={"justify-center"} action={create}>
            <label className={"text-2xl"}>
                Project Name: <input name="project_name" type="text" className={"text-forestgreen"}
                                     defaultValue={"New Project"} required/>
            </label>
            <hr/>
            <label>
                Project Description:<br/>
                <input name="project_description" type="text" className={"text-forestgreen"}/><br/>
            </label>
            <label>
                Author:<br/>
                <input name="author" type="text" className={"text-forestgreen"} required/>
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
