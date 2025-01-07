import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonGrid, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule, IonText, IonGrid],
})
export class HeaderComponent {
  title = 'Cálculo de múltiplos';
}
