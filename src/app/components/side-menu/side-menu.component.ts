import { Component, OnInit } from '@angular/core';
import { SideMenuItemViewModel } from 'src/app/viewModels/side-menu-item-view-model';
import { SideMenuViewModel } from 'src/app/viewModels/side-menu-view-model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  viewModel = new SideMenuViewModel([
    new SideMenuItemViewModel(1, 'Item 1', undefined, [
      new SideMenuItemViewModel(2, 'Item 1 - 1'),
      new SideMenuItemViewModel(3, 'Item 1 - 2', undefined, [
        new SideMenuItemViewModel(4, 'Item 1 - 2 - 1'),
        new SideMenuItemViewModel(5, 'Item 1 - 2 - 2')
      ]),
      new SideMenuItemViewModel(6, 'Item 1 - 3')
    ]),
    new SideMenuItemViewModel(7, 'Page 1', 'app-page1'),
    new SideMenuItemViewModel(8, 'Page 2', 'app-page2'),
    new SideMenuItemViewModel(9, 'Page 3', 'app-page3'),
    new SideMenuItemViewModel(10, 'Google', 'https://www.google.com', undefined, true)
  ]);

  selectedId: number;

  constructor() { }

  ngOnInit() {
  }

  selectionChanged(itemId: number) {
    this.selectedId = itemId;
  }
}
