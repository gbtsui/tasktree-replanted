//import redirect from "next/navigation"
//import {AuthError} from "next-auth"
import {signIn} from "root/auth"

const LoginForm =  () => {
    return (
        <form
            action={async (formData) => {
                "use server"
                const result = await signIn("credentials", formData, {redirectTo: "/dashboard/login-success"}) //returns never???
                if (result) {
                    console.log("signed in successfully")
                } else {
                    console.log("not signed in successfully")
                }
            }}
            className={"flex flex-col items-start text-4xl ml-9"}>
            <label className={"p-4"}>
                <input name={"email"} type={"email"} placeholder={"Email"} className={"text-darkforestgreen text-5xl p-2 bg-cream m-3 rounded-bl-lg rounded-tr-lg"} required/>
            </label><br/>
            <label className={"p-4"}>
                <input name={"password"} type={"password"} placeholder={"Password"} className={"text-darkforestgreen text-5xl p-2 bg-cream m-3"} required/>
            </label><br/>
            <label className={"p-4"}>
                <input type={"submit"} value={"Login"} className={"text-darkforestgreen p-5 m-3 mt-1 bg-cream rounded-bl-lg rounded-tr-lg"}/>
            </label>
        </form>
    )
}

export default LoginForm

