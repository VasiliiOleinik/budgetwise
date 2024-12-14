import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { Response } from 'express'
import { AuthGuard } from 'src/auth/auth.guard'
import { BudgetsService } from '../services/budgets.service'

@UseGuards(AuthGuard)
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Get('/all-crypto-budget')
  async getAllCryptoBudget(@Req() req: any, @Res() response: Response) {
    const userId = req.user.userId
    const budget = await this.budgetsService.getAllCryptBudget(userId)
    response.send({ budget }).status(200)
  }

  @Post('/add-budget')
  async addBudget(@Req() req: any, @Res() response: Response) {
    const userId = req.user.userId
    const budget = await this.budgetsService.addBudget(userId, req.body)
    response.send({ budget }).status(200)
  }

  @Get('/get-budgets')
  async getBudgets(@Req() req: any, @Res() response: Response) {
    const userId = req.user.userId
    const budget = await this.budgetsService.getBudgets(userId, req.body)
    response.send({ budget }).status(200)
  }

  @Get('/get-budget/:id')
  async getBudgetById(
    @Req() req: any,
    @Res() response: Response,
    @Param('id') budgetId: string,
  ) {
    const userId = req.user.userId
    const budget = await this.budgetsService.getBudgetById(userId, budgetId)

    if (!budget) {
      return response.status(404).send({ message: 'Budget not found' })
    }

    response.send({ budget }).status(200)
  }

  @Put('/edit-budget/:id')
  async editBudget(
    @Req() req: any,
    @Res() response: Response,
    @Param('id') budgetId: string,
  ) {
    const userId = req.user.userId
    const budget = req.body

    const updatedBudget = await this.budgetsService.editBudget({
      userId,
      budgetId,
      budget,
    })

    if (!updatedBudget) {
      return response.status(404).send({ message: 'Budget not found' })
    }

    response.status(200).send({ budget: updatedBudget })
  }

  @Delete('/delete-budget/:id')
  async deleteBudget(
    @Req() req: any,
    @Res() response: Response,
    @Param('id') budgetId: string,
  ) {
    const userId = req.user.userId
    const budget = await this.budgetsService.deleteBudget({
      userId,
      budgetId,
    })

    response.send({ budget }).status(200)
  }
}
