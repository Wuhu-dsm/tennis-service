import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SchoolEnitity } from './school.entity'
import { SchoolService } from './school.service'
import { schoolController } from './school.controller'
import { Class } from './class/class.entity'
@Module({
  imports: [TypeOrmModule.forFeature([SchoolEnitity, Class])],
  providers: [SchoolService],
  exports: [SchoolService],
  controllers: [schoolController],
})
export class schoolModule {}
