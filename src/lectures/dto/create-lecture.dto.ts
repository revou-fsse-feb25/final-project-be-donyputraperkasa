import { IsString, IsEmail } from 'class-validator';

export class CreateLectureDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    subject: string;

    @IsString()
    schedule: string;

    @IsString()
    time: string;
}
