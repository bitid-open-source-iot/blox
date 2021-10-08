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
					pie: {},
					banner: {
						size: 24,
						color: '#FFFFFF',
						opacity: 100,
						baseline: 'top',
						alignment: 'left'
					},
					type: 'pie',
					width: 100,
					label: 'pie',
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
