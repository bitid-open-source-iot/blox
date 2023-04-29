import { BloxPieSlice, BloxRow } from 'projects/blox/src/public-api'
import { OnInit, Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor() { }

  public rows: any[] = [
    {
      columns: [
        {
          columnId: 'description',
          type: 'table',
          fill: {
            color: '#ff00ff',
            opacity: 100,
            alingnment: 'left',
          },
          table: {
            columns: [
              {
                "value": "description",
                'keys': {
                  value: 'description',
                }
              }
            ],
            "data": [{ "minDate": "2023-04-28T11:10:04.000Z", "maxDate": "2023-04-28T11:34:26.000Z", "minValue": 142395, "maxValue": 142402, "diff": 0, "deviceId": "000000000000000012711326", "key": "CI1", "description": "Rinaldo Rd Water Usage", "commissionDate": "2016-07-01T00:00:00.000Z", "units": ["V", "", "", "Dbm", "", "", "kl"] }, { "minDate": "2023-04-28T04:02:08.000Z", "maxDate": "2023-04-29T04:08:51.000Z", "minValue": 410833, "maxValue": 411327, "diff": 0, "deviceId": "000000000000000012989573", "key": "CI1", "description": "3A Spy Road Water", "commissionDate": "2020-12-10T22:00:00.000Z", "units": ["Vdc", "L", "dBm", ""] }]
          },
        },
        {
          fill: {
            color: '#ffffff',
            opacity: 100,
            alingnment: 'left',
          },
          font: {
            color: '#00ff00',
          },
          stroke: {
            style: "groove",
            width: 10,
            color: "#ff0000",
          },
          banner: {
            color: '#ff00ff',
            alignment: 'center',
            baseline: 'bottom',
            size: 120,
          },
          label: "STORY",
          link: {
            href: 'http://localhost:4200/',
            value: 'Open Link',
            target: '_parent'
          },
          type: 'link',
          width: 100,
          position: 1
        },
        {
          vector: {
            src: 'https://www.w3schools.com/w3css/img_lights.jpg',
          },
          fill: {
            color: '#ffffff',
            opacity: 100,
            alingnment: 'left',
          },
          // font:{
          //   color: '#00ff00',
          // },
          stroke: {
            style: "groove",
            width: 10,
            color: "#ff0000",
          },
          // banner: {
          //   color: '#ff00ff',
          //   alignment: 'center',
          //   baseline: 'bottom',
          //   size: 120,
          // },
          label: "STORY",
          link: {
            href: 'https://bitid.co.za',
            value: 'Open Link',
            target: '_parent'
          },
          type: 'vector',
          width: 100,
          position: 1
        },
        {
          type: "gauge",
          gauge: {
            min: 0,
            max: 100,
            endAngle: 180,
            startAngle: 0,
            hands: [
              {
                color: '#ff0000',
                value: 50,
              }
            ]
          },
          fill: {
            color: '#ffffff',
            opacity: 100,
          },
          font: {
            color: '#000000',
          }

        }
      ],
      height: 500,
      position: 1
    }
  ]

  // public rows: any[] = [
  //   {
  //     columns: [
  //       {
  //         vector:{
  //           src: 'https://www.w3schools.com/w3css/img_lights.jpg',
  //         },
  //         fill: {
  //           color: '#ffffff',
  //           opacity: 100,
  //           alingnment: 'left',
  //         },
  //         // font:{
  //         //   color: '#00ff00',
  //         // },
  //         // stroke: {
  //         //   style: "groove",
  //         //   width: 10,
  //         //   color: "#ff0000",
  //         // },
  //         // banner: {
  //         //   color: '#ff00ff',
  //         //   alignment: 'center',
  //         //   baseline: 'bottom',
  //         //   size: 120,
  //         // },
  //         // label: "STORY",
  //         link: {
  //           href: 'https://bitid.co.za',
  //           value: 'Open Link',
  //           target: '_parent'
  //         },
  //         type: 'vector',
  //         width: 100,
  //         position: 1
  //       }
  //     ],
  //     height: 500,
  //     position: 1
  //   }
  // ]

  ngOnInit(): void {
    this.rows = this.rows.map((row: BloxRow) => new BloxRow(row))

    // setTimeout(() => {
    //   this.rows[0].columns[0].pie.slices = [
    //     {
    //       value: 100
    //     },
    //     {
    //       value: 67
    //     }
    //   ]
    // }, 1500)
  }
}
