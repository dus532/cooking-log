export interface CommonResponse<T> {
  code: number;
  message: string;
  payload: T;
}
