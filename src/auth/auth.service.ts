import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
        constructor(private UsersService:UsersService){}

        async validateUser(username: string, password: string): Promise<any>{
            const user = await this.UsersService.findOne(username);

            if(user && user.password===password){
               console.log("1")
                     return user;
            }

            return null;
        }

}
