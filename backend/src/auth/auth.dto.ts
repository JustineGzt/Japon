import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Adresse e-mail invalide' })
  email: string;

  @IsString()
  @MinLength(8, {
    message: 'Le mot de passe doit contenir au moins 8 caractères',
  })
  @MaxLength(72)
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Le prénom est requis' })
  @MaxLength(50)
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Le nom est requis' })
  @MaxLength(50)
  lastName: string;
}

export class LoginDto {
  @IsEmail({}, { message: 'Adresse e-mail invalide' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Le mot de passe est requis' })
  password: string;
}
