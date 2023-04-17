import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { CreateStudentDto, FindStudentResponseDto, UpdateStudentDto } from './dto/students.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {

    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(): FindStudentResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentById(
        // @Param() params: {studentId: string}
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): FindStudentResponseDto {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        // @Body('name') name
        @Body() body: CreateStudentDto
    ) {
        this.studentService.createStudent(body);
        // return `student created: ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDto
    ) {
        this.studentService.updateStudent(body, studentId);
        // return `Update ${studentId} with ${JSON.stringify(body)}`
    }
}