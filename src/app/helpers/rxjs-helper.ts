import { flatMap } from "rxjs/operators";
import { of } from "rxjs";
import { GroupModels } from "./../models/group-models.model";
import { BaseModel } from "./../models/base.model";

export class RxJsHelper {
  public static setId = (): any => {
    return flatMap((obj: GroupModels<BaseModel>) => {
      obj.results.forEach((element: BaseModel) => {
        element.id = RxJsHelper.getIdFromUrl(element.url);
      });
      return of(obj);
    });
  };

  private static getIdFromUrl(url: string): number {
    var id = url.match(/([\d]+)/g)[0];
    return parseInt(id);
  }
}
