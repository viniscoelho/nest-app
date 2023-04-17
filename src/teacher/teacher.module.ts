import { Module } from '@nestjs/common';
import { TeacherController } from '../teacher/teacher.controller'
import { StudentTeacherController } from '../teacher/student.controller'
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentTeacherService } from 'src/teacher/student.service';

@Module({
  imports: [],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService, StudentTeacherService]
})
export class TeacherModule {}
