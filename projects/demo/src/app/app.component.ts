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
					'type': 'blank',
					'width': 50,
					'position': 1
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'type': 'blank',
					'width': 50,
					'position': 2
				}
			],
			'height': 250,
			'position': 1
		},
		{
			'columns': [
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'type': 'blank',
					'width': 50,
					'position': 1
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'type': 'blank',
					'width': 50,
					'position': 2
				}
			],
			'height': 250,
			'position': 2
		}
	];

	ngOnInit(): void {
		this.rows = this.rows.map(row => new BloxRow(row));
		this.rows.map(row => {
			row.columns = BloxParse(row.columns);
		});
		
		console.log(this.rows);

		this.rows.map(row => {
			row.height = (window.innerHeight - 10) / 2;
		});

		this.blox.changes.subscribe(rows => {
			this.rows.map(o => {
				rows.map(row => {
					if (o.id == row.id) {
						o.height = row.height;
						o.columns.map(c => {
							row.columns.map(column => {
								if (c.id == column.id) {
									c.width = column.width;
								};
							});
						});
					};
				});
			});
			
			console.log(this.rows);
		});
	};
}