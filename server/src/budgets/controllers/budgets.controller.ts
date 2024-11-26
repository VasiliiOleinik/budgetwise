import { Controller, Get, Post, Req, Res, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Response } from 'express';

@Controller('budgets')
export class BudgetsController {

    constructor(private budgetsService: any) {}

    @Get()
    getUsers() {
        return this.budgetsService.fetchBudget()
    }
}