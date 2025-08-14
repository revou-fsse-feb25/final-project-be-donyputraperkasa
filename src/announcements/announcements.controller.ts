import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private service: AnnouncementsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Post()
  create(@Body() body: { title: string; content: string }, @Request() req: any) {
    return this.service.create({
      title: body.title,
      content: body.content,
      authorId: req.user.userId,
    });
  }
}