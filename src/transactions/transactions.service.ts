import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: {
        amount: createTransactionDto.amount,
        status: createTransactionDto.status,
        user: {
          connect: { id: createTransactionDto.userId }
        },
        course: {
          connect: { id: createTransactionDto.courseId }
        }
      },
    });
  }

  findAll() {
    return this.prisma.transaction.findMany({
      include: {
        user: true,
        course: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.transaction.findUnique({
      where: { id },
      include: {
        user: true,
        course: true,
      },
    });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return this.prisma.transaction.update({
      where: { id },
      data: updateTransactionDto,
    });
  }

  remove(id: number) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
