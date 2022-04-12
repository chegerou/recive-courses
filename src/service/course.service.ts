import ICourse from "../interface/course.interface";
import CourseRepository from "../repository/course.repository";
import DateUtils from "../utils/date.utils";
import ErrorUtils from "../utils/error.utils";
import UrlUtils from "../utils/url.utils";

export default class CourseService{
    private repository: CourseRepository;

    constructor(){
        this.repository = new CourseRepository();
    }

    public store = async(data: ICourse): Promise<ICourse | ErrorUtils> => {
        try{
            if(!UrlUtils.validUrl(data.url_link)){
                throw new ErrorUtils('Invalid Url!').showError();
            }
    
            if(data.description_course.length > 254 || data.description_course.length <= 10) {
                throw new ErrorUtils('Invalid Description').showError();
            }
            
            data.date_time = new Date();
            return this.repository.store(data);
        } catch (err) {
            return err;
        }

    }

    public list = async(): Promise<ICourse[]> => this.repository.list(); 

    public removeCourses= async(): Promise<void> => {
        const courses = await this.repository.list();

        const promise = courses.map(async course =>{
            let isSaturday = new Date().getDay() === 6 ? true: false;
            if(isSaturday){
                await this.repository.remove(course.id);
            }
        });
        
        await Promise.all(promise);
    }
}