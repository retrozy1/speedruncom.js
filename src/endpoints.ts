import * as Enums from './enums.js';
import * as Interfaces from './interfaces.js';
import { AtLeastOne } from './types.js';

/**
 * Gets a leaderboard, with Players included.
 * `GetGameLeaderboard` can fetch twice as many runs, and also fetches Games, Platforms, Regions, Values, and Variables.
 */
export interface GetGameLeaderboard2 {

    /**
     * Filtering parameters.
     */
    params: Interfaces.LeaderboardParams;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;

    /**
     * The limit of Runs per page.
     * Max: 100
     * @default 100
     */
    limit?: number;
}

/**
 * Gets a leaderboard, with all relevant items included.
 * `GetGameLeaderboard2` only includes Runs and Players, and has half the maximum `limit`.
 */
export interface GetGameLeaderboard {

    /**
     * Filtering parameters.
     */
    params: Interfaces.LeaderboardParams;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;

    /**
     * The limit of Runs per page.
     * Max: 200
     * @default 100
     */
    limit?: number;
}

/**
 * Gets mostly leaderboard-related data of a game.
 * Both parameters function the same. If both are included, `gameId` will override.
 */
interface GetGameData_Base {

    /**
     * ID of the game.
     */
    gameId?: string;

    /**
     * Game page URL.
     */
    gameUrl?: string;
}

export type GetGameData = AtLeastOne<GetGameData_Base, 'gameId' | 'gameUrl'>;

/**
 * Gets miscellaneous data of a game.
 * Both parameters function the same. If both are included, `gameId` will override.
 */
interface GetGameSummary_Base {

    /**
     * ID of the game.
     */
    gameId?: string;

    /**
     * Game page URL.
     */
    gameUrl?: string;
}

export type GetGameSummary = AtLeastOne<GetGameSummary_Base, 'gameId' | 'gameUrl'>;

/**
 * Gets the world record history of a game leaderboard.
 */
export interface GetGameRecordHistory {

    /**
     * ID of the game. When exempted, both properties will be empty arrays.
     */
    //todo test if catId is fine on it's own, test more filters
    gameId?: string;
    categoryId?: string;
    values?: Interfaces.VariableValues[];
    emulator?: Enums.EmulatorFilter;
    obsolete?: Enums.ObsoleteFilter
}

/**
 * Searches for site items with a query.
 */
export interface GetSearch { // todo add platform

    /**
     * The text you are searching.
     */
    query?: string;

    /**
     * todo
     */
    favorExactMatches?: boolean;

    /**
     * Whether or not you are searching for games.
     */
    includeGames?: boolean;

    /**
     * Whether or not you are searching for news.
     */
    includeNews?: boolean;

    /**
     * Whether or not you are searching for pages.
     */
    includePages?: boolean;

    /**
     * Whether or not you are searching for series.
     */
    includeSeries?: boolean;

    /**
     * Whether or not you are searching for users.
     */
    includeUsers?: boolean;

    /**
     * Whether or not you are searching for challenges.
     */
    includeChallenges?: boolean;

    /**
     * The maximum amount of elements in each array.
     * @default 100
     * Max: 100
     */
    limit?: number;
}

/**
 * Gets non-obsolete latest runs.
 */
export interface GetLatestLeaderboard {
    gameId?: string;
    seriesId?: string;

    /**
     * The maximum amount of `runs` there will be in the response.
     * 
     * Warning: Obsolete runs are not included, but still count to the limit.
     * 
     * If this is `20` and 5 out of the 20 latest runs are obsolete, it will only return the 15 non-obsolete runs.
     * 
     * @default 25
     * Max: 99999
     */
    limit?: number;
}

/**
 * Gets a run.
 */
export interface GetRun {

    /**
     * ID of the run.
     */
    runId: string;
}

/**
 * Gets non-run related data of a user.
 */
export interface GetUserSummary {

    /**
     * Page URL of the user.
     */
    url: string;
}

/**
 * Gets comments posted by a user.
 */
export interface GetUserComments {

    /**
     * ID of the user.
     */
    userId: string;
}

export interface GetUserThreads {
    userId: string;
}

/**
 * Gets data for user popovers (when you hover over a username).
 */
export interface GetUserPopoverData {

    /**
     * ID of the user.
     */
    userId: string;
}

/**
 * Gets all Titles in the site.
 */
export interface GetTitleList {}

/**
 * Gets a Title.
 */
export interface GetTitle {

    /**
     * ID of the title.
     */
    titleId: string;
}

/**
 * Gets articles on the site.
 */
export interface GetArticleList {

    /**
     * Whether or not the article is published (verified by admin).
     */
    published?: boolean;

    /**
     * Whether or not the article is rejected.
     */
    rejected?: boolean;

    /**
     * A query to search for articles.
     */
    search?: string;

    /**
     * Tags an article has.
     */
    tags?: string[];

    /**
     * The target of an article, either being `news` or a page URL for site information articles.
     */
    target?: string;

    /**
     * The maximum amount of articles included in the response.
     * 
     * @default 500
     * Max: 500
     */
    limit?: number;
}

/**
 * Gets a specific article from the site.
 */
export interface GetArticle {
    id?: string;
    slug?: string;
}

/**
 * Gets a list of all games on the site.
 */
export interface GetGameList {
    seriesId?: string;
    platformId?: string;
    search?: string;
    orderType?: 1; //TODO
    limit?: number;
}

/**
 * Gets information for the home page. Often empty.
 */
export interface GetHomeSummary {}

/**
 * Gets a list of series on the site.
 */
export interface GetSeriesList {
    search?: string;
    orderType?: 1; //TODO
    limit?: number;
}

