export interface FilterValue {
  year: string;
  search: string;
  type: string;
  page: number;
}

export const defaultFilterValue: FilterValue = {
  year: '',
  search: 'Pokemon',
  type: '',
  page: 1,
};
