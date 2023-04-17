import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from '../student/student.controller'
import { StudentService } from '../student/student.service'
import { ValidStudentMiddleware } from 'src/common/middleware/validStudent.middleware';

@Module({
    imports: [],
    controllers: [StudentController],
    providers: [StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.GET
        });
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.PUT
        })
    }
}
