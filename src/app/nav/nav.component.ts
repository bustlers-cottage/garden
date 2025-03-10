import {Component, computed, input} from '@angular/core';
import {MatAnchor} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'bus-nav',
  imports: [
    MatAnchor,
    MatIcon
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  telephone = input("+44 7956 049257")
  email = input("JennyMarks5@icloud.com")
  instagram = input("bustlerscottagegarden")

  telHref = computed(() => `tel:${this.telephone()}`);
  emailHref = computed(() => `mailto:${this.email()}`);
  instagramHref = computed(() => `https://www.instagram.com/${this.instagram()}/`);
}
