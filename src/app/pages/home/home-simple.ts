import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; background: #e8f5e8; margin: 20px; border-radius: 10px;">
      <h1 style="color: #2e7d32; text-align: center;">🎉 HAPPY GHUMAKKADS! 🎉</h1>
      <p style="text-align: center; font-size: 18px; margin: 20px 0;">
        Your Angular app is now working correctly!
      </p>
      <div style="text-align: center;">
        <button (click)="showMessage = !showMessage" 
                style="padding: 10px 20px; background: #4caf50; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Toggle Message
        </button>
        <div *ngIf="showMessage" style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 5px;">
          <p style="color: #856404; margin: 0;">
            ✅ Angular is working! ✅<br>
            ✅ Components render correctly! ✅<br>
            ✅ Event handling works! ✅
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class Home {
  showMessage = false;
}
