import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  //@HostListener('focus') onFocus(){
  //  console.log('On Focus');
  //} 
     @Input('appInputFormat') format;

  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;  
    if(this.format == 'lowercase')
    this.el.nativeElement.value = value.toLowerCase(); 
    else 
    this.el.nativeElement.value = value.toLocaleUpperCase(); 

  }
 
}
