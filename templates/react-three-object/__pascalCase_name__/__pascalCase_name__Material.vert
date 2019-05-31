precision mediump float;

attribute vec2 uv;
attribute vec3 position;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;


// clang-format off
// clang-format on


void main() {
	vUv = uv;

	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
