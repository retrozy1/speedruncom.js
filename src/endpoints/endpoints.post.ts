//Endpoints that would give the "Method Not Allowed" error when called with GET.

import * as Enums from '../enums.js';
import * as Interfaces from '../interfaces.js';
import { AtLeastOne } from '../types.js';
/**
 * Logs in by giving a `set-cookie` header in a response with a `PHPSESSID` cookie.
 * 
 * The first (or only) call only must have only the `name` and `password` params.
 * 
 * If the account has 2 factor authentication (indicated by `loggedIn = false` and `tokenChallengeSent = true`), a 5-digit code will be sent to the account's email. Then a second call with `name`, `password`, and `token` (the token provided in the email) will authenticate.
 */
export interface PutAuthLogin {

    /**
     * The username of the account.
     */
    name: string;

    /**
     * The password of the account.
     */
    password: string;

    /**
     * Five-digit token sent to the account's email after a call to an account that has 2 factor authentication.
     */
    token?: string;
}

// TODO PutAuthSignup

/**
 * Gets information about the current user's session.
 * Most notably `csrfToken`, required for `PutRunSettings`, `PutConversation`, `PutConversationMessage`, `PutConversationLeave` and `PutConversationReport.
 */
export interface GetSession {}

/**
 * todo test which credentials this is for
 */
export interface PutSessionPing {}

/**
 * Gets a game, series, or your account's audit log.
 * 
 * If getting a game or series audit log, you must be a Super Moderator for it.
 * 
 * If getting your account's audit log, your account must not be banned.
 * 
 * If multiple item ID parameters are called, it will fetch events concurrent to the items (ex. getting added as a moderator to the game).
 */
interface GetAuditLogList_Base {

    /**
     * An `EventType` of an event.
     */
    eventType?: Enums.EventType;

    /**
     * ID of a game.
     */
    gameId?: string;

    /**
     * ID of a series.
     */
    seriesId?: string;

    /**
     * ID of the user.
     */
    userId?: string;

    /**
     * The maximum amount of `AuditLogEntry`s to fetch.
     */
    limit?: number;

    /**
     * The audit log page, in relation to `limit`.
     */
    page?: number;
}

export type GetAuditLogList = AtLeastOne<GetAuditLogList_Base, 'gameId' | 'seriesId' | 'userId'>;

/**
 * Gets a game's settings.
 * 
 * You must be a verifier, moderator, or super moderator in the game.
 */
export interface GetGameSettings {

    /**
     * ID of the game.
     */
    gameId: string;
}

/**
 * Set a game's settings.
 * 
 * You must be a moderator or super moderator in a game.
 */
export interface PutGameSettings {

    /**
     * ID of the game.
     */
    gameId: string;

    /**
     * New game settings.
     */
    settings: Interfaces.GameSettings;
}

/**
 * Creates a new category.
 */
export interface PutCategory {

    /**
     * ID of the game.
     */
    gameId: string;

    /**
     * Settings for the new category.
     */
    category: Interfaces.Category;
}

/**
 * Updates an existing category.
 */
export interface PutCategoryUpdate {

    /**
     * ID of the game the category is on.
     */
    gameId: string;

    /**
     * ID of the category.
     */
    categoryId: string;

    /**
     * New settings for the category.
     */
    category: Interfaces.Category;
}

/**
 * Archives a category.
 */
export interface PutCategoryArchive {

    /**
     * ID of the game the category is on.
     */
    gameId: string;

    /**
     * ID of the category to archive.
     */
    categoryId: string;
}

/**
 * Restores an archived category.
 */
export interface PutCategoryRestore {

    /**
     * ID of the game that the category to restore is on.
     */
    gameId: string;

    /**
     * ID of the category to restore.
     */
    categoryId: string;
}

/**
 * Re-orders game categories.
 * 
 * You must be a moderator or super moderator of the game.
 */
export interface PutCategoryOrder {

    /**
     * ID of the game to order categories on.
     */
    gameId: string;

    /**
     * The new order of categories.
     */
    categoryIds: string[];
}

/**
 * Creates a new game Level.
 * 
 * You must be a moderator or super moderator of the game.
 */
export interface PutLevel {

    /**
     * ID of the game to put the level on.
     */
    gameId: string;

    /**
     * Settings for the new level.
     */
    level: Interfaces.NewLevel;
}

/**
 * Updates an existing level.
 * 
 * You must be a moderator or super moderator of the level's game.
 */
export interface PutLevelUpdate {

