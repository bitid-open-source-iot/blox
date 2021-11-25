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
					link: {
						href: 'http://localhost:4200/',
						value: 'Open Link',
						target: '_parent'
					},
					type: 'link',
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
