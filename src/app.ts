enum Tabs {
  flex = "Flex",
  grid = "Grid",
}

export class App {
  /** Currently displayed tab for demo */
  selectedTab = Tabs.flex;

  /** Expose Tabs enum to HTML */
  tabs: typeof Tabs = Tabs;

  /** change currently selected tab */
  select(tab: Tabs): void {
    this.selectedTab = tab;
  }
}
