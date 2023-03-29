import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Food List",
    icon: "shopping-cart-outline",
    link: "/dashboard",
    home: true,
  },
  {
    title: "Today list",
    icon: "keypad-outline",
    link: "/dashboard/today-list",
  },
  {
    title: "Chart",
    icon: "pie-chart-outline",
    link: "/dashboard/chart",
  },
];
