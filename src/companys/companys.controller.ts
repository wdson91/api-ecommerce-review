import { Controller } from '@nestjs/common';
import { CompanysService } from './repositories/implementations/companys.service';

@Controller('companys')
export class CompanysController {
  constructor(private readonly companysService: CompanysService) { }
}
