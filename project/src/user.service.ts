import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, user } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.userWhereUniqueInput,
  ): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(): Promise<user[] | null> {    
    return this.prisma.user.findMany();
  }

  async createUser(data: Prisma.userCreateInput): Promise<user> {
    return this.prisma.user.create({
      data,
    });
  }

}
