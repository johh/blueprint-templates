precision mediump float;

varying vec2 v_vUv;

// clang-format off
// clang-format on

void main() {
	gl_FragColor = vec4( v_vUv, 1, 1 );
}
