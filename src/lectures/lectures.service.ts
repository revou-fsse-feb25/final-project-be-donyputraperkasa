import { Injectable } from '@nestjs/common';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LecturesService {
  constructor(private prisma: PrismaService) {}

  create(createLectureDto: CreateLectureDto) {
    return this.prisma.lecture.create({ data: createLectureDto });
  }

  findAll() {
    return this.prisma.lecture.findMany();
  }

  findOne(id: string) {
    return this.prisma.lecture.findUnique({ where: { id } });
  }

  update(id: string, updateLectureDto: UpdateLectureDto) {
    return this.prisma.lecture.update({ where: { id }, data: updateLectureDto });
  }

  remove(id: string) {
    return this.prisma.lecture.delete({ where: { id } });
  }
}
