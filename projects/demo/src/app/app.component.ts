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
					'handler': function() {
						if (this.valid()) {
							this.value = Math.floor(Math.random() * 100) + 1;
						} else {
							this.value = '❗';
						};
					},
					'type': 'value',
					'width': 100,
					'inputId': '000000000000000000000001',
					'deviceId': '000000000000000000000001',
					'position': 1,
					'expression': 'last-value'
				}
			],
			'height': 500,
			'position': 1
		}
	];

	public export() {
		console.log(JSON.parse(JSON.stringify(this.rows)));
	};

	ngOnInit(): void {
		this.rows = this.rows.map(row => new BloxRow(row));
		this.rows.map(row => {
			row.columns = BloxParse(row.columns);
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

		this.rows.map(async row => {
			row.columns.map(async column => {
				if (column.type == 'value') {
					column.handler();
				} else if (column.type == 'chart') {
					column.handler();
				};
			});
		});
	};
}