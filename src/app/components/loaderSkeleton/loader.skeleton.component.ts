import { Component, Input } from '@angular/core';
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
} from '@ionic/angular/standalone';

@Component({
  selector: 'skeleton-loading',
  templateUrl: './loader.skeleton.component.html',
  styleUrl: './loader.skeleton.component.css',
  standalone: true,
  imports: [
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSkeletonText,
    IonThumbnail,
  ],
})
export class skeletonComponent {
  @Input() skeletonLoading: boolean = true;
}
