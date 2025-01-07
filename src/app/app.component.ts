import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonicModule, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Calculo de multiplos';
}
