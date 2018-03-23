import {Pipe, PipeTransform } from '@angular/core';  

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform { 
    /*
    transform(value:any, arg?:any){
        if(!value) 
        return null; 
        return value.substr(0,30) + ".....";
        }
     */
    
        transform(value:string, limit?:number){
        if(!value) 
        return null;  
        let actualLimit = (limit) ? limit :50;
        return value.substr(0,actualLimit) + ".....";
        }

}