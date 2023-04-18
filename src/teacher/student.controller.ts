import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UpdateStudentTeachertDto } from './dto/teachers.dto';
import { FindStudentResponseDto } from 'src/student/dto/students.dto';
import { StudentTeacherService } from './student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly teacherStudentService: StudentTeacherService) {}

  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.teacherStudentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentTeachertDto,
  ) {
    this.teacherStudentService.updateStudentByTeacherId(
      body,
      teacherId,
      studentId,
    );
  }
}
