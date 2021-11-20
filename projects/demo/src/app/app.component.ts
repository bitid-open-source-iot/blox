import { BloxRow } from 'projects/blox/src/public-api';
import { OnInit, Component } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	constructor() { }

	public rows: any = [
		{
			columns: [
				{
					fill: {
						color: '#ffffff',
						opacity: 100
					},
					chart: {
						series: [
							{
								data: [
									{
										"fill": "#F44336",
										"date": "2021-11-10T23:00:00.972Z",
										"value": 17
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T00:00:00.972Z",
										"value": 73
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T01:00:00.972Z",
										"value": 51
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T02:00:00.972Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T03:00:00.972Z",
										"value": 97
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T04:00:00.973Z",
										"value": 70
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T05:00:00.973Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T06:00:00.973Z",
										"value": 5
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T07:00:00.973Z",
										"value": 36
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T08:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T09:00:00.973Z",
										"value": 11
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T10:00:00.973Z",
										"value": 55
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T11:00:00.973Z",
										"value": 85
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T12:00:00.973Z",
										"value": 29
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T13:00:00.973Z",
										"value": 44
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T14:00:00.973Z",
										"value": 60
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T15:00:00.973Z",
										"value": 47
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T16:00:00.973Z",
										"value": 75
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T17:00:00.973Z",
										"value": 33
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T18:00:00.973Z",
										"value": 99
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T19:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T20:00:00.973Z",
										"value": 25
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T21:00:00.973Z",
										"value": 89
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T22:00:00.973Z",
										"value": 76
									}
								],
								keys: {
									date: 'date',
									value: 'value'
								},
								id: '1',
								type: 'column',
								color: '#000000',
								label: 'TOU',
								opacity: 50
							},
							{
								data: [
									{
										"fill": "#F44336",
										"date": "2021-11-10T23:00:00.972Z",
										"value": 17
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T00:00:00.972Z",
										"value": 73
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T01:00:00.972Z",
										"value": 51
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T02:00:00.972Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T03:00:00.972Z",
										"value": 97
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T04:00:00.973Z",
										"value": 70
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T05:00:00.973Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T06:00:00.973Z",
										"value": 5
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T07:00:00.973Z",
										"value": 36
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T08:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T09:00:00.973Z",
										"value": 11
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T10:00:00.973Z",
										"value": 55
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T11:00:00.973Z",
										"value": 85
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T12:00:00.973Z",
										"value": 29
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T13:00:00.973Z",
										"value": 44
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T14:00:00.973Z",
										"value": 60
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T15:00:00.973Z",
										"value": 47
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T16:00:00.973Z",
										"value": 75
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T17:00:00.973Z",
										"value": 33
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T18:00:00.973Z",
										"value": 99
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T19:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T20:00:00.973Z",
										"value": 25
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T21:00:00.973Z",
										"value": 89
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T22:00:00.973Z",
										"value": 76
									}
								],
								keys: {
									date: 'date',
									value: 'value'
								},
								id: '2',
								type: 'line',
								color: '#000000',
								label: 'TOU',
								opacity: 50
							},
							{
								data: [
									{
										"fill": "#F44336",
										"date": "2021-11-10T23:00:00.972Z",
										"value": 17
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T00:00:00.972Z",
										"value": 73
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T01:00:00.972Z",
										"value": 51
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T02:00:00.972Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T03:00:00.972Z",
										"value": 97
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T04:00:00.973Z",
										"value": 70
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T05:00:00.973Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T06:00:00.973Z",
										"value": 5
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T07:00:00.973Z",
										"value": 36
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T08:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T09:00:00.973Z",
										"value": 11
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T10:00:00.973Z",
										"value": 55
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T11:00:00.973Z",
										"value": 85
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T12:00:00.973Z",
										"value": 29
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T13:00:00.973Z",
										"value": 44
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T14:00:00.973Z",
										"value": 60
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T15:00:00.973Z",
										"value": 47
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T16:00:00.973Z",
										"value": 75
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T17:00:00.973Z",
										"value": 33
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T18:00:00.973Z",
										"value": 99
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T19:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T20:00:00.973Z",
										"value": 25
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T21:00:00.973Z",
										"value": 89
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T22:00:00.973Z",
										"value": 76
									}
								],
								keys: {
									date: 'date',
									value: 'value'
								},
								id: '3',
								type: 'area',
								color: '#000000',
								label: 'TOU',
								opacity: 50
							},
							{
								data: [
									{
										"fill": "#F44336",
										"date": "2021-11-10T23:00:00.972Z",
										"value": 17
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T00:00:00.972Z",
										"value": 73
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T01:00:00.972Z",
										"value": 51
									},
									{
										"fill": "#F44336",
										"date": "2021-11-11T02:00:00.972Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T03:00:00.972Z",
										"value": 97
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T04:00:00.973Z",
										"value": 70
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T05:00:00.973Z",
										"value": 10
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T06:00:00.973Z",
										"value": 5
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T07:00:00.973Z",
										"value": 36
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T08:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T09:00:00.973Z",
										"value": 11
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T10:00:00.973Z",
										"value": 55
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T11:00:00.973Z",
										"value": 85
									},
									{
										"fill": "#FF9800",
										"date": "2021-11-11T12:00:00.973Z",
										"value": 29
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T13:00:00.973Z",
										"value": 44
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T14:00:00.973Z",
										"value": 60
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T15:00:00.973Z",
										"value": 47
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T16:00:00.973Z",
										"value": 75
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T17:00:00.973Z",
										"value": 33
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T18:00:00.973Z",
										"value": 99
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T19:00:00.973Z",
										"value": 48
									},
									{
										"fill": "#FFEB3B",
										"date": "2021-11-11T20:00:00.973Z",
										"value": 25
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T21:00:00.973Z",
										"value": 89
									},
									{
										"fill": "#4CAF50",
										"date": "2021-11-11T22:00:00.973Z",
										"value": 76
									}
								],
								keys: {
									date: 'date',
									value: 'value'
								},
								id: '4',
								type: 'step',
								color: '#000000',
								label: 'TOU',
								opacity: 50
							}
						]
					},
					type: 'chart',
					width: 100,
					position: 1
				}
			],
			height: 500,
			position: 1
		}
	];

	ngOnInit(): void {
		this.rows = this.rows.map(row => new BloxRow(row));

		setTimeout(() => {
			this.rows[0].columns[0].pie.slices = [
				{
					key: 'clay',
					value: 100
				},
				{
					key: 'mom',
					value: 67
				}
			]
		}, 1500);
	}
}
