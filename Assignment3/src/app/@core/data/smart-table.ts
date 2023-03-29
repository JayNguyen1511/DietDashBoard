export abstract class SmartTableData {
  abstract getData(): any[];
  abstract getDataTodaysFood(): any[];
  abstract setDataTodaysFood(data: any[]): any[];
  abstract removeDataTodaysFood(data: any) :void
}
