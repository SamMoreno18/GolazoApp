import { Controller, Get } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get('live')
  getLiveMatches() {
    return this.resultsService.getLiveMatches();
  }
}
