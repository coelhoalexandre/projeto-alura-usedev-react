export default interface HttpInterface {
  get<T>(url: string): Promise<T>;
}
