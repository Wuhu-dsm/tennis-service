import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { plainToClass } from 'class-transformer'
import { AuthGuard } from 'src/common/auth.guard'
import { SchoolService } from './school.service'
import { success } from 'src/common/util'

/**
 * 用户个人信息 控制器
 */
@ApiTags('school')
@Controller('school')
// @UseGuards(AuthGuard)
export class schoolController {
  constructor (private readonly SchoolService: SchoolService) {}
  /**
   * 获取学校列表
   */
  @Get('/list')
  async getSchoolList (): Promise<any> {
    const result = await this.SchoolService.getSchoolList()
    return success(result)
  }
  /**
   * 创建学校
   */
  @Post('/create')
  async createClass (@Body() body: any): Promise<any> {
    console.log('body', body)

    const result = await this.SchoolService.createSchool(body)
    return result
  }
}
