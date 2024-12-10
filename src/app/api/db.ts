import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {prisma: PrismaClient}

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

/**
async function main() {
    const AllUsers = await prisma.user.findMany()
    console.log(AllUsers)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
 **/


