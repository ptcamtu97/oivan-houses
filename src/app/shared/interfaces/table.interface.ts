export type SortDirection = 'asc' | 'desc' | '';

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

export interface HeaderTable {
  sortName: string;
  header: string;
}
