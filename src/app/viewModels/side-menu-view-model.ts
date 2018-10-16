import { SideMenuItemViewModel } from './side-menu-item-view-model';

export class SideMenuViewModel {
    items: SideMenuItemViewModel[];

    constructor(items: SideMenuItemViewModel[]) {
        this.items = items;
    }
}
