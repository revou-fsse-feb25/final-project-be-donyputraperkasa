import { Controller, Get, Post, Body, Request, UseGuards, Put, Delete, Param } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiTags('Announcements')
@Controller('announcements')
export class AnnouncementsController {
  constructor(private service: AnnouncementsService) {}

  @ApiResponse({ status: 200, description: 'List all announcements' })
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'Announcement created successfully' })
  @Post()
  create(@Body() body: { title: string; content: string }, @Request() req: any) {
    return this.service.create({
      title: body.title,
      content: body.content,
      authorId: req.user.userId,
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Announcement updated successfully' })
  @Put(':id')
  update(@Param('id') id: string, @Body() body: { title: string; content: string }) {
    return this.service.update(id, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Announcement deleted successfully' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}