/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface NotificationsAPIClientInterface {

  /**
   * List your notifications.
   * List all notifications for the current user, grouped by repository.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotifications(
    args: {
      all?: boolean,  // (optional) True to show notifications marked as read.
      participating?: boolean,  // (optional) True to show only notifications in which the user is directly participating or mentioned. 
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications>;

  /**
   * Mark as read.
   * Marking a notification as "read" removes it from the default view on GitHub.com.
   * 
   * Response generated for [ 205 ] HTTP response code.
   */
  putNotifications(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.NotificationMarkRead,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * View a single thread.
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotificationsThreadsId(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications>;

  /**
   * Mark a thread as read
   * Response generated for [ 205 ] HTTP response code.
   */
  patchNotificationsThreadsId(
    args: {
      id: number,  // Id of thread.
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
   * Delete a Thread Subscription.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
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
   * Get a Thread Subscription.
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscription>;

  /**
   * Set a Thread Subscription.
   * This lets you subscribe to a thread, or ignore it. Subscribing to a thread
   * is unnecessary if the user is already subscribed to the repository. Ignoring
   * a thread will mute all future notifications (until you comment or get @mentioned).
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  putNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PutSubscription,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscription>;

}
