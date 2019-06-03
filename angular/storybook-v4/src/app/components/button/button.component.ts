import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  icons = {
    'chevron-right': 'chevronRightIcon'
  };

  @Input()
  text: string = '';

  @Input()
  disabled: boolean = false;

  @Input()
  icon: 'none' | 'chevron-right' = 'none';

  @Output()
  didClick = new EventEmitter<void>();

  action() {
    this.didClick.emit();
  }
}