    /**
     * ID of the game that the level to update is on.
     */
    gameId: string;

    /**
     * ID of the level to update.
     */
    levelId: string;

    /**
     * New settings for the level.
     */
    level: Interfaces.Level;
}

/**
 * Archives a level.
 * 
 * You must be a moderator or super moderator of the level's game.
 */
export interface PutLevelArchive {

    /**
     * ID of the game that the level to archive is on.
     */
    gameId: string;

    /**
     * ID of the level to archive.
     */
    levelId: string;
}

/**
 * Restores an archived level.
 */
export interface PutLevelRestore {

    /**
     * ID of the game that the level to restore is on.
     * 
     * You must be a moderator or super moderator of the level's game.
     */
    gameId: string;

    /**
     * ID of the level to restore.
     */
    levelId: string;
}

/**
 * Re-orders levels in a game.
 * 
 * You must be a moderator or super moderator of the level's game.
 */
export interface PutLevelOrder {

    /**
     * ID of the game to order levels on.
     */
    gameId: string;

    /**
     * The new order of levels.
     */
    levelIds: string[];
}

/**
 * Creates a new variable.
 * 
 * You must be a moderator or super moderator of the variables's game.
 */
export interface PutVariable {

    /**
     * ID of the game that the variable to create is on.
     */
    gameId: string;

    /**
     * Settings for the new variable.
     */
    variable: Interfaces.Variable;

    /**
     * Values for the new variable.
     */
    values: Interfaces.Value[];
}

/**
 * Updates an existing variable.
 */
export interface PutVariableUpdate {
    gameId: string;
    variableId: string;

    /**
     * The new variable settings for the variable you are updating.
     */
    variable: Interfaces.Variable;
    values: Interfaces.Value[];
}

/**
 * Archives a variable.
 */
export interface PutVariableArchive {
    gameId: string;
    variableId: string;
}

/**
 * Restores an archived variable.
 */
export interface PutVariableRestore {
    gameId: string;
    variableId: string;
}

/**
 * Re-orders variables. NOTE: only all subcategories OR all annotations are taken at once.
 */
export interface PutVariableOrder {
    gameId: string;
    variableId: string;
}

/**
 * Puts a variable's default value on all runs in the variable's scope.
 */
export interface PutVariableApplyDefault {
    gameId: string;
    variableId: string;
}

/**
 * Posts a news item to a game.
 */
export interface PutNews {
    // TODO: check all
    gameId: string;
    userId: string;
    title: string;
    body: string;
    date: number;
}

/**
 * Updates a news item.
 */
export interface PutNewsUpdate {
    // TODO: check all
    newsId: string;
    userId: string;
    title: string;
    body: string;
    date: number;
}

/**
 * Deletes a news item.
 */
export interface PutNewsDelete {
    newsId: string;
}

/**
 * Posts a guide item to a game.
 */
export interface PutGuide {
    // TODO: check all
    gameId: string;
    userId: string;
    name: string;
    text: string;
    date: number;
}

/**
 * Updates a guide item.
 */
export interface PutGuideUpdate {
    // TODO: check all
    guideId: string;
    userId: string;
    name: string;
    text: string;
    date: number;
}

/**
 * Deletes a guide item.
 */
export interface PutGuideDelete {
    guideId: string;
}

/**
 * Posts a resource item to a game.
 */
export interface PutResource {
    // todo check all check base64 encoding of content and also test priority and make aliases
    gameId: string;

    /**
     * Manager ID
     */
    userId: string;

    /**
     * Comma-separated list of usernames
     */
    authorNames: string;
    date: number;
    name: string;
    description: string;
    type: Enums.ResourceType;
    link?: string;
    uploadFilename?: string;

    /**
     * Ex. data:application/json;base64examplebase64data
     */
    uploadContent?: string;
}

/**
 * Updates a resource item.
 */
export interface PutResourceUpdate {
    // check all check base64 encoding of content probably a `resourceId`
    gameId: string;

    /**
     * Manager ID
     */
    userId: string;

    /**
     * Comma-separated list of usernames
     */
    authorNames: string;
    date: number;
    name: string;
    description: string;
    type: Enums.ResourceType;
    link?: string;
    uploadFilename?: string;

    /**
     * Ex. data:application/json;base64examplebase64data
     */
    uploadContent?: string;
}

/**
 * Deletes a resource item.
 */
export interface PutResourceDelete {
    resourceId: string;
}

