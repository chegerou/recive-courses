import {Router} from "express";
import CourseRoutes from "./routers/course.routes";

export default class Routers {
    private router: Router;

   constructor(){
    this.router = Router();
   }

   public init(): Router{
    this.router.use(new CourseRoutes().routers());
    return this.router;
   }
}