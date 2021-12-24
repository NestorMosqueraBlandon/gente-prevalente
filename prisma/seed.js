import pc from "@prisma/client"
import { companies } from "../data/companies.js"

const {PrismaClient} = pc

const prisma = new PrismaClient()

const main = async () => {
    await prisma.user.create({
        data: {
            email: "testnewemail@gmail.com",
        }
    })

    await prisma.company.createMany({
        data: companies,
    })
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})