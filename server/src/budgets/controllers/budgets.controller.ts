import { Controller, Get, Post, Req, Res, UseGuards, } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { BudgetsService } from '../services/budgets.service';
import {  UserDocument } from 'src/users/schemas/user.schema';

@UseGuards(AuthGuard)
@Controller('budgets')
export class BudgetsController {

    constructor(private readonly budgetsService: BudgetsService) {}

    @Get('/all-crypto-budget')
    async getAllCryptoBudget(@Req() req: any, @Res() response: Response) {
        const userId = req.user.userId;
        const budget = await this.budgetsService.getAllCryptBudget(userId);
        response.send({budget}).status(200);
    }

    @Post('/add-budget')
    async addBudget(@Req() req: any, @Res() response: Response) {
        const userId = req.user.userId;
        const budget = await this.budgetsService.addBudget(userId, req.body);
        response.send({budget}).status(200);
    }
}