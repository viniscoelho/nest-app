import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/students.dto';
import { UpdateStudentTeachertDto } from './dto/teachers.dto';

@Injectable()
export class StudentTeacherService {
    private students = students
    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
        return this.students.filter(student => {
            return student.teacher === teacherId});
    }

    updateStudentByTeacherId(payload: UpdateStudentTeachertDto, teacherId: string, studentId: string) {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId && student.teacher === teacherId) {
                updatedStudent = {
                    id: studentId,
                    ...payload
                }
                return updatedStudent;
            } else return student;
        })
        this.students = updatedStudentList;
    }
}
