import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnnouncementsService {
  constructor(private prisma: PrismaService) {}

  create(
    data: { title: string; content: string; authorId: string },
    userRole: string
  ) {
    if (userRole !== 'ADMIN') {
      throw new ForbiddenException('Only admins can create announcements');
    }
    return this.prisma.announcement.create({ data });
  }

  findAll() {
    return this.prisma.announcement.findMany({
      include: { author: { select: { id: true, email: true, name: true, role: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }
}