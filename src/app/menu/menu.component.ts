import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Custom Components
import { MenuEntry } from './menu-entry';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public title: String;
  public menuEntries: MenuEntry[];

  constructor(

    private router: Router

  ) {

    this.title = 'Quant';
    this.menuEntries = [];

    this.menuEntries.push(

      new MenuEntry('Portfolio', 'pie_chart', '/portfolio'),
      new MenuEntry('Strategy', 'lightbulb_outline', '/strategy'),
      new MenuEntry('Markets', 'show_chart', '/markets'),
      new MenuEntry('Settings', 'settings', '/settings'),
      new MenuEntry('Login', 'lock_open', '/login')

    );

  }

  public onSelect(menuEntry: MenuEntry) {

    this.router.navigate([menuEntry.getLink()]);

  }

  ngOnInit() {
  }

}
