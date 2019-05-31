precision mediump float;

uniform sampler2D tDiffuse;

varying vec2 vUv;


// clang-format off
// clang-format on


void main() {
	vec4 c = texture2D( tDiffuse, vUv );

	gl_FragColor = c;
}
