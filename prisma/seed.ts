import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // User Admin
    const admin = await prisma.user.upsert({
        where: { email: "admin@mail.com" },
        update: {},
        create: {
        email: "admin@mail.com",
        password: "hashedpassword", // ganti nanti dengan bcrypt
        name: "Admin",
        role: "ADMIN",
        },
    });

    // Student
    const student = await prisma.user.upsert({
        where: { email: "student@mail.com" },
        update: {},
        create: {
        email: "student@mail.com",
        password: "hashedpassword",
        name: "dony",
        role: "STUDENT",
        },
    });

    // Lesson
    const lesson = await prisma.lesson.create({
        data: {
        title: "Barisan dan Deret Aritmatika",
        content: "Materi pengenalan pola barisan dan deret aritmatika",
        },
    });

    console.log("Seed data created:", { admin, student, lesson });
    }

    main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });