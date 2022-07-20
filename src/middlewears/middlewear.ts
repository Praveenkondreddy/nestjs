import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class validateToken implements NestMiddleware{
    constructor(private jwtService:JwtService){}
    use(req: Request, res: Response, next: NextFunction) {

        let jwtToken;
        const authHeader = req.headers["authorization"];
        if (authHeader !== undefined) {
          jwtToken = authHeader.split(" ")[1];
        }
        if (jwtToken === undefined) {
          res.status(401);
          res.send("Invalid JWT Token");
        } else {
          const data=this.jwtService.verifyAsync(jwtToken,{secret:"SECRET"});
          if (!data){
            throw new UnauthorizedException()
          }else{
          
            next()
          }
        }
    }
    
}