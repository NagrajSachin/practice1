import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[app-dropdown]'
})
export class DropDown{
    @HostBinding('class.open') allowDrop = false;

    @HostListener('click') onclick(){
        this.allowDrop = !this.allowDrop;
    }
}