import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnnouncementsService {
  constructor(private prisma: PrismaService) {}

  create(data: { title: string; content: string; authorId: string }) {
    return this.prisma.announcement.create({ data });
  }

  findAll() {
    return this.prisma.announcement.findMany({
      include: { author: { select: { id: true, email: true, name: true, role: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  update(id: string, data: { title: string; content: string }) {
    return this.prisma.announcement.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.announcement.delete({ where: { id } });
  }
}