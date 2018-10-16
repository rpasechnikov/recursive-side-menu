export class SideMenuItemViewModel {
    id: number;
    title: string;
    link: string;

    childItems: SideMenuItemViewModel[];

    constructor(id: number, title: string, link?: string, childItems?: SideMenuItemViewModel[]) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.childItems = childItems;
    }
}
