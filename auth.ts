import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {prisma} from "@/app/api/db"
import bcrypt from "bcrypt";
import {User} from "@prisma/client";
import {z} from "zod";
import {AdapterUser} from "@auth/core/adapters";

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

                    user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        }
                    })
                    if (!user) {
                        throw new Error("User does not exist")
                    }
                    const matchingPasswords: boolean = await bcrypt.compare(credentials.password, user.password)
                    if (!matchingPasswords) {
                        throw new Error("Invalid credentials.")
                    }

                    console.log (user.user_name, " signed in")
                    return user
                } catch (error) {
                    console.error("Authentication error: ", error)
                    if (error instanceof Error && error.message === "User does not exist") {
                        return { error: "USER_NOT_FOUND" }
                    } else if (error instanceof Error && error.message === "Invalid credentials."){
                        return { error: "INVALID_CREDENTIALS"}
                    }
                }

            }
        }),
    ],
    callbacks: {
        async signIn({user}){
            return !!user;
        }
    },

    pages: {
        signIn: "/login",
        error: "/error",
    },

})