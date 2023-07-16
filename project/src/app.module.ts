import { Global, Module } from "@nestjs/common"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserService } from "./user.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, UserService, AppService],
})
export class AppModule {}