import {Component, signal} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChevronLeftIcon } from '../lucide.component';

@Component({
  selector: 'app-secret-info',
  templateUrl: './secret-info.component.html',
  styleUrls: ['../wizard-info/wizard-info.component.scss'],
  imports: [CommonModule, ChevronLeftIcon, RouterLink],
  standalone: true
})
export class SecretInfoComponent {
  secretWizard = signal({
    'name': 'Alan Geirnaert',
    'alternate_names': ['The Sleep Deprived', 'Your Future Intern', 'The Coffee Addict'],
    'species': 'Human',
    'wizard': 'Wizard',
    'house': 'Ravenclaw',
    'gender': 'Male',
    'dateOfBirth': 'August 18th 2000',
    'ancestry': 'Muggleborn',
    'eyeColour': 'Brown',
    'hairColour': 'Half Brown, Half Bald',
    'patronus': 'Turtle',
    'image': '/assets/secret-wizard.png',
  });

  isLast(alternateName: string): boolean {
    const alternateNames = this.secretWizard().alternate_names;
    return alternateNames.indexOf(alternateName) === alternateNames.length - 1;
  }

  constructor() { }
}
