
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
		RouteId(): "/" | "/about" | "/builder" | "/contact" | "/page-builder" | "/services" | "/work";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/builder": Record<string, never>;
			"/contact": Record<string, never>;
			"/page-builder": Record<string, never>;
			"/services": Record<string, never>;
			"/work": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/builder" | "/builder/" | "/contact" | "/contact/" | "/page-builder" | "/page-builder/" | "/services" | "/services/" | "/work" | "/work/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/favicon.ico" | "/font/PPPangramSans-Bold.eot" | "/font/PPPangramSans-Bold.otf" | "/font/PPPangramSans-Bold.ttf" | "/font/PPPangramSans-Bold.woff" | "/font/PPPangramSans-Bold.woff2" | "/font/PPPangramSans-Regular.eot" | "/font/PPPangramSans-Regular.otf" | "/font/PPPangramSans-Regular.ttf" | "/font/PPPangramSans-Regular.woff" | "/font/PPPangramSans-Regular.woff2" | "/font/PPRightGrotesk-TallMedium.eot" | "/font/PPRightGrotesk-TallMedium.otf" | "/font/PPRightGrotesk-TallMedium.ttf" | "/font/PPRightGrotesk-TallMedium.woff" | "/font/PPRightGrotesk-TallMedium.woff2" | "/images/.DS_Store" | "/images/photography/.DS_Store" | "/images/photography/3_4_window_catch_left.jpg" | "/images/photography/3_4_window_catch_pair.jpg" | "/images/photography/3_4_window_catch_right.jpg" | "/images/photography/6-Pot_brakes.jpg" | "/images/photography/6-Pot_brakes_01.jpg" | "/images/photography/6-Pot_brakes_02.jpg" | "/images/photography/6-Pot_brakes_03.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_01.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_02.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_03.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_04.jpg" | "/images/photography/alfaholics_titanium_steering_box_drop_arms_01.jpg" | "/images/photography/alfaholics_titanium_steering_box_drop_arms_02.jpg" | "/images/photography/double_adjustable_damper_01.jpg" | "/images/photography/double_adjustable_dampers_front_01.jpg" | "/images/photography/gta-r_ultraleggera_anti-roll_bar_02.jpg" | "/images/photography/gta_r_brake_kit_4-pot_front.jpg" | "/images/photography/gta_r_brake_kit_6-pot_front.jpg" | "/images/photography/gta_r_brake_kit_rear.jpg" | "/images/photography/hanging_pedals_01.jpg" | "/images/photography/lhd_floor_pedal_set_01.jpg" | "/images/photography/nord_engine_package.jpg" | "/images/photography/pedals_01.jpg" | "/images/photography/small_spring_kit_01.jpg" | "/images/photography/stainless_steel_sport_manifold_01.jpg" | "/images/photography/stainless_steel_sport_manifold_02.jpg" | "/images/photography/steering_box_casing_lhd_01.jpg" | "/images/photography/steering_box_casing_lhd_02.jpg" | "/images/photography/steering_box_casing_lhd_03.jpg" | "/images/photography/steering_box_casing_lhd_04.jpg" | "/images/photography/t_bar_01.jpg" | "/images/photography/titanium_trailing_arms_01.jpg" | "/images/photography/titanium_trailing_arms_02.jpg" | "/images/photography/titanium_upright_01.jpg" | "/images/photography/titanium_upright_02.jpg" | "/images/photography/trailing_arm_02.jpg" | "/images/photography/ultraleggera_front_01.jpg" | "/images/photography/ultraleggera_rear_01.jpg" | "/images/photography/ultraleggera_suspension_front.jpg" | "/images/photography/ultraleggera_suspension_rear.jpg" | "/logos/alfaholics.svg" | "/logos/bakersdolphin.svg" | "/logos/cotswoldedgegolfclub.svg" | "/logos/daneswood.svg" | "/logos/djinni.svg" | "/logos/doublestonesteel.svg" | "/logos/dvoriginal.svg" | "/logos/edava.svg" | "/logos/elevatebc.svg" | "/logos/infuserecruitment.svg" | "/logos/jetfi.svg" | "/logos/johndesmond.svg" | "/logos/kitchenmagic.svg" | "/logos/liguriajumping.svg" | "/logos/llansteffancastle.svg" | "/logos/lumleyengineering.svg" | "/logos/pivotl.svg" | "/logos/squeezed.svg" | "/logos/stratos.svg" | "/logos/tonythompson.svg" | "/logos/whsltd.svg" | "/logos/williamsmotorrepairs.svg" | "/robots.txt" | "/styles.css" | string & {};
	}
}