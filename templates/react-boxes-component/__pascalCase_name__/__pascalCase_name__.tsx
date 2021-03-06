import React, {
	FunctionComponent,
} from 'react';
import { Material } from '@downpourdigital/boxes';
import { Renderable } from '@downpourdigital/boxes-react-bridge';

import geometry from './{{pascalCase name}}Geometry';
import shader from './{{pascalCase name}}Material.glslx';


const material = new Material({
	vertexShader: shader.vert,
	fragmentShader: shader.frag,
});


interface {{pascalCase name}}Props {

}

const {{pascalCase name}}: FunctionComponent<{{pascalCase name}}Props> = ( props ) => {
	return (
		<Renderable
			geometry={geometry}
			material={material}
		/>
	);
};

export default {{pascalCase name}};
