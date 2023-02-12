enum Tabs {
  flex = "Flex",
  grid = "Grid",
}

export class App {
  selectedTab = Tabs.flex;

  tabs: typeof Tabs = Tabs;

  select(tab: Tabs): void {
    this.selectedTab = tab;
  }
}
