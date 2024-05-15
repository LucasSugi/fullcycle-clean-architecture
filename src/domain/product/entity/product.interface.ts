import Notification from "../../@shared/notification/notification";
export default interface ProductInterface {
  get id(): string;
  get name(): string;
  get price(): number;
  changeName(name: string): void;
  changePrice(price: number): void;
  notification: Notification;
}
