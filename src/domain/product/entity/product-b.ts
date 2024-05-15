import ProductInterface from "./product.interface";
import NotificationError from "../../@shared/notification/notification.error";
import Notification from "../../@shared/notification/notification";

export default class ProductB implements ProductInterface {
  private _id: string;
  private _name: string;
  private _price: number;
  notification: Notification;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this.notification = new Notification()
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price * 2;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  changePrice(price: number): void {
    this._price = price;
    this.validate();
  }

  validate() {
    if(this._id.length === 0){
      this.notification.addError(
        {
          context: "product",
          message: "Id is required",
      }
      )
    }
    if(this._name.length === 0){
      this.notification.addError(
        {
          context: "product",
          message: "Name is required",
      }
      )
    }
    if(this._price < 0){
      this.notification.addError(
        {
          context: "product",
          message: "Price must be greater or equal to zero",
      }
      )
    }
  }
}
