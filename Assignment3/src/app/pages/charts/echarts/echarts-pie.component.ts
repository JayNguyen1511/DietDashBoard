import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { sumBy } from "lodash"
import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private service: SmartTableData) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['fat', 'carbohydrate', 'protein', 'calo'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              {
                value: sumBy(this.service.getDataTodaysFood(), "fat"),
                name: 'fat'
              },
              {
                value: sumBy(this.service.getDataTodaysFood(), "carbohydrate"),
                name: 'carbohydrate'
              },
              {
                value: sumBy(this.service.getDataTodaysFood(), "protein"),
                name: 'protein'
              },
              {
                value: sumBy(this.service.getDataTodaysFood(), "calo"),
                name: 'calo'
              },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  total() {
      const data = this.service.getDataTodaysFood()
      console.log([
        {
          value: sumBy(data, "fat"),
          name: 'fat'
        },
        {
          value: sumBy(data, "carbohydrate"),
          name: 'carbohydrate'
        },
        {
          value: sumBy(data, "protein"),
          name: 'protein'
        },
        {
          value: sumBy(data, "calo"),
          name: 'calo'
        },
      ])
      return 
      [
        {
          value: sumBy(data, "fat"),
          name: 'fat'
        },
        {
          value: sumBy(data, "carbohydrate"),
          name: 'carbohydrate'
        },
        {
          value: sumBy(data, "protein"),
          name: 'protein'
        },
        {
          value: sumBy(data, "calo"),
          name: 'calo'
        },
      ]
      
    }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
