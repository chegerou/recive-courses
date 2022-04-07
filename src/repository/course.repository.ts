import { DeleteResult } from "typeorm";
import ICourse from "../interface/course.interface";
import Database from "../models";
import Course from "../models/course.model";


export default class CourseRepository {
    private repository = Database.connection.getRepository(Course);

    constructor(){ }

    public store = async(data:ICourse): Promise<ICourse> => this.repository.save(data);

    public list = async():Promise<ICourse[]> => this.repository.find();
    
    public remove= async(id:number): Promise<DeleteResult> => this.repository.delete(id);
}