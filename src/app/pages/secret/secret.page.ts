import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

import { SecretInfoComponent } from "../../components/secret-info/secret-info.component";

@Component({
  selector: 'app-secret',
  templateUrl: './secret.page.html',
  styleUrls: ['../wizard/wizard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, SecretInfoComponent]
})
export class SecretPage implements OnInit {
    ngOnInit() {}
}
