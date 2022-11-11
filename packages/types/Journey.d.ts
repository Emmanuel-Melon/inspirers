export interface JourneyAttrs {
  userId?: string;
  createdAt?: Date;
  active?: boolean;
  name?: string;
  avatar?: string;
  current: boolean;
}

export interface JourneySettings {
  color: string;
  privacy: "Private" | "Public" | "Shared";
}

interface JourneyStats {
  name: string;
  type: string;
  id: number;
  color: string;
  number: number;
}
