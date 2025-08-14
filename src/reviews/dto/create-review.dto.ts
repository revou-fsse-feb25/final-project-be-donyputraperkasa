export class CreateReviewDto {
    rating: number;
    comment?: string;
    userId: string;
    courseId: string;
}
