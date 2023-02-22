import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ATTENDANCE_CONST } from '../attendance.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { StudentEntity } from '../../student/entities/student.entity';
@Entity({ name: ATTENDANCE_CONST.MODEL_NAME })
export class AttendanceEntity extends BaseEntity {
  @Column({ length: 255 })
  date: string;

  @Column({ default: false })
  is_attendance: boolean;

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id' })
  student: StudentEntity;
}
