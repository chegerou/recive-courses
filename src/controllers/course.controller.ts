
import { Request, Response } from "express";
import ICourse from "../interface/course.interface";
import CourseService from "../service/course.service";


export default class CourseController{
    private service: CourseService;

    constructor(){
        this.service = new CourseService();
    }

    public store = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.store((req.body as unknown) as ICourse);
        return res.send(result);
    }

    public list = async(req:Request, res:Response): Promise<Response> =>{
        await this.service.removeCourses();
        const result = await this.service.list();
        return res.send(result);
    }
}