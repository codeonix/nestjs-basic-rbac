import { Role } from './role.enum';
import { SetMetadata } from '@nestjs/common';

// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
//to make it more secure :
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
