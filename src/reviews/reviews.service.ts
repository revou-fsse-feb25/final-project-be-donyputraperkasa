import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        rating: createReviewDto.rating,
        comment: createReviewDto.comment,
        user: { connect: { id: createReviewDto.userId } },
        course: { connect: { id: createReviewDto.courseId } },
      },
    });
  }

  findAll() {
    return this.prisma.review.findMany({
      include: { user: true, course: true },
    });
  }

  findOne(id: number) {
    return this.prisma.review.findUnique({
      where: { id },
      include: { user: true, course: true },
    });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  remove(id: number) {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}
