import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { jwtConstants } from "../constants";


@Injectable()
export class JwtStategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration:false,
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload: any){
    return {
      userId: payload.id, username: payload.username, email: payload.email, role: payload.role
    }
  }
}
