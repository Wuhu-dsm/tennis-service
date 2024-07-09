import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SchoolEnitity } from './school.entity'

@Injectable()
export class SchoolService {
  private readonly logger = new Logger(SchoolService.name)

  constructor (
    @InjectRepository(SchoolEnitity)
    private readonly SchoolRepository: Repository<SchoolEnitity>
  ) {}

  async getSchoolList (): Promise<SchoolEnitity[]> {
    const schoolList = await this.SchoolRepository.find()

    return schoolList
  }
  async createSchool (body: any): Promise<any> {
    // 名字不可重复
    const school = new SchoolEnitity()
    school.school_name = body.school_name
    if (await this.SchoolRepository.findOne({ school_name: body.school_name })) {
      throw new HttpException({ message: '该学校已经创建' }, HttpStatus.BAD_REQUEST)
    }
    try {
      await this.SchoolRepository.save(school)
      return { message: 'success', code: 2000 }
    } catch (error) {
      return { message: 'error' }
    }
  }
}
