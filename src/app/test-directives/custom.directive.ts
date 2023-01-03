import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#74992e')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '1rem')
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s')
  }

  // ajout d'un hostListener pour implémenter une méthode (event handler) liée à un évènement js
  // ici, c'est une aberration puisqu'on pourrait faire du style avec :hover mais je présume qu'on peut imaginer mettre un maximum d'instructions js dans un même HostListener
  @HostListener('mouseenter') hostMouseOver(){
    this.renderer.setStyle(this.element.nativeElement, "padding", '2rem')
  }
  @HostListener('mouseout') hostMouseOut(){
    this.renderer.setStyle(this.element.nativeElement, "padding", '1rem')
  }

}
