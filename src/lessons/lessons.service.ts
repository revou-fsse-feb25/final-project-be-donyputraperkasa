import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from '../prisma/prisma.service';

@ApiTags('Lessons')
@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonDto: CreateLessonDto) {
    return this.prisma.lesson.create({
      data: {
        title: createLessonDto.title,
        content: createLessonDto.content,
      },
    });
  }

  async findAll() {
    return this.prisma.lesson.findMany();
  }

  async findOne(id: number) {
    return this.prisma.lesson.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.prisma.lesson.update({
      where: { id },
      data: {
        ...updateLessonDto,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}
