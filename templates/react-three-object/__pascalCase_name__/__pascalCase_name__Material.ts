import {
	RawShaderMaterial,
} from 'three';

import vertexShader from './{{pascalCase name}}Material.vert';
import fragmentShader from './{{pascalCase name}}Material.frag';


export default class {{ pascalCase name }}Material extends RawShaderMaterial {
	constructor() {
		const uniforms = {
			tDiffuse: {
				value: null,
			},
		};

		super({
			vertexShader,
			fragmentShader,
			uniforms,
		});
	}
}
