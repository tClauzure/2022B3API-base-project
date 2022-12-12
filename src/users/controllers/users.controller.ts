import { Controller, Post, Body, Redirect, UseGuards, Req, UsePipes, ValidationPipe, HttpException, HttpStatus, ForbiddenException, UnauthorizedException, BadRequestException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { get } from "http";
import { use } from "passport";
//import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { LocalAuthGuard } from "../../auth/guards/local-auth.guard";
import { AuthService } from "../../auth/services/auth.service";
import { UsersDto, LogUserDto } from "../dto/users.dto";
import { UsersService } from "../services/users.service";


@Controller('users')
export class UsersController{
  constructor(private userService: UsersService,
    private authService: AuthService){}

  @Post('auth/sign-up')
  @UsePipes(ValidationPipe)
  async create(@Body() usersDto: UsersDto){
    return this.userService.Create(usersDto)    
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @UsePipes(ValidationPipe)
  async login(@Body() body: LogUserDto, @Req() req){
    
    return this.authService.login(req.user)


  }

 /* @UseGuards(JwtAuthGuard)
  @get('me')
  getMe(@Req() req){
    return req.user;
  }*/
}

