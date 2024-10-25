class HttpError extends Error {
  constructor(message, statusCode) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const createNewHttpError = (statusCode, message) => {
  return new HttpError(message, statusCode);
};
