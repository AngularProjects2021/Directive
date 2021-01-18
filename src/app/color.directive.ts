import { Directive , ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
 
  //get a reference of element there you written directive name 'appColor'
  constructor( private el:ElementRef) {
    //we can set propery directly
    el.nativeElement.style.color = 'red'
   }

   //we can set property using set 
  @Input() set  bacgroundColor(color:string){
      this.el.nativeElement.style.backgroundColor = color;
    }

}
