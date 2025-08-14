import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonDto: CreateLessonDto) {
    return this.prisma.lesson.create({
      data: {
        title: createLessonDto.title,
        content: createLessonDto.content,
        course: {
          connect: { id: createLessonDto.courseId },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.lesson.findMany({
      include: { course: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.lesson.findUnique({
      where: { id },
      include: { course: true },
    });
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.prisma.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  async remove(id: number) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}
