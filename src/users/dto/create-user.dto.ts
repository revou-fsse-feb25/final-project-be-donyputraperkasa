import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'coba', description: 'Nama lengkap user' })
    name: string;

    @ApiProperty({ example: 'coba@mail.com', description: 'Email user' })
    email: string;

    @ApiProperty({ example: '123456', description: 'Password user' })
    password: string;
}
