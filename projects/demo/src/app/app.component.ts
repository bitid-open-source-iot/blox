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
					value: {
						value: 'hello'
					},
					banner: {
						size: 24,
						color: '#FFFFFF',
						opacity: 100,
						baseline: 'top',
						alignment: 'left'
					},
					type: 'value',
					width: 50,
					label: 'value',
					position: 1
				},
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
					gauge: {
						hands: [
							{
								color: '#fff',
								value: 30
							}
						],
						ranges: [
							{
								end: 33,
								color: '#1B5E20',
								start: 0
							},
							{
								end: 66,
								color: '#FF6F00',
								start: 33
							},
							{
								end: 100,
								color: '#B71C1C',
								start: 66
							}
						],
						min: 0,
						max: 100,
						endAngle: 360,
						startAngle: 180
					},
					banner: {
						size: 24,
						color: '#FFFFFF',
						opacity: 100,
						baseline: 'top',
						alignment: 'left'
					},
					type: 'gauge',
					width: 50,
					label: 'gauge',
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
