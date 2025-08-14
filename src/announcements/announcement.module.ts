import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; // Import PrismaModule bukan PrismaService

@Module({
  imports: [PrismaModule],  // Import PrismaModule agar PrismaService bisa di-inject
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService],
})
export class AnnouncementsModule {}