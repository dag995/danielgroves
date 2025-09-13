
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
		RouteId(): "/" | "/about" | "/builder" | "/contact" | "/page-builder" | "/services" | "/who" | "/work";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/builder": Record<string, never>;
			"/contact": Record<string, never>;
			"/page-builder": Record<string, never>;
			"/services": Record<string, never>;
			"/who": Record<string, never>;
			"/work": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/builder" | "/builder/" | "/contact" | "/contact/" | "/page-builder" | "/page-builder/" | "/services" | "/services/" | "/who" | "/who/" | "/work" | "/work/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/favicon.ico" | "/font/PPPangramSans-Bold.eot" | "/font/PPPangramSans-Bold.otf" | "/font/PPPangramSans-Bold.ttf" | "/font/PPPangramSans-Bold.woff" | "/font/PPPangramSans-Bold.woff2" | "/font/PPPangramSans-Regular.eot" | "/font/PPPangramSans-Regular.otf" | "/font/PPPangramSans-Regular.ttf" | "/font/PPPangramSans-Regular.woff" | "/font/PPPangramSans-Regular.woff2" | "/font/PPRightGrotesk-TallMedium.eot" | "/font/PPRightGrotesk-TallMedium.otf" | "/font/PPRightGrotesk-TallMedium.ttf" | "/font/PPRightGrotesk-TallMedium.woff" | "/font/PPRightGrotesk-TallMedium.woff2" | "/images/.DS_Store" | "/images/diagrams/car_chassis.jpg" | "/images/diagrams/footrest.jpg" | "/images/diagrams/studs_into_bell.jpg" | "/images/logos/alfaholics.svg" | "/images/logos/bakersdolphin.svg" | "/images/logos/cotswoldedgegolfclub.svg" | "/images/logos/daneswood.svg" | "/images/logos/djinni.svg" | "/images/logos/doublestonesteel.svg" | "/images/logos/dvoriginal.svg" | "/images/logos/edava.svg" | "/images/logos/elevatebc.svg" | "/images/logos/infuserecruitment.svg" | "/images/logos/jetfi.svg" | "/images/logos/johndesmond.svg" | "/images/logos/kitchenmagic.svg" | "/images/logos/liguriajumping.svg" | "/images/logos/llansteffancastle.svg" | "/images/logos/lumleyengineering.svg" | "/images/logos/pivotl.svg" | "/images/logos/squeezed.svg" | "/images/logos/stratos.svg" | "/images/logos/tonythompson.svg" | "/images/logos/whsltd.svg" | "/images/logos/williamsmotorrepairs.svg" | "/images/photography/.DS_Store" | "/images/photography/3_4_window_catch_left.jpg" | "/images/photography/3_4_window_catch_pair.jpg" | "/images/photography/3_4_window_catch_right.jpg" | "/images/photography/6-Pot_brakes.jpg" | "/images/photography/6-Pot_brakes_01.jpg" | "/images/photography/6-Pot_brakes_02.jpg" | "/images/photography/6-Pot_brakes_03.jpg" | "/images/photography/TTR-FD-007A_01.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_01.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_02.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_03.jpg" | "/images/photography/alfaholics_idler_box_cashing_aluminium_lhd_04.jpg" | "/images/photography/alfaholics_titanium_steering_box_drop_arms_01.jpg" | "/images/photography/alfaholics_titanium_steering_box_drop_arms_02.jpg" | "/images/photography/ar_titaniuam_trailing_arms_01.jpg" | "/images/photography/carbon_fibre_bonnet_gt_early_02.jpg" | "/images/photography/carbon_fibre_bonnet_gt_early_03.jpg" | "/images/photography/carbon_fibre_bonnet_gt_early_04.jpg" | "/images/photography/carbon_fibre_bonnet_gt_late_02.jpg" | "/images/photography/carbon_fibre_bonnet_gt_late_03.jpg" | "/images/photography/carbon_fibre_bonnet_gt_late_04.jpg" | "/images/photography/carbon_fibre_bootlid_gt_02.jpg" | "/images/photography/carbon_fibre_bootlid_gt_03.jpg" | "/images/photography/carbon_fibre_bootlid_gt_04.jpg" | "/images/photography/door_glass_giulietta_sprint_01.jpg" | "/images/photography/double_adjustable_damper_01.jpg" | "/images/photography/double_adjustable_dampers_front_01.jpg" | "/images/photography/gta-r_ultraleggera_anti-roll_bar_02.jpg" | "/images/photography/gta_r_brake_kit_4-pot_front.jpg" | "/images/photography/gta_r_brake_kit_6-pot_front.jpg" | "/images/photography/gta_r_brake_kit_rear.jpg" | "/images/photography/hanging_pedals_01.jpg" | "/images/photography/lhd_floor_pedal_set_01.jpg" | "/images/photography/lumley_01.jpg" | "/images/photography/lumley_part_01.jpg" | "/images/photography/lumley_part_02.jpg" | "/images/photography/lumley_part_03.jpg" | "/images/photography/lumley_part_04.jpg" | "/images/photography/lumley_part_05.jpg" | "/images/photography/montreal_side_glass_04.jpg" | "/images/photography/montreal_side_glass_08.jpg" | "/images/photography/nord_engine_package.jpg" | "/images/photography/pedals_01.jpg" | "/images/photography/rear_light_spider_s3_01.jpg" | "/images/photography/saloon-r_glass_02.jpg" | "/images/photography/saloon-r_glass_04.jpg" | "/images/photography/small_spring_kit_01.jpg" | "/images/photography/stainless_steel_sport_manifold_01.jpg" | "/images/photography/stainless_steel_sport_manifold_02.jpg" | "/images/photography/steering_box_casing_lhd_01.jpg" | "/images/photography/steering_box_casing_lhd_02.jpg" | "/images/photography/steering_box_casing_lhd_03.jpg" | "/images/photography/steering_box_casing_lhd_04.jpg" | "/images/photography/t_bar_01.jpg" | "/images/photography/titanium_trailing_arms_01.jpg" | "/images/photography/titanium_trailing_arms_02.jpg" | "/images/photography/titanium_upright_01.jpg" | "/images/photography/titanium_upright_02.jpg" | "/images/photography/trailing_arm_02.jpg" | "/images/photography/ultraleggera_front_01.jpg" | "/images/photography/ultraleggera_rear_01.jpg" | "/images/photography/ultraleggera_suspension_front.jpg" | "/images/photography/ultraleggera_suspension_rear.jpg" | "/robots.txt" | "/styles.css" | string & {};
	}
}