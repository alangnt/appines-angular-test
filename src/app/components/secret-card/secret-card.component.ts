import {Component, signal} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret-card',
  templateUrl: './secret-card.component.html',
  styleUrls: ['../wizard-card/wizard-card.component.scss'],
  standalone: true
})
export class SecretCardComponent {
  secretWizard = signal({
    'name': 'Alan Geirnaert',
    'alternate_names': ['The Sleep Deprived', 'Your Future Intern', 'The Coffee Addict'],
    'image': '/assets/secret-wizard.png',
  });

  isLast(alternateName: string): boolean {
    const alternateNames = this.secretWizard().alternate_names;
    return alternateNames.indexOf(alternateName) === alternateNames.length - 1;
  }

  navigateToWizard() {
    this.router.navigate(['/secret-wizard']);
  }

  constructor(private router: Router) { }
}
