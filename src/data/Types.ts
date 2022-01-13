export type pageLocationType = "welcome" | "personal" | "github" | "xing";

export interface IPlant {
  plantKey: string;
  icon: string;
  x: number;
  y: number;
  size: number;
  mirrored: boolean;
  live: boolean;
}

export type dataAreaType = "experience" | "tech" | "example";
export type dataLayoutType = "block" | "grid";
export interface IDataLayout {
  dataLayoutType: dataLayoutType;
  dataRecords: IDataRecord[];
}
export type dataContentType = "headline" | "subheadline" | "text" | "block";
export interface IDataRecord {
  dataType: dataContentType;
  value: string | IDataRecord[];
}
