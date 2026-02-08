import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-simple',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; background: lightblue; margin: 20px;">
      <h1>TEST COMPONENT LOADED!</h1>
      <p>If you see this, Angular is working!</p>
      <button (click)="onClick()">Click me</button>
      <p *ngIf="showMessage">Button was clicked!</p>
    </div>
  `,
  styles: []
})
export class TestSimpleComponent {
  showMessage = false;

  onClick() {
    this.showMessage = true;
    console.log('Test component button clicked!');
  }
}
