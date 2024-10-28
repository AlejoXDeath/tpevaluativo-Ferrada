import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isCollapsed: { [key: string]: boolean } = {
    terminos: false,
    privacidad: false,
    contacto: false
  };

  toggleCollapse(section: string): void {
    this.isCollapsed[section] = !this.isCollapsed[section];
  }
}
