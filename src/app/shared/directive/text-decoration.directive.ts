/**
 * Created by vega on 2017-03-29.
 */
import {Directive, HostListener, Renderer2, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[myTextDecoration]'
})
export class TextDecorationDirective{

    @Input('myTextDecoration') prop;   /*directive 에서 입력 받은 값이 들어온다.*/

    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ){}
    // Event listeners for element hosting
    // the directive
    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }
    // Event method to be called on mouse enter and on mouse leave
    hover(shouldUnderline: boolean) {
        if (shouldUnderline) {
            // Mouse enter   'underline'
            this.renderer.setStyle(this.el.nativeElement, 'text-decoration', this.prop);
        } else {
            // Mouse leave
            this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}
