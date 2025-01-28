export class IsProductInactiveError extends Error {
  constructor() {
    super('Product not available.')
  }
}
