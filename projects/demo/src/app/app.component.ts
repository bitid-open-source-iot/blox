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
          fill: {
            color: '#ffffff',
            opacity: 100,
            alingnment: 'left',
          },
          font:{
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
          vector:{
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
          font:{
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
