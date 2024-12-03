import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GoalsModule } from './goals/goals.module';
import { AuthModule } from './auth/auth.module';
import { IntegrationsModule } from './integrations/integration.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI), 
    AuthModule,
    UsersModule,
    GoalsModule,
    IntegrationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
