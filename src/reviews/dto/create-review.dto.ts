import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
    @ApiProperty({ example: 5, description: 'Rating yang diberikan untuk mata pelajaran' })
    rating: number;

    @ApiProperty({ example: 'Materi sangat jelas dan mudah dipahami', description: 'Komentar review', required: false })
    comment?: string;

    @ApiProperty({ example: 'uuid-user', description: 'ID user yang memberikan review' })
    userId: string;

    @ApiProperty({ example: 'uuid-mata-pelajaran', description: 'ID mata pelajaran yang direview' })
    mataPelajaranId: string;
}
