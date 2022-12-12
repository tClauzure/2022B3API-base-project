import { IsNotEmpty,MinLength,IsEmail } from "class-validator";

export class UsersDto {
  @IsNotEmpty()
  @MinLength(3)
  username!:string;
  @MinLength(8)
  password!: string;
  @IsEmail()
  email!: string;
  role?: 'Employee' | 'Admin' | 'ProjectManager';
}

export class LogUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username!:string;
  @MinLength(8)
  password!: string;
}
