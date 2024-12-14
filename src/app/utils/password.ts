import bcrypt from "bcrypt"

export default async function saltAndHashPassword(password: string){
    const saltRounds: number = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)
    return hashedPassword;
}

