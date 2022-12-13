export interface UiState {
  isOpen: boolean;
  isError: boolean;
  message: string;
  isLoading?: boolean;
}

export interface OpenModalActionPayload {
  isError: boolean;
  message: string;
}
