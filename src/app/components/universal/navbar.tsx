import Image from "next/image";

export default function Navbar() {
    return (
        <div id="navbar" className="w-full p-3 flex items-center justify-between clear-both">
            <Image
                src={"./icon.svg"}
                width={50}
                height={50}
                alt={"logo but smol"}></Image>
            <button
                className={"p-4 text-darkforestgreen bg-eggshell hover:bg-cream color-darkforestgreen transition rounded-bl-xl rounded-tr-xl rounded-br-sm rounded-tl-sm"}>Login
            </button>
        </div>
    )
}