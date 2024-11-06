import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular/standalone';

import { SpellsService } from '../../services/spells.service';
import {SpellCardComponent} from "../../components/spell-card/spell-card.component";
import {Spell} from "../../models/spell";

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar, CommonModule, FormsModule, SpellCardComponent]
})
export class SpellsPage implements OnInit {
  // TODO : use signal (DONE)
  spells = signal<Spell[]>([]);
  // TODO : use signal (DONE)
  searchInput = signal<string>('');

  // TODO : use computed signal (DONE)
  protected filteredSpells = computed(() => {
    return this.spells().filter(spell => spell.name.toLowerCase().includes(this.searchInput().toLowerCase() || ''))
  });

  constructor(private spellsService: SpellsService) { }

  ngOnInit() {
    this.fetchSpells();
  }

  fetchSpells() {
    // TODO : move in a specific service (DONE)
    this.spellsService.getSpells().subscribe((res: Spell[]) => {
      this.spells.set(res);
    });
  }

  // We can now remove it as we just used the computed signal to combine them both
  /*filterSpell() {
    this.filteredSpells = this.spells().filter(spell => spell.name.toLowerCase().includes(this.searchInput().toLowerCase() || ''))
  }*/

}
