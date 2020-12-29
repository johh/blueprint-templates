import { BufferGeometry } from '@downpourdigital/boxes';


const verts = [
	-1, -1,
	-1, 1,
	1, -1,
];

const uvs = [
	0, 0,
	0, 1,
	1, 0,
];


const geometry = new BufferGeometry({
	verts,
	attributes: {
		a_vUv: uvs,
	},
	stride: 2,
});


export default geometry;
