/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface FeedsAPIClientInterface {

  /**
   * List Feeds.
   * GitHub provides several timeline resources in Atom format. The Feeds API
   * 
   *  lists all the feeds available to the authenticating user.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getFeeds(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Feeds>;

}
