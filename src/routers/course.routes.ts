import { Router } from "express";
import CourseController from "../controllers/course.controller";


export default class CourseRoutes {
    private controller: CourseController;

    constructor() {
        this.controller = new CourseController();
    }

    public routers():Router{
        const router= Router();
        router.use('/course', router);
        router.post('/',this.controller.store);
        router.get('/', this.controller.list);
        return router;
    }

}