import { BloxRow, BLOXROW } from 'projects/blox/src/public-api';
import { OnInit, Component, ViewChild } from '@angular/core';
import { BloxComponent } from 'projects/blox/src/lib/blox.component';

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
		},
		{
			'columns': [
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000001',
					'width': 50,
					'position': 1
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000002',
					'width': 50,
					'position': 2
				}
			],
			'id': '000000000000000000000002',
			'height': 250,
			'position': 2
		},
		{
			'columns': [
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000001',
					'width': 33.33,
					'position': 1
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000002',
					'width': 33.33,
					'position': 2
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000002',
					'width': 33.33,
					'position': 3
				}
			],
			'id': '000000000000000000000003',
			'height': 250,
			'position': 3
		},
		{
			'columns': [
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000001',
					'width': 25,
					'position': 1
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000002',
					'width': 25,
					'position': 2
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000003',
					'width': 25,
					'position': 3
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000002',
					'width': 25,
					'position': 3
				}
			],
			'id': '000000000000000000000004',
			'height': 250,
			'position': 4
		},
		{
			'columns': [
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000001',
					'width': 20,
					'position': 1
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000002',
					'width': 20,
					'position': 2
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000003',
					'width': 20,
					'position': 3
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000004',
					'width': 20,
					'position': 4
				},
				{
					'fill': {
						'color': '#FFFFFF',
						'opacity': 25
					},
					'id': '000000000000000000000005',
					'width': 20,
					'position': 5
				}
			],
			'id': '000000000000000000000005',
			'height': 250,
			'position': 5
		}
	];

	ngOnInit(): void {
		this.rows = this.rows.map(row => new BloxRow(row));
		
		this.rows.map(row => {
			row.height = (window.innerHeight - 10) / this.rows.length;
		});

		this.blox.changes.subscribe(rows => {
			debugger
		});
	};
}