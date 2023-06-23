
export interface Shift {
  items: ShiftItem[];
  name: string;
}
export interface ShiftItem {
  startTime: string;
  endTime: string;
  description: string;
}
