import { BloxParse } from 'projects/blox/src/public-api';
import { BloxComponent } from 'projects/blox/src/lib/blox.component';
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
						{
							'data': [
								{
									'date': '2020-01-01',
									'value': 5
								},
								{
									'date': '2020-01-02',
									'value': 10
								},
								{
									'date': '2020-01-03',
									'value': 22
								},
								{
									'date': '2020-01-04',
									'value': 0
								},
								{
									'date': '2020-01-05',
									'value': 40
								},
								{
									'date': '2020-01-06',
									'value': 30
								}
							],
							'id': '000000000000000000000001',
							'type': 'area',
							'color': '#FF0000',
							'label': 'test',
							'opacity': 50
						}
					],
					'id': '000000000000000000000001',
					'type': 'chart',
					'width': 100,
					'position': 1
				}
			],
			'id': '000000000000000000000001',
			'height': 250,
			'position': 1
		}
	];

	ngOnInit(): void {
		this.rows = BloxParse(this.rows);
		
		this.rows.map(row => {
			row.height = (window.innerHeight - 10) / 2;
		});

		this.blox.changes.subscribe(rows => console.log(rows));
	};
}