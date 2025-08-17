import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
    @ApiProperty({ example: 'Persamaan Linear', description: 'Judul materi pelajaran' })
    title: string;

    @ApiProperty({ example: 'Materi tentang persamaan linear satu variabel', description: 'Isi materi pelajaran', required: false })
    content?: string;

    @ApiProperty({ example: 1, description: 'ID mata pelajaran yang terkait dengan lesson ini' })
    mataPelajaranId: string;
}
