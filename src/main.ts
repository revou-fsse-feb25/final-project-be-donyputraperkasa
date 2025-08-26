import { config } from 'dotenv';
config(); // Load .env ke process.env sebelum NestFactory dijalankan

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Load Prisma service untuk memastikan koneksi ke DB saat start
  const prismaService = app.get(PrismaService);
  await prismaService.$connect();

  // Enable CORS untuk FE lokal dan Vercel
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://final-project-be-donyputraperkasa-production-dfe8.up.railway.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('Final Project BE donyputraperkasa')
    .setDescription('Final Project BE donyputraperkasa with swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Gunakan port dari environment variable (Railway) atau default 3000
  const port = process.env.PORT || 3000;
  console.log('DATABASE_URL:', process.env.DATABASE_URL);

  await app.listen(port);
  console.log(`🚀 App running on http://localhost:${port}`);
  console.log("DATABASE_URL (Railway):", process.env.DATABASE_URL);
}
bootstrap();