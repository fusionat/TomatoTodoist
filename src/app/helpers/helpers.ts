export class Helpers {
  /**
   * name
   */
  public static getIdFromUrl(url: string): number {
    var id = url.match(/([\d]+)/g)[0];
    return parseInt(id);
  }
}