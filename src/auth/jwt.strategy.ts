import { UserRole } from '@prisma/client';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

interface JwtPayload {
    sub: string;
    email: string;
    role: UserRole;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.JWT_SECRET || 'changeme',
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.usersService.findById(payload.sub);
        if (!user) throw new UnauthorizedException('User not found');
        return { userId: user.id, email: user.email, role: user.role };
    }
}