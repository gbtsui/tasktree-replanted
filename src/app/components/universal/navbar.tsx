"use client"

import Image from "next/image";
import Link from "next/link"
import {usePathname} from "next/navigation"
import clsx from "clsx"

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div id="navbar" className="w-full p-3 flex items-center justify-between clear-both">
            <Image
                src={"./icon.svg"}
                width={50}
                height={50}
                alt={"logo but smol"}></Image>
            <Link
                className={"p-4 text-darkforestgreen bg-eggshell hover:bg-cream color-darkforestgreen transition rounded-bl-xl rounded-tr-xl rounded-br-sm rounded-tl-sm"}
                href={"/login"}>
                <p className={"text-xl"}>Login</p>
            </Link>

        </div>
    )
}