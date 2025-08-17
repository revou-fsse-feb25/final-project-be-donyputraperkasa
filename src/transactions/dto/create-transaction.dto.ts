import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
    @ApiProperty({ example: 500000, description: 'Jumlah pembayaran transaksi' })
    amount: number;

    @ApiProperty({ example: 'PENDING', description: 'Status transaksi' })
    status: string;

    @ApiProperty({ example: 1, description: 'ID user yang melakukan transaksi' })
    userId: string;

    @ApiProperty({ example: 2, description: 'ID mata pelajaran yang dibayar' })
    mataPelajaranId: string;
}