/**
 * Get moderation games and stats for the logged in user.
 * If the user is not logged in, the response is void.
 */
export interface GetModerationGames {}

/**
 * Get data for runs waiting in the moderation queue for a game.
 */
export interface GetModerationRuns {
    gameId: string;
    search?: string;
    verified?: Enums.RunStatus;
    verifiedById?: string;
    ideoState?: Enums.VideoState;
    page?: number;
    limit?: number;
}

/**
 * Assigns a verifier to a run.
 */
export interface PutRunAssignee {
    assigneeId: string;
    runId: string;
}

export interface PutRunDelete {
    gameId: string;
    runId: string;
}

/**
 * Assigns a verification level `RunStatus` to a run.
 */
export interface PutRunVerification {
    runId: string;
    verified: Enums.RunStatus;
}

/**
 * Assigns a video-at-risk state to a run.
 */
export interface PutRunVideoState {
    runId: string;
    videoState: Enums.VideoState;
}

/**
 * Gets a run's settings.
 * TODO: check specific details on who can use
 */
export interface GetRunSettings {
    runId: string;
}

/**
 * Sets a run's settings or submit a new run if `settings.runId` is exempted.
 */
export interface PutRunSettings {

    /**
     * May be retrieved by `GetSession`.
     */
    csrfToken: string;

    /**
     * Existing run settings if `runId: string; is not None` otherwise new run's settings.
     */
    settings: Interfaces.RunSettings;

    /**
     * If the run should be automatically verified after editing or not. - only works for game moderators.
     */
    autoverify: boolean;
}

/**
 * Gets conversations the user is involved in.
 */
export interface GetConversations {}

/**
 * Gets messages from a given conversation.
 */
export interface GetConversationMessages {
    conversationId: string;
}

/**
 * Creates a new conversation. May include several users.
 * If the conversation already exists the message is sent to the existing conversation.
 * NOTE: if the conversation exists but the user has left it they will _not_ rejoin the conversation.
 */
export interface PutConversation {

    /**
     * May be retrieved by `GetSession`.
     */
    csrfToken: string;
    /**
     * A list of other users to add to the conversation.
     */
    recipientIds: string[];

    /**
     * Content of the initial message.
     */
    text: string;
}

/**
 * Sends a message to a conversation.
 */
export interface PutConversationMessage {

    /**
     * May be retrieved by `GetSession`.
     */
    csrfToken: string;
    conversationId: string;
    text: string;
}

/**
 * Leaves a conversation.
 */
export interface PutConversationLeave {

    /**
     * May be retrieved by `GetSession`.
     */
    csrfToken: string;
    conversationId: string;
}

/**
 * Reports a conversation.
 */
export interface PutConversationReport {

    /**
     * May be retrieved by `GetSession`.
     */
    csrfToken: string;
    conversationId: string;

    /**
     * User description of the report
     */
    text: string;
}

// User notifications & follows

/**
 * Gets your notifications.
 */
export interface GetNotifications {}

/**
 * Marks all notifications as read.
 */
export interface PutNotificationsRead {}

/**
 * Follow a game.
 */
export interface PutGameFollower {
    gameId: string;

    /**
     * Your `userId`.
     */
    userId: string;
}

/**
 * Unfollow a game.
 */
export interface PutGameFollowerDelete {
    gameId: string;

    /**
     * Your `userId`.
     */
    userId: string;
}

/**
 * Follow a user.
 */
export interface PutUserFollower {
    userId: string;
}

/**
 * Unfollow a user.
 */
export interface PutUserFollowerDelete {
    userId: string;
}

// User settings

/**
 * Gets a user's settings.
 */
export interface GetUserSettings {

    /**
     * Your user page URL for your account.
     */
    userUrl: string;
}

/**
 * Sets a user's settings.
 */
export interface PutUserSettings {

    /**
     * Your user page URL for your account.
     */
    userUrl: string;
    settings: Interfaces.UserSettings;
}

/**
 * Sets the run featured on a user's profile.
 */
export interface PutUserUpdateFeaturedRun {

    /**
     * Your user page URL for your account.
     */
    userUrl: string;

    /**
     * If omitted clears the full game featured run.
     */
    fullRunId?: string;

    /**
     * If omitted clears the level featured run.
     */
    levelRunId?: string;
}

/**
 * Updates the order of games displayed on your profile.
 * Note that having multiple GameOrderGroups is a Supporter-only feature. The default group has fixed id of `default`.
 */
export interface PutUserUpdateGameOrdering {

