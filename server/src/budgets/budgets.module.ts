import { Module } from '@nestjs/common';
import { BudgetsController } from './controllers/budgets.controller';
import { BudgetsService } from './services/budgets.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { IntegrationsModule } from 'src/integrations/integration.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Budget, BudgetSchema } from './schemas/budget.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Budget.name, schema: BudgetSchema },
    ]),
    AuthModule,
    UsersModule,
    IntegrationsModule
  ],
  controllers: [BudgetsController],
  providers: [BudgetsService],
  exports: [BudgetsService]
})
export class BudgetsModule {}
