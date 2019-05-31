import {
	Group,
	PlaneBufferGeometry,
	Mesh,
} from 'three';

import {{pascalCase name}}Material from './{{pascalCase name}}Material';


export default class {{pascalCase name}}Mesh extends Group {
	private material = new {{pascalCase name}}Material();
	private geometry = new PlaneBufferGeometry();
	private mesh = new Mesh( this.geometry, this.material );

	constructor() {
		super();

	}

	dispose() {

	}
}
