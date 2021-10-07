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
						color: '#FFFFFF',
						opacity: 25
					},
					font: {
						size: 24,
						color: '#FFFFFF',
						opacity: 100,
						baseline: 'middle',
						alignment: 'center'
					},
					chart: {
						fixes: [
							{
								color: '#000000',
								value: 50
							}
						],
						series: [
							{
								filter: {
									value: 100,
									enabled: false,
									expression: 'last'
								},
								id: 101,
								type: 'column',
								data: [
									{
										date: new Date(2021, 0, 1),
										value: 123
									},
									{
										date: new Date(2021, 0, 2),
										value: 2
									},
									{
										date: new Date(2021, 0, 3),
										value: 0
									},
									{
										date: new Date(2021, 0, 4),
										value: 10
									},
									{
										date: new Date(2021, 0, 5),
										value: 22
									},
									{
										date: new Date(2021, 0, 6),
										value: 1
									},
									{
										date: new Date(2021, 0, 7),
										value: 32
									},
									{
										date: new Date(2021, 0, 8),
										value: 10
									},
									{
										date: new Date(2021, 0, 9),
										value: 88
									},
									{
										date: new Date(2021, 0, 10),
										value: 43
									},
									{
										date: new Date(2021, 0, 1),
										value: 92
									}
								],
								color: '#2196F3',
								label: 'chart',
								groupby: 'none',
								opacity: 50,
								inputId: '000000000000000000000000',
								deviceId: '000000000000000000000000',
								expression: 'last'
							}
						]
					},
					banner: {
						size: 24,
						color: '#FFFFFF',
						opacity: 100,
						baseline: 'top',
						alignment: 'left'
					},
					type: 'chart',
					width: 100,
					label: 'chart',
					position: 1
				}
			],
			height: 500,
			position: 1
		}
	];

	ngOnInit(): void {
		this.rows = this.rows.map(row => new BloxRow(row));
	}
}
