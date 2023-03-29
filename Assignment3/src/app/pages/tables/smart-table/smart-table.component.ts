import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { Router } from '@angular/router';

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./smart-table.component.html",
  styleUrls: ["./smart-table.component.scss"],
})
export class SmartTableComponent implements OnInit {
  settings = {
    selectMode: "multi",
    actions: {
      edit: false,
      add: false,
      delete: false,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      productName: {
        title: "Product Name",
        type: "string",
      },
      fat: {
        title: "Fat",
        type: "string",
      },
      carbohydrate: {
        title: "Carbohydrate",
        type: "string",
      },
      protein: {
        title: "Protein",
        type: "string",
      },
      calo: {
        title: "calo",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  listSelected = [];
  constructor(private service: SmartTableData, private router: Router) {
    const data = this.service.getData()
    const maped = data.map(nutrient => {
      return {
        ...nutrient,
        fat: nutrient.fat + ' gram',
        carbohydrate: nutrient.carbohydrate + ' gram',
        protein: nutrient.protein + ' gram',
        calo: nutrient.calo + ' gram',
      }
    })
    this.source.load(maped);
  }

  userSelectRows(event): void {
    this.listSelected = event
  }

  saveTodaysFood(): void {
    const clearGram = this.listSelected.map(nutrient => {
      return {
        ...nutrient,
        fat: parseInt(nutrient.fat.replace(' gram', '')),
        carbohydrate: parseInt(nutrient.carbohydrate.replace(' gram', '')),
        protein: parseInt(nutrient.protein.replace(' gram', '')),
        calo: parseInt(nutrient.calo.replace(' gram', '')),

      }
    })
    this.service.setDataTodaysFood(clearGram);
    if (
      confirm("you're done, click \"switch page\" to see the selected lists")
    ) {
      this.router.navigate(['/dashboard/today-list'])
    }
  }

  ngOnInit() { }
}
