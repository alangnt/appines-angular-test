import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

import { WizardInfoComponent } from "../../components/wizard-info/wizard-info.component";
import { WizardsService } from '../../services/wizards.service';
import { Wizard } from "../../models/wizard";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.page.html',
  styleUrls: ['./wizard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, WizardInfoComponent]
})
export class WizardPage implements OnInit {
  wizards = signal<Wizard[]>([]);
  selectedWizard = signal<string>('9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8')

  protected filteredWizards = computed(() =>
    this.wizards().filter(wizard => wizard.id.includes(this.selectedWizard() || ''))
  );

  constructor(private wizardsService: WizardsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedWizard.set(params['id']);
    });
    this.fetchWizards();
  }

  fetchWizards() {
    this.wizardsService.getWizards().subscribe((res: Wizard[]) => {
      this.wizards.set(res);
    });
  }
}
