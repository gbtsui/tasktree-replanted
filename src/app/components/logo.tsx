import Image from "next/image"

export default function Logo() {
    return (
        <Image
            src="../icon.svg"
            width={500}
            height={500}
            alt="logo"
        />
    )
}