import React, {
	FunctionComponent,
} from 'react';
import { Material } from '@downpourdigital/boxes';
import { Renderable } from '@downpourdigital/boxes-react-bridge';

import geometry from './{{pascalCase name}}Geometry';
import vertexShader from './{{pascalCase name}}Material.vert';
import fragmentShader from './{{pascalCase name}}Material.frag';


const material = new Material({
	vertexShader,
	fragmentShader,
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
