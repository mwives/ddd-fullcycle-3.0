export class OrderItem {
  private _id: string
  private _productId: string
  private _name: string
  private _price: number
  private _quantity: number

  constructor(
    id: string,
    productId: string,
    name: string,
    price: number,
    quantity: number
  ) {
    this._id = id
    this._productId = productId
    this._name = name
    this._price = price
    this._quantity = quantity
    this.validate()
  }

  get price() {
    return this._price
  }

  get quantity() {
    return this._quantity
  }

  validate() {
    if (!this._id) {
      throw new Error('ID is required')
    }
    if (!this._productId) {
      throw new Error('Product ID is required')
    }
    if (!this._name) {
      throw new Error('Name is required')
    }
    if (this._price <= 0) {
      throw new Error('Price must be greater than 0')
    }
    if (this._quantity <= 0) {
      throw new Error('Quantity must be greater than 0')
    }
  }

  orderItemTotal() {
    return this._price * this._quantity
  }
}
