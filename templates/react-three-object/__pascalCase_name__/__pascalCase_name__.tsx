import React, {
	FunctionComponent,
	useMemo,
	useEffect,
} from 'react';

import {{pascalCase name}}Mesh from './{{pascalCase name}}Mesh';


const {{pascalCase name}}: FunctionComponent = () => {
	const mesh = useMemo( () => new {{pascalCase name}}Mesh(), []);

	useEffect(
		() => {
			// mount
			return () => {
				// unmount
			};
		},
		[],
	);

	return null;
};

export default {{pascalCase name}};
