import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SchoolEnitity } from './school.entity'

@Injectable()
export class SchoolService {

  private readonly logger = new Logger(SchoolService.name)

  constructor(
    @InjectRepository(SchoolEnitity)
    private readonly SchoolRepository: Repository<SchoolEnitity>,
  ) { }

  async getSchoolList(): Promise<SchoolEnitity[]> {
    const schoolList = await this.SchoolRepository.find()

    return schoolList
  }

}