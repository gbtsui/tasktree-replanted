export default function LoginForm() {
    async function handleSubmit(formData) {
        "use server"
        const email: string = formData.get("email-username");

        console.log(email)
    }

    return (
        <form onSubmit={handleSubmit} className={"flex flex-col items-start text-4xl ml-9"}>
            <label className={"p-4"}>
                <input name={"email-username"} type={"text"} placeholder={"Username"} className={"text-darkforestgreen text-5xl p-2 bg-cream m-3 rounded-bl-lg rounded-tr-lg"} required/>
            </label><br/>
            <label className={"p-4"}>
                <input name={"password"} type={"password"} placeholder={"Password"} className={"text-darkforestgreen text-5xl p-2 bg-cream m-3"} required/>
            </label><br/>
            <label className={""}>
                <input type={"submit"} value={"Login"} className={"text-darkforestgreen p-5 mt-1 bg-cream rounded-bl-lg rounded-tr-lg"}/>
            </label>
        </form>
    )
}