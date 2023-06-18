import { CreateCompanyDto } from '../dto/create-Company.dto';
import { UpdateCompanyDto } from '../dto/update-Company.dto';
import { Company } from '../entities/Company.entity';

export interface ICompanysService {
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    list(): Promise<Company[]>;
    findById(id: string): Promise<Company>;
    findByName(name: string): Promise<Company>;
    updateById(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
    deleteById(id: string): Promise<any>;
}
