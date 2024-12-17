import {signIn} from "next-auth/react";
import {redirect} from "next/navigation";

const LoginForm =  () => {
    redirect("/api/auth/signin")
    return (
        <form
            action={async (formData) => {
                "use server"
                const result = await signIn("credentials", formData, {redirect: false, callbackUrl:"/dashboard"})
                console.log(result)
            }}
            className={"flex flex-col items-start text-4xl ml-9 items-center"}>
            <label className={"p-1"}>
                <input name={"email"} type={"email"} placeholder={"Email"} className={"text-darkforestgreen text-xl p-2 bg-eggshell m-1 rounded-bl-lg rounded-tr-lg"} required/>
            </label><br/>
            <label className={"p-1"}>
                <input name={"password"} type={"password"} placeholder={"Password"} className={"text-darkforestgreen text-xl p-2 bg-eggshell m-1 rounded-bl-lg rounded-tr-lg"} required/>
            </label><br/>
            <label className={"p-1"}>
                <input type={"submit"} value={"Login"} className={"text-darkforestgreen p-5 m-3 mt-1 bg-cream rounded-bl-lg rounded-tr-lg"}/>
            </label>
        </form>
    )
}

export default LoginForm

