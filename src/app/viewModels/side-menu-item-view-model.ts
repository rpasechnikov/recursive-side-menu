export class SideMenuItemViewModel {
    id: number;
    title: string;
    link: string;
    isLinkExternal: boolean;

    childItems: SideMenuItemViewModel[];

    /**TODO: may need to provide app id for each link. Why?:
     * Different apps will have different pages, an internal page for app1, will be external to app2
     * Routing will eithr happen internally for internal link or externally (page refresh) for external links
     * Individual apps will need to understand how to route to their pages, when those are provided through
     * url params
     * ...this should result in a flexible navigation system
     */
    constructor(id: number, title: string, link?: string, childItems?: SideMenuItemViewModel[], isLinkExternal: boolean = false) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.childItems = childItems;
        this.isLinkExternal = isLinkExternal;
    }
}
