export default class ErrorUtils extends Error{
 
    constructor(message:string) {
        super(message);

        Object.setPrototypeOf(this, ErrorUtils.prototype);
    }
    
    showError(){
        return this.message;
    }
}