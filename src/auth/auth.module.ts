import { Module, forwardRef } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../users/modules/users.module";
import { jwtConstants } from "./constants";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from "../users/controllers/users.controller";
import { JwtStategy } from "./strategies/jwt.strategy";

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60s'},
    }),
  ],
  providers: [AuthService, LocalStrategy,JwtStategy],
  exports:[AuthService, LocalStrategy,JwtStategy],
})
export class AuthModule{}
