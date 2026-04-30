import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonSelect, IonSelectOption, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [ReactiveFormsModule, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle,
    IonContent, IonSelect, IonSelectOption, IonRow, IonCol, IonGrid],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public ionselectform = new FormGroup({
    birthmonth: new FormControl<number | null>(null),
  });
  public months = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' }
  ];
  public customActionSheetOptions = {
    cssClass: 'my-custom-class',
  };

  constructor() {}

  get selectedMonthName(): string {
    const selectedId = this.ionselectform.get('birthmonth')?.value;
    return this.months.find((month) => month.id === selectedId)?.name ?? '';
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
