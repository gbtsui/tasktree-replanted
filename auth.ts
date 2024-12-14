import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {prisma} from "@/app/api/db"
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },

            authorize: async (credentials) => {
                let user = null
                user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }
                })
                const matchingPasswords = await bcrypt.compare(credentials.password, user.password)
                console.log(matchingPasswords)
                if (!matchingPasswords) {
                    throw new Error("Invalid credentials.")
                }
                console.log(user)
                return user
            }
        }),
    ],
    pages: {
        signIn: "/login"
    },

})