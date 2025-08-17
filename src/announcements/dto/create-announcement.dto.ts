import { ApiProperty } from '@nestjs/swagger';

export class CreateAnnouncementDto {
    @ApiProperty({ example: 'Pengumuman Kelas Matematika', description: 'Judul pengumuman bimbel online' })
    title: string;

    @ApiProperty({ example: 'Kelas Matematika Dasar akan dimulai hari Senin pukul 10.00 WIB', description: 'Isi pengumuman bimbel online' })
    content: string;

    @ApiProperty({ example: 'INFO', description: 'Jenis pengumuman bimbel (INFO/JADWAL/PENGUMUMAN PENTING)', required: false })
    type?: string;

    @ApiProperty({ example: '2025-08-20', description: 'Tanggal mulai kelas atau berlakunya pengumuman', required: false })
    startDate?: Date;
}
