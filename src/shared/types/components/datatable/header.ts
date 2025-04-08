export type TableHeaderProps = {
  title?: string;
  showHeader: boolean;
  hasSearch?: boolean;
  searchText?: string;
  setSearchText?: (searchText: string) => void;

  actionButtonLabel?: string;
  onActionButtonClick?: VoidFunction;
};
