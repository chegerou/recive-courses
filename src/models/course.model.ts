import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import ICourse from "../interface/course.interface"

@Entity('courses')
export default class Course implements ICourse{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: '255'})
    url_link: string;

    @Column({length: '255'})
    description_course: string;
}