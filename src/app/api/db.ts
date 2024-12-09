import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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