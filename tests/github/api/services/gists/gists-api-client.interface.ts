/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface GistsAPIClientInterface {

  /**
   * List the authenticated user's gists or if called anonymously, this will
   * return all public gists.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getGists(
    args: {
      since?: string,  // (optional) Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gists>;

  /**
   * Create a gist.
   * Response generated for [ 201 ] HTTP response code.
   */
  postGists(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PostGist,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gist>;

  /**
   * List all public gists.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsPublic(
    args: {
      since?: string,  // (optional) Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gists>;

  /**
   * List the authenticated user's starred gists.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsStarred(
    args: {
      since?: string,  // (optional) Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gists>;

  /**
   * Delete a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteGistsId(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single gist.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsId(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gist>;

  /**
   * Edit a gist.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchGistsId(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PatchGist,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gist>;

  /**
   * List comments on a gist.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsIdComments(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comments>;

  /**
   * Create a commen
   * Response generated for [ 201 ] HTTP response code.
   */
  postGistsIdComments(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comment>;

  /**
   * Delete a comment.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteGistsIdCommentsCommentId(
    args: {
      id: number,  // Id of gist.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsIdCommentsCommentId(
    args: {
      id: number,  // Id of gist.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comment>;

  /**
   * Edit a comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchGistsIdCommentsCommentId(
    args: {
      id: number,  // Id of gist.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Comment,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comment>;

  /**
   * Fork a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  postGistsIdForks(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Unstar a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteGistsIdStar(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Check if a gist is starred.
   * Response generated for [ 204 ] HTTP response code.
   */
  getGistsIdStar(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Star a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  putGistsIdStar(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

}
