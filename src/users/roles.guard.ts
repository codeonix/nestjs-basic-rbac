import { User } from './entities/user.entity';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './entities/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    //what is the required roles ?
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    // const { user } = context.switchToHttp().getRequest();
    const user: User = {
      name: 'Suraj',
      roles: [Role.ADMIN],
    };

    //does the current user making the request have those required roles
    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
