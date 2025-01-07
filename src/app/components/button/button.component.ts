import { Component, Input } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'riple-rectangle-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [IonButton],
})
export class ButtonIcon {
  @Input() buttonText: string = '';
}
