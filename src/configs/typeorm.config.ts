import { DataSource } from 'typeorm';
import { MYSQL_CONFIG } from './constant.config';
import { RoleEntity } from '../api/role/entities/role.entity';
import { UserEntity } from '../api/user/entities/user.entity';
import { SchoolEntity } from '../api/school/entities/school.entity';
import { ClassEntity } from '../api/class/entities/class.entity';
import { TeacherEntity } from '../api/teacher/entities/teacher.entity';
import { SubjectEntity } from '../api/subject/entities/subject.entity';
import { StudentEntity } from '../api/student/entities/student.entity';
import { AttendanceEntity } from '../api/attendance/entities/attendance.entity';
import { TimeTableEntity } from '../api/time-table/entities/time-table.entity';
import { TeacherSubjectEntity } from '../api/teacher-subject/entities/teacher-subject.entity';
import { DayTimeTableEntity } from '../api/daytime-table/entities/daytime-table.entity';
import { SlotOfDayEntity } from '../api/slot-of-day/entities/slot-of-day.entity';
import { FoodMenuEntity } from '../api/food-menu/entities/food-menu.entity';
import { DishEntity } from '../api/dish/entities/dish.entity';
import { DishFoodmenuEntity } from '../api/dish-foodmenu/entities/dish-foodmenu.entity';
import { TeacherClassEntity } from '../api/teacher-class/entities/teacher-class.entity';
import { ParentEntity } from '../api/parent/entities/parent.entity';
import { StudentClassEntity } from '../api/student-class/entities/student-class.entity';
import { NotificationEntity } from '../api/notification/entities/notification.entity';
import { FeeTypeEntity } from '../api/fee-type/entities/fee-type.entity';
import { StudentInvoiceEntity } from '../api/student-invoice/entities/student-invoice.entity';
import { NotificationInvoiceEntity } from '../api/notification-invoice/entities/notification-invoice.entity';
import { FeedbackEntity } from '../api/feedback/entities/feedback.entity';
import { AbsenceRequestEntity } from '../api/absence-request/entities/absence-request.entity';
import { ClassNoteEntity } from '../api/class-note/entities/class-note.entity';
import { StudentCommentEntity } from '../api/student-comment/entities/student-comment.entity';
import { ScoreEntity } from '../api/score/entities/score.entity';
import { SubjectClassEntity } from '../api/subject-class/entities/subject-class.entity';
import { TeacherSubjectClassEntity } from '../api/teacher-subject-class/entities/teacher-subject-class.entity';

import { CreateRole1670913900804 } from '../../migrations/1670913900804-CreateRole';
import { CreateUser1670914133128 } from '../../migrations/1670914133128-CreateUser';
import { CreateSchool1670921836163 } from '../../migrations/1670921836163-CreateSchool';
import { CreateClass1670923873842 } from '../../migrations/1670923873842-CreateClass';
import { CreateTeacher1670924294845 } from '../../migrations/1670924294845-CreateTeacher';
import { CreateSubject1670924985040 } from '../../migrations/1670924985040-CreateSubject';
import { CreateTeacherSubject1670925787237 } from '../../migrations/1670925787237-CreateTeacherSubject';
import { CreateAttendance1670984330378 } from '../../migrations/1670984330378-CreateAttendance';
import { CreateTimeTable1670985157027 } from '../../migrations/1670985157027-CreateTimeTable';
import { CreateDayTimeTable1670986390470 } from '../../migrations/1670986390470-CreateDayTimeTable';
import { CreateSlotOfDay1671418299016 } from '../../migrations/1671418299016-CreateSlotOfDay';
import { CreateFoodMenu1671419680972 } from '../../migrations/1671419680972-CreateFoodMenu';
import { CreateDish1671420045111 } from '../../migrations/1671420045111-CreateDish';
import { CreateDishFoodmenu1671422705084 } from '../../migrations/1671422705084-CreateDishFoodmenu';
import { CreateTeacherClass1671444052353 } from '../../migrations/1671444052353-CreateTeacherClass';
import { CreateParent1671523172299 } from '../../migrations/1671523172299-CreateParent';
import { CreateStudentClass1671523615840 } from '../../migrations/1671523615840-CreateStudentClass';
import { CreateNotification1671524535532 } from '../../migrations/1671524535532-CreateNotification';
import { CreateFeeType1671529695074 } from '../../migrations/1671529695074-CreateFeeType';
import { CreateStudentInvoice1671530116827 } from '../../migrations/1671530116827-CreateStudentInvoice';
import { CreateNotificationInvoice1671590632834 } from '../../migrations/1671590632834-CreateNotificationInvoice';
import { CreateFeedback1671591877981 } from '../../migrations/1671591877981-CreateFeedback';
import { CreateAbsenceRequest1671594705011 } from '../../migrations/1671594705011-CreateAbsenceRequest';
import { CreateClassNote1671611074166 } from '../../migrations/1671611074166-CreateClassNote';
import { CreateStudentComment1671611387148 } from '../../migrations/1671611387148-CreateStudentComment';
import { CreateScore1671614292073 } from '../../migrations/1671614292073-CreateScore';
import { CreateSubjectClass1671614879404 } from '../../migrations/1671614879404-CreateSubjectClass';
import { CreateTeacherSubjectClass1671615253669 } from '../../migrations/1671615253669-CreateTeacherSubjectClass';
import { UpdateFeeTeacherStudent1671695429090 } from '../../migrations/1671695429090-UpdateFeeTeacherStudent';
import { UpdateParentSchool1672039411290 } from '../../migrations/1672039411290-UpdateParentSchool';
import { UpdateSchool1672040338014 } from '../../migrations/1672040338014-UpdateSchool';
import { UpdateStudentClass1672299126570 } from '../../migrations/1672299126570-UpdateStudentClass';
import { UpdateNotificationInvoice1672718655041 } from '../../migrations/1672718655041-UpdateNotificationInvoice';
import { UpdateFeedback1672885158393 } from '../../migrations/1672885158393-UpdateFeedback';
import { CreateStudent1670926589405 } from '../../migrations/1670926589405-CreateStudent';

