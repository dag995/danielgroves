
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/builder" | "/contact" | "/page-builder" | "/work";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/builder": Record<string, never>;
			"/contact": Record<string, never>;
			"/page-builder": Record<string, never>;
			"/work": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/builder" | "/builder/" | "/contact" | "/contact/" | "/page-builder" | "/page-builder/" | "/work" | "/work/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.ico" | "/font/PPPangramSans-Bold.eot" | "/font/PPPangramSans-Bold.otf" | "/font/PPPangramSans-Bold.ttf" | "/font/PPPangramSans-Bold.woff" | "/font/PPPangramSans-Bold.woff2" | "/font/PPPangramSans-Regular.eot" | "/font/PPPangramSans-Regular.otf" | "/font/PPPangramSans-Regular.ttf" | "/font/PPPangramSans-Regular.woff" | "/font/PPPangramSans-Regular.woff2" | "/font/PPRightGrotesk-TallMedium.eot" | "/font/PPRightGrotesk-TallMedium.otf" | "/font/PPRightGrotesk-TallMedium.ttf" | "/font/PPRightGrotesk-TallMedium.woff" | "/font/PPRightGrotesk-TallMedium.woff2" | "/logos/alfaholics.svg" | "/logos/dvoriginal-01.svg" | "/logos/elevatebc.svg" | "/logos/kitchenmagic.svg" | "/logos/llansteffancastle.svg" | "/logos/squeezed.svg" | "/logos/stratos.svg" | "/logos/tonythompson.svg" | "/robots.txt" | "/styles.css" | string & {};
	}
}