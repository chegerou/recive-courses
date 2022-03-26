import ICourse from "../interface/course.interface";
import CourseRepository from "../repository/course.repository";
import Utils from "../utils/utils";

export default class CourseService{
    private repository: CourseRepository;

    constructor(){
        this.repository = new CourseRepository();
    }

    public store = async(data: ICourse): Promise<ICourse> => this.repository.store(data);
    public list = async(): Promise<ICourse[]> => this.repository.list(); 

    public removeCourses= async(): Promise<void> => {
        const courses = await this.repository.list();

        courses.map(async course =>{
            let courseDate = Utils.formatData(new Date(course.date_time));
            let currentDate = Utils.formatData(new Date());
            if(courseDate < currentDate){
                await this.repository.removeData(course.id);
            }
        });

    }
}