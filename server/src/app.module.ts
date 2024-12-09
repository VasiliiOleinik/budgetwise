import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GoalsModule } from './goals/goals.module';
import { AuthModule } from './auth/auth.module';
import { IntegrationsModule } from './integrations/integration.module';
import { ConfigModule } from '@nestjs/config';
import { BudgetsModule } from './budgets/budgets.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI), 
    AuthModule,
    UsersModule,
    GoalsModule,
    BudgetsModule,
    IntegrationsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
