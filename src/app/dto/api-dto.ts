/**
 * ApiDTO base class sent by all requests on FunixAPI and PacifistaAPI
 */
export abstract class ApiDTO {
  public id: string | undefined;
  public createdAt: Date | undefined;
  public updatedAt: Date | undefined;
}
