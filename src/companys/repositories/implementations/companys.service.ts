
import { Injectable } from "@nestjs/common";
import mongoose, { Model } from "mongoose";

import { Company } from '../../entities/company.entity';
import { UpdateCompanyDto } from "src/companys/dto/update-company.dto";
import { CreateCompanyDto } from "src/companys/dto/create-company.dto";
import { InjectModel } from "@nestjs/mongoose";
import { ICompanysService } from '../service-companys.interface';



@Injectable()
export class CompanysService implements ICompanysService {
    constructor(
        @InjectModel(Company.name) private CompanyModel: Model<Company>,
    ) { }
    async findByName(name: string): Promise<Company> {
        return this.CompanyModel.findOne({ name });
    }
    async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
        const Company = new this.CompanyModel({
            _id: new mongoose.Types.ObjectId(),
            name: createCompanyDto.name,
            phone: createCompanyDto.phone,
            address: createCompanyDto.address,

        });

        return Company.save();
    }
    async list(): Promise<Company[]> {
        return this.CompanyModel.find();
    }
    async findById(id: string): Promise<Company> {
        return this.CompanyModel.findById({ _id: id });
    }
    async updateById(
        id: string,
        updateCompanyDto: UpdateCompanyDto,
    ): Promise<Company> {
        return this.CompanyModel.findByIdAndUpdate(
            { _id: id },
            { $set: updateCompanyDto },
            { new: true },
        );
    }
    async deleteById(id: string): Promise<any> {
        return this.CompanyModel.deleteOne({ _id: id }).exec();
    }
}
