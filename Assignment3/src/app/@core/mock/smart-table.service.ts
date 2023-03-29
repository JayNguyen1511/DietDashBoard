import { Injectable } from "@angular/core";
import { SmartTableData } from "../data/smart-table";
import { uniqBy } from "lodash";

@Injectable()
export class SmartTableService extends SmartTableData {
  getData() {
    return this.data;
  }

  getDataTodaysFood() {
    return this.todaysFood;
  }

  setDataTodaysFood(data: any[]) {
    const newStep = [...this.todaysFood, ...data]
    this.todaysFood = uniqBy(newStep, "id");
    return this.todaysFood
  }

  removeDataTodaysFood(data: any) {
    const index = this.todaysFood.findIndex(e => e.id == data.id);
    if(index > -1) {
      this.todaysFood.splice(index, 1);
    }
  }
  data = [
    {
      id: 1,
      productName: "Sushi",
      fat: "21",
      carbohydrate: "121",
      protein: "32",
      calo: "77",
    },
    {
      id: 2,
      productName: "Tempura",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 3,
      productName: "Sukiyaki",
      fat: "21",
      carbohydrate: "131",
      protein: "312",
      calo: "28",
    },
    {
      id: 4,
      productName: "Ramen",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "238",
    },
    {
      id: 5,
      productName: "Tonkatsu",
      fat: "55",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 6,
      productName: "Soba",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "77",
    },
    {
      id: 7,
      productName: "Udon",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 8,
      productName: "Cheese Steak",
      fat: "55",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 9,
      productName: "S'mores",
      fat: "77",
      carbohydrate: "11",
      protein: "32",
      calo: "55",
    },
    {
      id: 10,
      productName: "Twinkies",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "77",
    },
    {
      id: 11,
      productName: "macaron",
      fat: "34",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 12,
      productName: "Escargot",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 13,
      productName: "crepe",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "55",
    },
    {
      id: 14,
      productName: "Pain au Chocolat",
      fat: "77",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 15,
      productName: "Salade Nicoise",
      fat: "34",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 16,
      productName: " Croque Monsieur",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "77",
    },
    {
      id: 17,
      productName: "Coq au vin",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 18,
      productName: "Bouillabaisse ",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "55",
    },
    {
      id: 19,
      productName: "Bánh mì",
      fat: "34",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 20,
      productName: "Phở",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 21,
      productName: "Gỏi cuốn",
      fat: "21",
      carbohydrate: "11",
      protein: "32",
      calo: "28",
    },
    {
      id: 22,
      productName: "Bún bò Huế",
      fat: "34",
      carbohydrate: "11",
      protein: "32",
      calo: "55",
    },
  ];

  todaysFood = [];
}
