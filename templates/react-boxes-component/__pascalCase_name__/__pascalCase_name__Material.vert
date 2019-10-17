precision mediump float;

attribute vec3 a_vPosition;
attribute vec2 a_vUv;

varying vec2 v_vUv;

uniform mat4 u_mModel;
uniform mat4 u_mView;
uniform mat4 u_mProjection;

// clang-format off
// clang-format on

void main() {
	v_vUv = a_vUv;
	gl_Position = u_mProjection * u_mView * u_mModel * vec4( a_vPosition, 1 );
}
