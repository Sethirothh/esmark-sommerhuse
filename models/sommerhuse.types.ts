export interface SummerCabinUserRating {
	average: number;
	best: number;
	count: number;
	worst: number;
}

export interface SummerCabinImage {
	url: string;
	tagIds?: string;
	sortOrder?: number;
	width: number;
	height: number;
}

export interface SummerCabinMeta {
	freeEndClean?: boolean;
	maxDiscountAmount?: number;
	maxDiscountPct?: number;
}


export type FacilityValue = string | number | boolean | null;

export type SummerCabinFacilities = {
  StarRating: number | string;
  NumberOfPersons?: number;
  Bedrooms?: number;
  NumberOfBathrooms?: number;
  HouseAreaSquareMeters?: number;
  YearBuilt?: number;
  Renovated?: number;
  PetsAllowed?: boolean;
  PetsMaxCount?: number;
  DistanceToSeaMeters?: number;
  DistanceToShoppingMeters?: number;
  [key: string]: FacilityValue | undefined;
};

export interface SummerCabinGeo {
	lat: number;
	lng: number;
}


export interface SummerCabin {
	id: string;
	name: string;
	city: string;
	title: string;
	postalCode: string;
	hasImages?: boolean;
	fromPrice?: number | null;
	fromFeePrice?: number | null;
	userRating?: SummerCabinUserRating | null;
	discountTotal?: number | null;
	discountPercentage?: number | null;
	images?: SummerCabinImage[] | null;
	meta?: SummerCabinMeta | null;
	address1: string;
	address2: string;
	description: string;
	price?: number | null;
	feePrice?: number | null;
	normalPrice?: number | null;
	facilities?: SummerCabinFacilities | null;
}

export interface SummerCabinExtended extends SummerCabin {
	lodgingId?: number | null;
	locationId?: number | null;
	longitude?: number | null;
	latitude?: number | null;
	rating?: number | null;
	streetId?: number | null;
	changeDay?: number | null;
	date?: string | null;
	dateTs?: string | number | null;
	relatedArrivalDate?: string | number | null;
	duration?: string | number | null;
	tags?: string[] | null;
	discountTags?: string[] | null;
	hasDiscount?: boolean | null;
	isValidLastMinute?: boolean | null;
	publishedDate?: string | null;
	publishedTs?: string | number | null;
	daysPublished?: number | null;
	sortWeight?: string | null;
	startYear?: number | null;
	availableYears?: number[] | null;
	_geo?: SummerCabinGeo | null;
	_generatedAt?: number | null;
	lan?: number | null;
}
