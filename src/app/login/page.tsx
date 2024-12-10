import Navbar from "@/app/components/universal/navbar";
import Logo from "@/app/components/logo";
import LoginForm from "@/app/components/login/loginForm"

export default function LoginPage() {
    return (
        <div className={"--font-atkinsonHyperlegible text-eggshell"}>
            <Navbar/>
            <div id="header" className="page clear-both items-center text-center flex justify-center p-7">
                <Logo/>
                <div className="items-center overflow-auto flex justify-center p-7">
                    <h1 className={"text-9xl mx-0"}>login</h1>
                </div>
            </div>
            <div className="page text-center">
                <main className="page">
                    <LoginForm/>
                </main>
            </div>
        </div>
    )
}