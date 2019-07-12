/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface OrgsAPIClientInterface {

  /**
   * Get an Organization.
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrgsOrg(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Organization>;

  /**
   * Edit an Organization.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchOrgsOrg(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PatchOrg,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Organization>;

  /**
   * List public events for an organization.
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrgsOrgEvents(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * List issues.
   * List all issues for a given organization for the authenticated user.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrgsOrgIssues(
    args: {
      org: string,  // Name of organisation.
      filter: string,  // Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see 
      state: string,
      labels: string,  // String list of comma separated Label names. Example - bug,ui,@high.
      sort: string,
      direction: string,
      since?: string,  // (optional) Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issues>;

  /**
   * Members list.
   * List all users who are members of an organization. A member is a user tha
   * belongs to at least 1 team in the organization. If the authenticated user
   * is also an owner of this organization then both concealed and public members
   * will be returned. If the requester is not an owner of the organization the
   * query will be redirected to the public members list.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrgsOrgMembers(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users>;

  /**
   * Remove a member.
   * Removing a user from this list will remove them from all teams and they
   * will no longer have any access to the organization's repositories.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteOrgsOrgMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Check if a user is, publicly or privately, a member of the organization.
   * Response generated for [ 204 ] HTTP response code.
   */
  getOrgsOrgMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Public members list.
   * Members of an organization can choose to have their membership publicized
   * or not.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrgsOrgPublicMembers(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users>;

  /**
   * Conceal a user's membership.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteOrgsOrgPublicMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Check public membership.
   * Response generated for [ 204 ] HTTP response code.
   */
  getOrgsOrgPublicMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Publicize a user's membership.
   * Response generated for [ 204 ] HTTP response code.
   */
  putOrgsOrgPublicMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * List repositories for the specified org.
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrgsOrgRepos(
    args: {
      org: string,  // Name of organisation.
      type?: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repos>;

  /**
   * Create a new repository for the authenticated user. OAuth users must supply
   * repo scope.
   * 
   * Response generated for [ 201 ] HTTP response code.
   */
  postOrgsOrgRepos(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PostRepo,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repos>;

  /**
   * List teams.
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrgsOrgTeams(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Teams>;

  /**
   * Create team.
   * In order to create a team, the authenticated user must be an owner of organization.
   * 
   * Response generated for [ 201 ] HTTP response code.
   */
  postOrgsOrgTeams(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.OrgTeamsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Team>;

}
