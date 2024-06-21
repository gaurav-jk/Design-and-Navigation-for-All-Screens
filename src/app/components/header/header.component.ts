import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title="";
  dropdown = false;
  @ViewChild('productbtn', { read: ElementRef }) productbtn!: ElementRef;
  constructor() { }

  ngOnInit() {}
  // hideDropdown(event: MouseEvent) {
  //   this.dropdown = true;
  // }
  hideDropdown(event: MouseEvent) { // Explicitly type the event parameter as MouseEvent
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }
}
