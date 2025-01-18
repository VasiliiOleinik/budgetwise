import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GoalsModule } from './goals/goals.module';
import { AuthModule } from './auth/auth.module';
import { IntegrationsModule } from './integrations/integration.module';
import { ConfigModule } from '@nestjs/config';
import { BudgetsModule } from './budgets/budgets.module';
import { HttpModule } from '@nestjs/axios';
import { CryptoApiModule } from './crypto-api/crypto-api.module';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot(process.env.MONGO_URI), 
    AuthModule,
    UsersModule,
    GoalsModule,
    BudgetsModule,
    IntegrationsModule,
    CryptoApiModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
