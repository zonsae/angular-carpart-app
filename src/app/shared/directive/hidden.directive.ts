/**
 * Created by vega on 2017-03-29.
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Directive decorator
@Directive({ selector: '[myHidden]' })
// Directive class
export class HiddenDirective {
    constructor(el: ElementRef, renderer: Renderer2) {
        // Use renderer to render the element with styles
        renderer.setStyle(el.nativeElement, 'display', 'none');
    }

}
