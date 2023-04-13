/**
 * ApiDTO base class sent by all requests on FunixAPI and PacifistaAPI
 */
export default abstract class ApiDTO {
  public id?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
}