    /**
     * Your user page URL for your account.
     */
    userUrl: string;
    groups: Interfaces.GameOrderGroup;
}

/**
 * Get a user's API key (the authorization method for API version 1).
 */
export interface GetUserApiKey {
    userId: string;

    /**
     * Returns a new API key if `true`.
     */
    regenerate: boolean;
}

export interface GetUserFollowers {
    userId: string;
    limit?: number;
    page?: number;
}

export interface GetUserFollowingGames {
    userId: string;
    limit?: number;
    page?: number;
}

export interface GetUserFollowingUsers {
    userId: string;
    limit?: number;
    page?: number;
}

/**
 * Get a list of games that a user has boosted.
 */
export interface GetUserGameBoostData {
    userId: string;
}

/**
 * Get a user's exported data.
 */
export interface GetUserDataExport {
    userId: string;
}

/**
 * Reorder a your account's followed games.
 */
export interface PutGameFollowerOrder {

    /**
     * List of `gameId`s in the order they should be in
     */
    gameId: string[];
    userId: string;
}

/**
 * Submits a site article.
 */
export interface PutArticleSubmission {
    title: string;
    summary: string;
    body: string;
    game?: string;
    publishTags?: string[];
} // todo coverImagePath?: string;

/**
 * Checks the comment permissions on an item.
 */
export interface GetCommentable {
    itemId: string;
    itemType: Enums.ItemType;
}

/**
 * Posts a comment on an item.
 */
export interface PutComment {
    itemId: string;
    itemType: Enums.ItemType;
    text: string;
}

/**
 * Adds or removes a like to a comment.
 */
export interface PutLike {

    /**
     * ID 0f the item you are liking or removing your like from.
     */
    itemId: string;

    /**
     * `ItemType` of the item you are liking or removing your like from.
     */
    itemType: Enums.ItemType;

    /**
     * Whether you are liking a comment (`true`) or removing your like from a comment (`false`).
     * 
     * `false` when exempted.
     */
    like?: boolean;
}

/**
 * Updates commentable settings on an item.
 */
export interface PutCommentableSettings {

    /**
     * ID of the item you are modifying the comment settings on.
     */
    itemId: string;

    /**
     * `itemType` of the item you are modifying the comment settings on.
     */
    itemType: Enums.ItemType;
    disabled: boolean;
    locked: boolean;
}

/**
 * Gets whether a set of threads have been read by the user.
 */
export interface GetThreadReadStatus {

    /**
     * List of thread IDs to get read status from.
     */
    threadIds: string[];
}

/**
 * Sets a thread as read by the user.
 */
export interface PutThreadRead {
    threadId: string;
}

// Forum actions

/**
 * Gets whether a set of forums have been read by the user.
 */
export interface GetForumReadStatus {

    /**
     * List of forum IDs to get read status from.
     */
    forumIds: string[];
}

/**
 * Gets a user game or series' theme.  # TODO: check noargs & series
 */
export interface GetThemeSettings {

    // One of:
    userId?: string;
    gameId?: string;
    seriesId?: string;
}

/**
 * Sets a user, game, or series' theme.
 */
export interface PutThemeSettings {
    // One of:
    userId?: string;
    gameId?: string;
    seriesId?: string;
    settings: Interfaces.ThemeSettings;
}

// Supporter

/**
 * Gets supporter data for your account.
 */
export interface GetUserSupporterData {

    /**
     * Your user page URL for your account.
     */
    userUrl: string;
}

/**
 * Get data used to construct a payment form.
 */
export interface PutUserSupporterNewSubscription {
    planKey?: Enums.SupportPlanPeriod
    userUrl?: string;
}

/**
 * Adds a boost to a game.
 */
export interface PutGameBoostGrant {
    gameId: string;
    anonymous: boolean;
}

// To Be Sorted

/**
 * Sends a request for contact to SRC for collaboration.
 */
export interface PutAdvertiseContact {
    name: string;
    company: string;
    email: string;
    message: string;
}

/**
 * Gets tickets submitted by you.
 */
export interface GetTickets {

    /**
     * list of ticket IDs to fetch
     */
    ticketIds: string[];

    /**
     * list of `TicketQueueType` to filter by
     */
    queues: Enums.TicketQueueType[];

    /**
     * list of `TicketType`
     */
    types: Enums.TicketType[];

    /**
     * list of `TicketStatus`
     */
    statuses: Enums.TicketStatus[];

