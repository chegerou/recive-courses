import ICourse from "../interface/course.interface";
import CourseRepository from "../repository/course.repository";

export default class CourseService{
    private repository: CourseRepository;

    constructor(){
        this.repository = new CourseRepository();
    }

    public store = async(data: ICourse): Promise<ICourse> => this.repository.store(data);
    public list = async(): Promise<ICourse[]> => this.repository.list();
}