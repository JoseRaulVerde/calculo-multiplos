import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ref, onValue, push } from 'firebase/database';
import {
  IonInput,
  IonText,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { ButtonIcon } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import database from '../../config/firebaseconfig';
import { skeletonComponent } from '../../components/loaderSkeleton/loader.skeleton.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IonText,
    IonInput,
    IonContent,
    IonGrid,
    IonRow,
    ButtonIcon,
    IonCol,
    IonAlert,
    ButtonIcon,
    IonItem,
    IonLabel,
    IonList,
    CommonModule,
    IonLoading,
    skeletonComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent implements OnInit {
  inputNumber: number | null = null;

  errorOccurred: boolean = false;
  skeletonLoading: boolean = false;
  alert: boolean = false;
  loading: boolean = false;

  buttonLabel: string = 'Buscar Múltiplo';
  loadingMessage: string = 'Haciendo cálculo...';

  arrayNumbers: Array<{ number: number; value: string }> = [];
  arrayFromDatabase: Array<{ value: number; color: string }> = [];

  ngOnInit() {
    this.getNumbersFromDatabase();
  }

  // Captura el número ingresado por el usuario
  onInput(event: CustomEvent) {
    this.inputNumber = event.detail.value;
  }

  // Calcula los múltiplos para el número ingresado
  calculateMultiples(): void {
    if (!this.inputNumber || this.inputNumber <= 0) {
      this.alert = true;
    } else {
      this.loading = true;
      this.arrayNumbers = [];
      setTimeout(() => {
        for (let i = 0; i <= this.inputNumber!; i++) {
          const multiples = [3, 5, 7].filter((n) => i % n === 0 && i !== 0);
          this.handleColorsNumbers(i, multiples[0]);
        }
        this.loading = false;
      }, 1000);
    }
  }

  private handleColorsNumbers(number: number, multiply: number): void {
    let color: string = '';
    switch (multiply) {
      case 3: {
        color = 'green';
        break;
      }
      case 5: {
        color = 'blue';
        break;
      }
      case 7: {
        color = 'red';
        break;
      }
      default: {
        color = 'black';
        break;
      }
    }
    this.saveNumberToDatabase(number, color);
    this.arrayNumbers.push({ number, value: color });
  }

  getMultiplesDescription(number: number): string {
    const multiples = [];
    if (number % 3 === 0 && number !== 0) multiples.push('Múltiplo de 3');
    if (number % 5 === 0 && number !== 0) multiples.push('Múltiplo de 5');
    if (number % 7 === 0 && number !== 0) multiples.push('Múltiplo de 7');
    return multiples.length > 0 ? multiples.join(', ') : 'Sin múltiplos';
  }

  // Obtiene los números guardados en Firebase
  getNumbersFromDatabase() {
    const reference = ref(database, 'numbers');
    this.skeletonLoading = true;
    setTimeout(() => {
      onValue(
        reference,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            this.arrayFromDatabase = Object.keys(data)
              .map((key) => ({
                value: data[key].value,
                color: data[key].color,
              }))
              .reverse();
          } else {
            this.arrayFromDatabase = [];
          }
        },
        (error) => {
          console.error('Error al leer los datos:', error);
        }
      );
      this.skeletonLoading = false;
    }, 2000);
  }

  // Guarda un número en la base de datos Firebase
  saveNumberToDatabase(value: number, color: string) {
    const reference = ref(database, `numbers`);
    push(reference, { value, color })
      .then(() => {})
      .catch((error) => {
        console.error('Error al guardar el número:', error);
      });
  }
}
