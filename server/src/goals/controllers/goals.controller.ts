import { Controller, Get } from '@nestjs/common';
import { GoalsService } from '../services/goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Get()
  getGoals() {
    return this.goalsService.fetchGoals();
  }
}