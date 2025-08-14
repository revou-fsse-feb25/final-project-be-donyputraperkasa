import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnouncementsModule } from './announcements/announcements.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ReviewsModule } from './reviews/reviews.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [AnnouncementsModule, AuthModule, UsersModule, TransactionsModule, ReviewsModule, LessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}