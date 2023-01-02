import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#f1948A')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '2rem')

  }

}
