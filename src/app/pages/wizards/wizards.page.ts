import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { WizardCardComponent } from "../../components/wizard-card/wizard-card.component";
import { SecretCardComponent } from 'src/app/components/secret-card/secret-card.component';
import { WizardsService } from '../../services/wizards.service';
import { Wizard } from "../../models/wizard";

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.page.html',
  styleUrls: ['./wizards.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar, CommonModule, FormsModule, WizardCardComponent, SecretCardComponent]
})
export class WizardsPage implements OnInit {
  wizards = signal<Wizard[]>([]);
  searchInput = signal<string>('');

  protected filteredWizards = computed(() =>
    this.wizards().filter(wizard => wizard.name.toLowerCase().includes(this.searchInput().toLowerCase() || ''))
  );

  constructor(private wizardsService: WizardsService) { }

  ngOnInit() {
    this.fetchWizards();
  }

  fetchWizards() {
    this.wizardsService.getWizards().subscribe((res: Wizard[]) => {
      this.wizards.set(res);
    });
  }
}
