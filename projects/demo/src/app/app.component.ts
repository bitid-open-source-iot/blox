import { BloxComponent } from 'projects/blox/src/lib/blox.component';
import { BloxRow, BloxParse } from 'projects/blox/src/public-api';
import { OnInit, Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	@ViewChild(BloxComponent, {static: true}) private blox: BloxComponent;

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
						value: '100%'
					},
					banner: {
						size: 24,
						color: '#FFFFFF',
						opacity: 100,
						baseline: 'top',
						alignment: 'left'
					},
					type: 'value',
					width: 100,
					label: 'TEST',
					inputId: '000000000000000000000001',
					deviceId: '000000000000000000000001',
					position: 1
				}
			],
			height: 500,
			position: 1
		}
	];

	ngOnInit(): void {
		this.rows = this.rows.map(row => new BloxRow(row));
		this.rows.map(row => {
			row.columns = BloxParse(row.columns);
		});
	}
}
