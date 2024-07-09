import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm'
import { AbstractEntity } from '../../common/abstract.entity'
import { Class } from '../../school/class/class.entity'
/**
 * 用户信息表
 *
 *
 * ### 说明
 *
 * ```markdown
 * 1. 当前表不使用新的自增 ID 逻辑，而是和用户表（`user`）一一对应，可以理解为用户表的垂直拆分表。
 */
@Entity()
export class UserInfo extends AbstractEntity {
  /** 用户昵称 */
  @Column({
    name: 'nick_name',
    type: 'varchar',
    length: 32,
    default: '',
    comment: '用户昵称',
  })
  nickName = ''

  /** 头像的 URL */
  @Column({
    name: 'avatar_url',
    type: 'varchar',
    length: 256,
    default: '',
    comment: '头像的 URL',
  })
  avatarUrl = ''

  /** 性别，0-未知，1-男性，2-女性 */
  @Column({
    type: 'tinyint',
    default: 0,
    comment: '性别，0-未知，1-男性，2-女性',
  })
  gender = 0

  /** 用户所在国家 */
  @Column({
    type: 'varchar',
    length: 64,
    default: '',
    comment: '用户所在国家',
  })
  country = ''

  /** 用户所在省份 */
  @Column({
    type: 'varchar',
    length: 64,
    default: '',
    comment: '用户所在省份',
  })
  province = ''

  /** 用户所在城市 */
  @Column({
    type: 'varchar',
    length: 64,
    default: '',
    comment: '用户所在城市',
  })
  city = ''

  /** 用户学校*/
  @Column({
    type: 'varchar',
    length: 64,
    default: '',
    comment: '用户所在城市',
  })
  school = ''
  /** 用户角色，0-学生，1-老师 */
  @Column({
    type: 'tinyint',
    default: 0,
    comment: '用户角色，0-学生，1-老师',
  })
  role = 0
  /** 用户所在班级（学生） */
  @ManyToOne(() => Class, (classEntity) => classEntity.students)
  class: Class
  /** 用户管理的班级（老师） */
  @ManyToMany(() => Class)
  @JoinTable({
    name: 'teacher_classes',
    joinColumn: {
      name: 'teacher_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'class_id',
      referencedColumnName: 'id',
    },
  })
  managedClasses: Class[]
}
