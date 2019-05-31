import {
	Group,
} from 'three';

import {{pascalCase name}}Material from './{{pascalCase name}}Material';


export default class {{pascalCase name}} extends Group {
	private material = new {{pascalCase name}}Material();

	constructor() {
		super();
	}

	dispose() {

	}
}
