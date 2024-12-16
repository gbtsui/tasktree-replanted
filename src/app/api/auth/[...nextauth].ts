import NextAuth from "next-auth"
import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import signInSchema from "@/app/utils/credentialValidation";
import saltAndHashPassword from "@/app/utils/password";
import {ZodError} from "zod";
import {prisma} from "@/app/api/db";
import {randomBytes, randomUUID} from "node:crypto";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "you@emailprovider.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req){

                const {email, password} = await signInSchema.parseAsync(credentials)

                const user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })
                if (!user) {
                    return null
                }

                const pwMatch = await bcrypt.compare(password, user.password)

                if (!pwMatch) {
                    return null
                }
                return user
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30, //1 month
        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex")
        }
    }
}

export default NextAuth(authOptions)