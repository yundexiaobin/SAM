export interface ApiResponse<T> {
  /** token */
  succeeded: boolean;
  errors: string;
  data?: T;
}
