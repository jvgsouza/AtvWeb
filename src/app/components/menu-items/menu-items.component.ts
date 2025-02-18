import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
})
export class MenuItemsComponent {
  @Output() toggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onToggle() {
    this.toggle.emit();
  }

  onClick() {}
}
