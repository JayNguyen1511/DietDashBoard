import { ViewChild, Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { sumBy } from "lodash"
@Component({
  selector: "ngx-tree-grid",
  templateUrl: "./tree-grid.component.html",
  styleUrls: ["./tree-grid.component.scss"],
})
export class TreeGridComponent {
  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete',
      cancelButtonContent: 'cancel'
    },
    actions: {
      edit: false,
      add: false,
      delete: true,
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
        title: "Calo",
        type: "string",
      },
    },
  };
  table;
  source: LocalDataSource = new LocalDataSource();

  listSelected = [];
  constructor(private service: SmartTableData) {
    this.renderData()
  }

  renderData() {
    const data = this.service.getDataTodaysFood()
    const maped = data.map(nutrient => {
      return {
        ...nutrient,
        fat: nutrient.fat + ' gram',
        carbohydrate: nutrient.carbohydrate + ' gram',
        protein: nutrient.protein + ' gram',
        Calo: nutrient.Calo + ' gram',

      }
    })
    this.source.load(maped);
  }
  onDeleteConfirm(event): void {
    this.service.removeDataTodaysFood(event.data);
    this.renderData()

  }

  // Total 
  total() {
    const data = this.service.getDataTodaysFood()
    return {
      fat: sumBy(data, "fat"),
      carbohydrate: sumBy(data, "carbohydrate"),
      protein: sumBy(data, "protein"),
      calo: sumBy(data, "calo"),
    }
  }
}
