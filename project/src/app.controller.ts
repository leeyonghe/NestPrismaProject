import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  @Render('view.ejs')
  async getHello(): Promise<object> {    
    try {
      
      // [STEP1]
      // this.userService.createUser({email : 'test@gmail.com', name: 'test' })

      // [STEP2]
      const user = await this.userService.user({email : 'test@gmail.com'})
      console.log(JSON.stringify(user))
      return this.appService.getHello(user);

    } catch (error) {      
      console.log(error)
      return { name: '', 'email': ''};
    }
    
  }

}
