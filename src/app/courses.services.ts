//Angular services are plain TS classes  
//They don't need decorator
export class CoursesService{
  getCourses(){
    return  ["Course One" , "Course Two", "Course Three"]; 
  }
}