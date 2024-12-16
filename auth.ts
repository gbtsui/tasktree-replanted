import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {prisma} from "@/app/api/db"
import bcrypt from "bcrypt";
import { ZodError } from "zod";
import {User} from "@prisma/client";
import {signInSchema} from "@/app/utils/credentialValidation";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },

            authorize: async (credentials) => {
                try {
                    let user: User | null = null

                    const { email, password } = await signInSchema.parseAsync(credentials)

                    user = await prisma.user.findUnique({
                        where: {
                            email: email,
                        }
                    })
                    if (!user) {
                        return null
                    }
                    const matchingPasswords: boolean = await bcrypt.compare(password, user.password)
                    if (!matchingPasswords) {
                        return null
                    }

                    console.log (user.user_name, " signed in")
                    return user
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null
                    }
                }

            }
        }),
    ],

    callbacks: {

    },

    pages: {
        signIn: "/login",
        error: "/error",
    },

})