import {Component, input, signal} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import {Wizard} from "../../models/wizard";

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  imports: [RouterLink],
  standalone: true
})
export class WizardCardComponent {
  wizard = input.required<Wizard>();

  secretWizard = signal({
    'name': 'Alan Geirnaert',
    'alternate_names': ['The Sleep Deprived', 'Your Future Intern', 'The Coffee Addict'],
    'image': '/assets/secret-wizard.png',
  });

  isLast(alternateName: string): boolean {
    const alternateNames = this.wizard().alternate_names;
    return alternateNames.indexOf(alternateName) === alternateNames.length - 1;
  }

  navigateToWizard() {
    this.router.navigate(['/wizard', this.wizard().id]);
  }

  constructor(private router: Router) { }

}
