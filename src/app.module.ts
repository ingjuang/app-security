import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://juandagomez3:Rtfb1s6y8R7gPbhZ@cluster.mwjhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
