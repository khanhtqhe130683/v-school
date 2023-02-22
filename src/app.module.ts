import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './api/role/role.module';
import { TimeTableModule } from './api/time-table/time-table.module';
import { AttendanceModule } from './api/attendance/attendance.module';
import { SchoolModule } from './api/school/school.module';
import { ClassModule } from './api/class/class.module';
import { StudentModule } from './api/student/student.module';
import { TeacherSubjectModule } from './api/teacher-subject/teacher-subject.module';
import { SubjectModule } from './api/subject/subject.module';
import { TeacherModule } from './api/teacher/teacher.module';
import { UserModule } from './api/user/user.module';
import { DayTimeTableModule } from './api/daytime-table/daytime-table.module';
import { SlotOfDayModule } from './api/slot-of-day/slot-of-day.module';
import { FoodMenuModule } from './api/food-menu/food-menu.module';
import { DishModule } from './api/dish/dish.module';
import { DishFoodmenuModule } from './api/dish-foodmenu/dish-foodmenu.module';
import { TeacherClassModule } from './api/teacher-class/teacher-class.module';
import { ParentModule } from './api/parent/parent.module';
import { StudentClassModule } from './api/student-class/student-class.module';
import { NotificationModule } from './api/notification/notification.module';
import { NotificationInvoiceModule } from './api/notification-invoice/notification-invoice.module';
import { FeeTypeModule } from './api/fee-type/fee-type.module';
import { FeedbackModule } from './api/feedback/feedback.module';
import { AbsenceRequestModule } from './api/absence-request/absence-request.module';
import { ClassNoteModule } from './api/class-note/class-note.module';
import { StudentCommentModule } from './api/student-comment/student-comment.module';
import { StudentInvoiceModule } from './api/student-invoice/student-invoice.module';
import { ScoreModule } from './api/score/score.module';
import { SubjectClassModule } from './api/subject-class/subject-class.module';
import { TeacherSubjectClassModule } from './api/teacher-subject-class/teacher-subject-class.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    RoleModule,
    UserModule,
    TeacherModule,
    SubjectModule,
    TeacherSubjectModule,
    StudentModule,
    ClassModule,
    SchoolModule,
    AttendanceModule,
    TimeTableModule,
    DayTimeTableModule,
    SlotOfDayModule,
    FoodMenuModule,
    DishModule,
    DishFoodmenuModule,
    TeacherClassModule,
    ParentModule,
    StudentClassModule,
    NotificationModule,
    NotificationInvoiceModule,
    FeeTypeModule,
    FeedbackModule,
    AbsenceRequestModule,
    ClassNoteModule,
    StudentCommentModule,
    StudentInvoiceModule,
    ScoreModule,
    SubjectClassModule,
    TeacherSubjectClassModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
