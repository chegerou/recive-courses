import ICourse from "../interface/course.interface";
import CourseRepository from "../repository/course.repository";
import DateUtils from "../utils/date.utils";

export default class CourseService{
    private repository: CourseRepository;

    constructor(){
        this.repository = new CourseRepository();
    }

    public store = async(data: ICourse): Promise<ICourse> => this.repository.store(data);
    public list = async(): Promise<ICourse[]> => this.repository.list(); 

    public removeCourses= async(): Promise<void> => {
        const courses = await this.repository.list();

        const promise = courses.map(async course =>{
            let courseDate = DateUtils.stringToDate(course.date_time.toLocaleString());
            let currentDate = DateUtils.stringToDate(new Date().toLocaleString());
            if(currentDate > courseDate){
                await this.repository.remove(course.id);
            }
        });
        
        await Promise.all(promise);
    }
}