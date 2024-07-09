import { Column, Entity, ManyToOne, OneToMany, JoinTable, ManyToMany } from 'typeorm'
import { AbstractEntity } from '../../common/abstract.entity'
import { UserInfo } from '../../user/user-info/user-info.entity'
/**
 * 班级表
 */
@Entity()
export class Class extends AbstractEntity {
  /** 班级名称 */
  @Column({
    type: 'varchar',
    length: 64,
    default: '',
    comment: '班级名称',
  })
  name = ''

  /** 班级描述 */
  @Column({
    type: 'varchar',
    length: 256,
    default: '',
    comment: '班级描述',
  })
  description = ''

  /** 班级中的学生 */
  @OneToMany(() => UserInfo, (userInfo) => userInfo.class)
  students: UserInfo[]
}
