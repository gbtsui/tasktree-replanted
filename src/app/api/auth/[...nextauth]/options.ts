import NextAuth from "next-auth"
import type {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import {signInSchema} from "@/app/utils/credentialValidation";
import {ZodError} from "zod";
import {prisma} from "@/app/api/db";
import {randomBytes, randomUUID} from "node:crypto";

// how many errors you really got? i mean it's too many options
// i'm finna pass on this body, i'm john stockton
export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "you@emailprovider.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req){
                try {
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
                } catch (err) {
                    if (err instanceof ZodError){
                        return null
                    } else {
                        console.error(err)
                    }
                }

            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30, //1 month
        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex")
        }
    },
}

export default NextAuth(options)