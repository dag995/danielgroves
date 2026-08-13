export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [~2],
		"/about": [3],
		"/blog": [4],
		"/blog/bristol-balloon-fiesta-2026": [5],
		"/blog/bristol-byzantine-260811": [6],
		"/blog/bristol-photography-260809": [7],
		"/blog/bristol-photography-260810": [8],
		"/blog/bristol-photography-260812": [9],
		"/builder": [10],
		"/contact": [11],
		"/diagrams": [12],
		"/page-builder": [13],
		"/pages": [~14],
		"/services": [15],
		"/services/photography": [16],
		"/services/technical-drawings": [17],
		"/who": [18],
		"/work": [~19]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';