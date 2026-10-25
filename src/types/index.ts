export interface NavLinkItem {
  readonly label: string;
  readonly path: string;
}

export interface MetricItem {
  readonly label: string;
  readonly value: string;
  readonly subtitle?: string;
}

export interface RoomDetail {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly specs: readonly { label: string; value: string }[];
  readonly imageUrl: string;
}

export interface ResidenceUnit {
  readonly id: string;
  readonly title: string;
  readonly typology: string;
  readonly tagline: string;
  readonly description: string;
  readonly footprint: string;
  readonly footprintSqFt: string;
  readonly layout: string;
  readonly exposure: string;
  readonly terrace: string;
  readonly floorLevels: string;
  readonly startingPrice?: string;
  readonly ceilingHeight: string;
  readonly privateElevator: string;
  readonly kitchenFitout: string;
  readonly imageUrl: string;
  readonly featuredBadge?: string;
  readonly floorPlanHref: string;
}

export interface FloorPlanTypology {
  readonly id: string;
  readonly name: string;
  readonly series: string;
  readonly areaM2: number;
  readonly floorRange: string;
  readonly description: string;
  readonly features: readonly { title: string; desc: string }[];
  readonly cadastre: {
    readonly builtAreaM2: number;
    readonly builtAreaSqFt: number;
    readonly internalLivingM2: number;
    readonly internalPct: number;
    readonly terraceM2: number;
    readonly terracePct: number;
    readonly ceilingHeight: string;
    readonly exposure: string;
    readonly parkingBays: number;
  };
  readonly roomDimensions: readonly { name: string; areaM2: number }[];
  readonly materials: readonly { category: string; material: string }[];
  readonly isometricImageUrl: string;
  readonly blueprintImageUrl: string;
  readonly roomPreviews: readonly {
    readonly roomNumber: string;
    readonly title: string;
    readonly subtitle: string;
    readonly areaM2: number;
    readonly imageUrl: string;
  }[];
}

export interface AmenityItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly badge?: string;
}

export interface MonographImage {
  readonly id: string;
  readonly title: string;
  readonly caption: string;
  readonly category: string;
  readonly imageUrl: string;
}

export interface NearbyDestination {
  readonly number: string;
  readonly name: string;
  readonly description: string;
  readonly distanceTime: string;
}

export interface VipServiceItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ComparisonSpecRow {
  readonly specification: string;
  readonly oneBed: string;
  readonly twoBed: string;
  readonly threeBed: string;
  readonly penthouse: string;
}
