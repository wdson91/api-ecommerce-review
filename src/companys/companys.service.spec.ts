import { Test, TestingModule } from '@nestjs/testing';
import { CompanysService } from './repositories/implementations/companys.service';

describe('CompanysService', () => {
  let service: CompanysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanysService],
    }).compile();

    service = module.get<CompanysService>(CompanysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
