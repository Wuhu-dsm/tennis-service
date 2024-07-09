import { AbstractEntity } from 'src/common/abstract.entity'
import { Column, Entity } from 'typeorm'

/**
 * 用户账户表
 *
 *
 * ### 说明
 *
 * ```markdown
 * 1. 仅存放与账户权限相关的字段。
 * 2. 信息类字段放置于用户信息表中。
 * ```
 */
@Entity({ name: 'school' })
export class SchoolEnitity extends AbstractEntity {
  /**
   * 学校名字
   *
   */
  @Column({
    name: 'school_name',
    type: 'varchar',
    comment: '学校名字',
  })
  school_name: string


}