export default new DataSource({
  type: 'mysql',
  host: MYSQL_CONFIG.host,
  port: 3306,
  username: MYSQL_CONFIG.username,
  password: MYSQL_CONFIG.password,
  database: MYSQL_CONFIG.database,
  entities: [
    RoleEntity,
    UserEntity,
    SchoolEntity,
    ClassEntity,
    TeacherEntity,
    SubjectEntity,
    TeacherSubjectEntity,
    StudentEntity,
    AttendanceEntity,
    TimeTableEntity,
    DayTimeTableEntity,
    SlotOfDayEntity,
    FoodMenuEntity,
    DishEntity,
    DishFoodmenuEntity,
    TeacherClassEntity,
    ParentEntity,
    StudentClassEntity,
    NotificationEntity,
    FeeTypeEntity,
    StudentInvoiceEntity,
    NotificationInvoiceEntity,
    FeedbackEntity,
    AbsenceRequestEntity,
    ClassNoteEntity,
    StudentCommentEntity,
    ScoreEntity,
    SubjectClassEntity,
    TeacherSubjectClassEntity,
  ],
  migrations: [
    CreateRole1670913900804,
    CreateUser1670914133128,
    CreateSchool1670921836163,
    CreateClass1670923873842,
    CreateTeacher1670924294845,
    CreateSubject1670924985040,
    CreateTeacherSubject1670925787237,
    CreateStudent1670926589405,
    CreateAttendance1670984330378,
    CreateTimeTable1670985157027,
    CreateDayTimeTable1670986390470,
    CreateSlotOfDay1671418299016,
    CreateFoodMenu1671419680972,
    CreateDish1671420045111,
    CreateDishFoodmenu1671422705084,
    CreateTeacherClass1671444052353,
    CreateParent1671523172299,
    CreateStudentClass1671523615840,
    CreateNotification1671524535532,
    CreateFeeType1671529695074,
    CreateStudentInvoice1671530116827,
    CreateNotificationInvoice1671590632834,
    CreateFeedback1671591877981,
    CreateAbsenceRequest1671594705011,
    CreateClassNote1671611074166,
    CreateStudentComment1671611387148,
    CreateScore1671614292073,
    CreateSubjectClass1671614879404,
    CreateTeacherSubjectClass1671615253669,
    UpdateFeeTeacherStudent1671695429090,
    UpdateParentSchool1672039411290,
    UpdateSchool1672040338014,
    UpdateStudentClass1672299126570,
    UpdateNotificationInvoice1672718655041,
    UpdateFeedback1672885158393,
  ],
  synchronize: false,
});
