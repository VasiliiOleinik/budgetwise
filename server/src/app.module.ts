import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GoalsModule } from './goals/goals.module';

@Module({
  imports: [UsersModule, GoalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
