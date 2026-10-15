import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../users/user.schema';
import { LoginDto, RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    if (await this.usersService.findByEmail(dto.email)) {
      throw new ConflictException(
        'Un compte existe déjà avec cette adresse e-mail',
      );
    }
    const user = await this.usersService.create({
      email: dto.email,
      passwordHash: await bcrypt.hash(dto.password, 10),
      firstName: dto.firstName,
      lastName: dto.lastName,
    });
    return this.buildSession(user);
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException('E-mail ou mot de passe incorrect');
    }
    return this.buildSession(user);
  }

  private async buildSession(user: UserDocument) {
    const token = await this.jwtService.signAsync({ sub: user.id });
    return { token, user: this.usersService.toPublic(user) };
  }
}
