import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SideMenuItemViewModel } from 'src/app/viewModels/side-menu-item-view-model';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.css']
})
export class SideMenuItemComponent implements OnInit {

  @Input() viewModel: SideMenuItemViewModel;
  @Input() selectedId: number;

  @Output() selectionChanged = new EventEmitter<number>();

  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
    console.log(
      `Side Menu Item Component for ${this.viewModel.title} `
      + `with ${(this.viewModel.childItems && this.viewModel.childItems.length) || 0 } items`);
  }

  handleClick() {
    // isExpanded=!isExpanded; selectedId = viewModel.id
    console.log(`Item ${this.viewModel.id} - ${this.viewModel.title} clicked!`);
    this.isExpanded = !this.isExpanded;
    this.selectionChanged.emit(this.viewModel.id);
  }

  childSelectionChanged(childId: number) {
    this.selectionChanged.emit(childId);
  }
}
