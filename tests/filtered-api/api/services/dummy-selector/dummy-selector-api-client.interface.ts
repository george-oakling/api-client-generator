/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface DummySelectorAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  get(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorViewModel>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorSettings>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  putSettings(
    args: {
      organizerTaskElementId: number,
      betriebSelectorSettings: models.DummySelectorSettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object>;

}
