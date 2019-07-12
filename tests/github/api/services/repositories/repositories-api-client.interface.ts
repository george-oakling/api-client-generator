/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface RepositoriesAPIClientInterface {

  /**
   * List all public repositories.
   * This provides a dump of every public repository, in the order that they
   * were created.
   * Note: Pagination is powered exclusively by the since parameter. is the
   * Link header to get the URL for the next page of repositories.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getRepositories(
    args: {
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repositories>;

}