    /**
     * List of `userId`s. Must only have your `userId`.
     */
    requestorIds: string[];
    search: string;
}

/**
 * Gets settings of a series.
 */

export interface GetSeriesSettings {
    seriesId: string;
}

/**
 * Gets blocks of you blocking a user and users blocking you.
 */
export interface GetUserBlocks {}

/**
 * Blocks or unblocks a user on your account.
 */
export interface PutUserBlock {

    /**
     * Whether or not you are blocking (`true`) or unblocking (`false`) the user.
     */
    block: boolean;

    /**
     * `userId` of you are blocking.
     */
    blockeeId: string;
}

/**
 * Add a new game.
 */
export interface PutGame { // TODO: needs param testing
    name: string;
    releaseDate: number;


    /**
     * list of `GameType`
     */
    gameTypeIds: string[];

    /**
     * If one of the GameTypes supports a baseGame then this can be included with a game id.
     */
    baseGame: string;
    seriesId: string;
}

/**
 * Add a moderator to a game.
 */
export interface PutGameModerator extends Interfaces.GameModerator {}

/**
 * Remove a moderator from a game.
 * TODO: test `level` necessity & enum type
 */
export interface PutGameModeratorDelete {
    gameId: string;
    userId: string;
}

/**
 * Add an existing game to a series.
 */
export interface PutSeriesGame {
    seriesId: string;
    gameId: string;
}

/**
 * Remove a game from a series.
 * 
 * Does not delete the game.
 */
export interface PutSeriesGameDelete {
    seriesId: string;
    gameId: string;
}

export interface PutSeriesModerator extends Interfaces.SeriesModerator {}

export interface PutSeriesModeratorUpdate extends Interfaces.SeriesModerator {}

export interface PutSeriesModeratorDelete extends Interfaces.SeriesModerator {}

export interface PutSeriesSettings {
    seriesId: string;
    settings: Interfaces.SeriesSettings;
}

/**
 * Submits support tickets.
 */
export interface PutTicket {

    /**
     * a JSON string of ticket data
     */
    metadata: string;

    /**
     * TODO: check TicketType vs TicketQueue Type
     */
    type: Enums.TicketType;
}

export interface PutTicketNote {
    ticketId: string;
    note: string;

    /**
     * Whether the note is a message to the user. `false` only permitted for admins.
     */
    isMessage: string;
}

/**
 * Modifies a user's social connection.
 * todo verification?
 */
export interface PutUserSocialConnection {
    userId: string;
    networkId: Enums.SocialConnection;
    value: string;
}

/**
 * Remove a user's social connection.
 */
export interface PutUserSocialConnectionDelete {
    userId: string;
    networkId: Enums.SocialConnection;
}

/**
 * Undocumented.
 */
export interface PutUserSocialConnectionSsoExchange {
    userId: string;
    provider: string;
    state: string;
    code: string;
}

/**
 * Update a user's password.
 */
export interface PutUserUpdatePassword {
    userUrl: string;
    oldPassword: string;
    newPassword: string;
}

/**
 * Update a user's email.
 * First you send userUrl email and password. SRC will respond with `tokenChallengeSent: true`
 * Afterwards you send the above data again but this time with `token` set.
 */
export interface PutUserUpdateEmail {

    /**
     * Your user page URL for your account.
     */
    userUrl: string;

    /**
     * The **new** email you want to have for the account.
     */
    email: string;
    token?: string;
    password: string;
}

/**
 * Updates your name.
 * You must wait 60 days after changing your name to change it again.
 */
export interface PutUserUpdateName {

    /**
     * Your user page URL for your account.
     */
    userUrl: string;
    newName: string;

    /**
     * Whether or not 
     */
    acceptTerms: boolean;
    // TODO: check if these are mandatory
}

export interface PutUserDelete {
    userUrl: string;
    password: string;
}

/**
 * Delete a comment.
 */
export interface PutCommentDelete {
    commentId: string;
}

/**
 * Restores a deleted comment
 */
export interface PutCommentRestore {
    commentId: string;
}

/**
 * Create a new thread on a forum.
 */
export interface PutThread {
    forumId: string;
    name: string;
    body: string;
}

/**
 * Locks or unlocks a thread.
 */
export interface PutThreadLocked {
threadId: string;
locked: boolean;
}

/**
 * Pins or un-pins a thread.
 */
export interface PutThreadSticky {
    threadId: string;
    sticky: boolean;
}

/**
 * Delete a thread.
 */
export interface PutThreadDelete {
    threadId: string;
}