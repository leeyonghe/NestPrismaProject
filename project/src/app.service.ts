import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, user } from '@prisma/client';

@Injectable()
export class AppService {

  getHello(u : user): object{
    return { name: u.name, 'email': u.email};
  }

}
