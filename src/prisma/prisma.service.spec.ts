import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
    let service: PrismaService;

    // Sebelum semua test, buat module testing dan connect ke database
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
        providers: [PrismaService],
        }).compile();

        service = module.get<PrismaService>(PrismaService);
        await service.$connect(); // Connect ke database
    });

    // Setelah semua test selesai, disconnect dari database
    afterAll(async () => {
        await service.$disconnect();
    });

    // Test dasar memastikan PrismaService terdefinisi
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // Test connect dan disconnect berjalan tanpa error
    it('should connect and disconnect without error', async () => {
        await expect(service.$connect()).resolves.not.toThrow();
        await expect(service.$disconnect()).resolves.not.toThrow();
    });
});