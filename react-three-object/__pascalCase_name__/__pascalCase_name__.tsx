import * as React from 'react';

import {{pascalCase name}}Mesh from './{{pascalCase name}}Mesh';


const {
	useMemo,
	useEffect,
} = React;


export default function {{pascalCase name}}(): null {
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
}
