import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { plainToClass } from 'class-transformer'
import { AuthGuard } from 'src/common/auth.guard'
import { SchoolService } from './school.service'

/**
 * 用户个人信息 控制器
 */
@ApiTags('school')
@Controller('school')
// @UseGuards(AuthGuard)
export class schoolController {
    constructor(private readonly SchoolService: SchoolService) { }


    /**
     * 获取学校列表
     */

    @Get('/list')
    async getSchoolList(): Promise<any> {
        const result = await this.SchoolService.getSchoolList()
        return result
    }

}