import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user) {
        throw new ForbiddenException('No user found in request');
        }

        if (user.role !== 'ADMIN') {
        throw new ForbiddenException('Only admins are allowed to perform this action');
        }

        return true;
    }
}
