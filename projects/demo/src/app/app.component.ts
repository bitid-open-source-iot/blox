import { BloxComponent } from 'projects/blox/src/lib/blox.component';
import { BloxRow, BloxParse } from 'projects/blox/src/public-api';
import { OnInit, Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	@ViewChild(BloxComponent, {'static': true}) private blox: BloxComponent;
	
	constructor() { };
	
	public rows: any = [
		{
			'columns': [
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'series': [
						
					],
					'type': 'chart',
					'width': 100,
					'inputId': '000000000000000000000001',
					'deviceId': '000000000000000000000001',
					'position': 1
				}
			],
			'height': 500,
			'position': 1
		}
	];

	public add() {
		this.rows[0].columns[0].series.push({
			'id': '000000000000000000000001',
			'data': [
				{
					'date': '2020-01-01',
					'value': 10
				},
				{
					'date': '2020-01-02',
					'value': 2
				},
				{
					'date': '2020-01-03',
					'value': 30
				},
				{
					'date': '2020-01-04',
					'value': 20
				},
				{
					'date': '2020-01-05',
					'value': 56
				},
				{
					'date': '2020-01-06',
					'value': 0
				}
			],
			'type': 'area',
			'color': '#FF0000',
			'opacity': 50,
			'inputId': '000000000000000000000001',
			'deviceId': '000000000000000000000001'
		});
	};

	public remove() {
		this.rows[0].columns[0].series.splice(0, 1);
	};

	ngOnInit(): void {
		this.rows = this.rows.map(row => new BloxRow(row));
		this.rows.map(row => {
			row.columns = BloxParse(row.columns);
		});
	};
}