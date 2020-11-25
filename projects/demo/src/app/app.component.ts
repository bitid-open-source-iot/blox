import { BloxComponent } from 'projects/blox/src/lib/blox.component';
import { BloxRow, BLOXROW } from 'projects/blox/src/public-api';
import { OnInit, Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	@ViewChild(BloxComponent, {'static': true}) private blox: BloxComponent;
	
	constructor() { };
	
	public rows: BLOXROW[] = [
		{
			'columns': [
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000001',
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
		this.rows = this.rows.map(row => new BloxRow(row));
		
		this.rows.map(row => {
			row.height = (window.innerHeight - 10) / 2;
		});

		this.blox.changes.subscribe(rows => {
			debugger
		});
	};
}