export type TTimezone = {
  city: string;
  timezone: string;
};

export type TButton = {
  children?: React.ReactNode;
  onClick: () => void;
  className: string;
  disabled?: boolean;
};