/**
 * Gets most information pertinent to a series.
 */
export interface GetSeriesSummary {
    seriesUrl?: string;
}

/**
 * Gets the top 3 runs from all levels under a level category.
 */
export interface GetGameLevelSummary {
    gameId: string;
    categoryId: string;
    dateFrom?: string;
    dateTo?: string;
    emulator?: Enums.EmulatorFilter;

    /**
     * If `categoryId: string` refers to a level category.
     */
    levelId?: string;
    obsolete?: Enums.ObsoleteFilter;
    platformId?: string;
    regionId?: string;
    timer?: Enums.TimingMethod;

    /**
     * If runs other than verified should be included.
     */
    verified?: Enums.RunStatus;
    values?: Interfaces.VariableValues[];
    video?: Enums.VideoFilter;
    page?: number;
    limit?: number;
}

/**
 * Gets a random Game.
 */
export interface GetGameRandom {}

/**
 * Gets all guides on a game.
 */
export interface GetGuideList {
    gameId: string;
}

/**
 * Get a specific guide by id.
 */
export interface GetGuide {  
    id: string;
}

/**
 * Get a list of game news articles.
 */
export interface GetNewsList {
    gameId: string;
}

/**
 * Get a game news article.
 */
export interface GetNews {
    id: string;
}

/**
 * Get a list of a game's resources.
 */
export interface GetResourceList {
    gameId: string;
}

/**
 * Gets a list of live runners.
 */
export interface GetStreamList {
    seriesId?: string;
    gameId?: string;
}

/**
 * Get threads on a forum.
 */
export interface GetThreadList {
    forumId: string;
}

/**
 * Gets a comment post's Thread and Forum.
 */
export interface GetThreadStateByCommentId {
    commentId: string;
}

/**
 * Get a specific Challenge.
 */
export interface GetChallenge {
    id: string;
}

/**
 * Get runs from a Challenge board.
 */
export interface GetChallengeLeaderboard {
    challengeId: string;
}

/**
 * Get a sitewide leaderboard for users who have won the most in Challenges.
 */
export interface GetChallengeGlobalRankingList {}

/**
 * Get a specific Challenge run (not the same as a normal run!)
 */
export interface GetChallengeRun {
    id: string;
}

/**
 * Get a user's runs for display on their profile.
 */
export interface GetUserLeaderboard {
    userId: string;
}

/**
 * Gets game and series moderation stats for any user.
 */
export interface GetUserModeration {
    userId: string;
}

/**
 * Get a list of comments on an item.
 */
export interface GetCommentList {
    itemId: string;

    /**
     * ItemType of the above `itemId: string;`
     */
    itemType: Enums.ItemType;
}

/**
 * Get a specific thread.
 */
export interface GetThread {
    id: string;
}

/**
 * Get a list of site-wide forums. When logged in, may include forums of followed games.
 */
export interface GetForumList {}

/**
 * Get static data for the site. Including all areas, colors, gameTypes, platforms, etc.
 */
export interface GetStaticData {}

/**
 * Logs in. If 2FA is enabled first provide `name` & `password` then check `tokenChallengeSent` and repeat w/ token.
 * Recommended to use `login(username password)` and `setToken(token)` for automatic Client authentication.
 */
export interface PutAuthLogin {
    name: string;
    password: string;

    /**
     * On second attempt if 2FA is enabled.
     */
    token: string;
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
 * If getting a game or series audit log, you must be a Super Moderator for it.
 * If getting your account's audit log, you cannot be banned.
 */
export interface GetAuditLogList { //todo check if you can do multiple

    /**
     * A single `EventType` string enum to filter by.
     */
    eventType?: Enums.EventType;
    page?: number;
    gameId?: string;
    seriesId?: string;

    /**
     * Every change that has happened to this user's account.
     */
    userId?: string;
}

/**
 * Get a game's settings. Must be at least a verifier on the game.
 */
export interface GetGameSettings {
    gameId: string;
}

/**
 * Set a game's settings. Must be at least a moderator on the game.
 */
export interface PutGameSettings {

    /**
     * Must be provided even though `settings` contains `id`.
     */
    gameId: string;
    settings: Interfaces.GameSettings;
}

/**
 * Creates a new category.
 */
export interface PutCategory {
    gameId: string;
    category: Interfaces.Category
}

/**
 * Updates an existing category.
 */
export interface PutCategoryUpdate {
    gameId: string;
    categoryId: string;
    category: Interfaces.Category;
}

/**
 * Archives a category.
 */
export interface PutCategoryArchive {
    gameId: string;
    categoryId: string;
}

/**
 * Restores an archived category.
 */
export interface PutCategoryRestore {
    gameId: string;
    categoryId: string;
}

/**
 * Re-orders categories.
 */
export interface PutCategoryOrder {  
    gameId: string;
    categoryId: string;
}

/**
 * Creates a new level.
 */
export interface PutLevel {
    gameId: string;
    level: Interfaces.Level;
}

/**
 * Updates an existing level.
 */
export interface PutLevelUpdate {
    gameId: string;
    levelId: string;
    level: Interfaces.Level;
}

/**
 * Archives a level.
 */
export interface PutLevelArchive {
    gameId: string;
    levelId: string;
}

/**
 * Restores an archived level.
 */
export interface PutLevelRestore {
    gameId: string;
    levelId: string;
}

/**
 * Re-orders levels.
 */
export interface PutLevelOrder {
    gameId: string;
    levelId: string;
}

/**
 * Creates a new variable.
 */
export interface PutVariable {
    gameId: string;
    variable: Interfaces.Variable;
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
export interface PutGameModerator {
    gameId: string;
    userId: string;
    level: Enums.GamePowerLevel;
}

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