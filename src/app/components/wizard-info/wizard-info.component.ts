import {Component, input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import {Wizard} from "../../models/wizard";

import { ChevronLeftIcon } from '../lucide.component';

@Component({
  selector: 'app-wizard-info',
  templateUrl: './wizard-info.component.html',
  styleUrls: ['./wizard-info.component.scss'],
  imports: [CommonModule, RouterLink, ChevronLeftIcon],
  standalone: true
})
export class WizardInfoComponent {
  wizard = input.required<Wizard>();

  formatDateOfBirth(dateString: string): string {
    if (!dateString) {
      return 'No Information';
    }

    const [day, month, year] = dateString.split('-');
    const date = new Date(+year, +month - 1, +day);
    
    const getOrdinalSuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    const dayWithSuffix = `${day}${getOrdinalSuffix(+day)}`;
    return `${date.toLocaleDateString('en-US', { month: 'long'})} ${dayWithSuffix} ${date.toLocaleDateString('en-US', { year: 'numeric'})}`;
  }

  isLast(alternateName: string): boolean {
    const alternateNames = this.wizard().alternate_names;
    return alternateNames.indexOf(alternateName) === alternateNames.length - 1;
  }

  constructor() { }
}
