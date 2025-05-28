import * as Enums from './enums';
import * as Interfaces from './interfaces';

export interface GetGameLeaderboard2 {
    gameId: string;
    categoryId: string;
    dateFrom?: string;
    dateTo?: string;
    emulator?: Enums.EmulatorFilter;
    levelId?: string;
    obsolete?: Enums.ObsoleteFilter;
    platformId: string[];
    regionId: string[];
    timer?: Enums.TimingMethod;
    verified?: Enums.RunStatus;
    values?: Interfaces.VariableValues[];
    video?: string;
    page?: number;
}
//TODO check the difference between the two
export interface GetGameLeaderboard {
    gameId: string;
    categoryId: string;
    dateFrom?: string;
    dateTo?: string;
    emulator?: Enums.EmulatorFilter;
    levelId: string;
    obsolete?: Enums.ObsoleteFilter;
    platformId: string[];
    regionId: string[];
    timer?: Enums.TimingMethod;
    verified?: Enums.RunStatus;
    values?: Interfaces.VariableValues[];
    video?: string;
    page?: number;
}

export interface GetGameData {
    gameId: string;
    gameUrl?: string;
}

export interface GetGameSummary {
    gameId: string;
    gameUrl?: string;
}

export interface GetGameRecordHistory {
    gameId: string;
    categoryId: string;
    values?: Interfaces.VariableValues[];
    emulator?: Enums.ObsoleteFilter[];
}

export interface GetSearch {
    query: string;
    favorExactMatches: boolean;
    includeGames: boolean;
    includeNews: boolean;
    includePages: boolean;
    includeSeries: boolean;
    includeUsers: boolean;
    includeChallenges: boolean;
    limit: number;
}

export interface GetLatestLeaderboard {
    gameId: string;
    seriesId: string;
    limit: number;
}

export interface GetRun {
    runId: string;
}

export interface GetUserSummary {
    url: string;
}

export interface GetUserComments {
    userId: string;
}

/**
 * Gets data for user popovers. Includes `userSocialConnectionList` `userStats` & `titleList`.
 */
export interface GetUserPopoverData {
    userId: string;
}

export interface GetTitle {
    titleId: string;
}

/**
 * Gets a list of articles on the site
 */
export interface GetArticleList {
    published?: boolean;
    rejected?: boolean;
    search?: string;
    tags?: string[];
    target?: string;
    limit?: string;
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
    seriesId?: string;
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
     * If `categoryId: string;` refers to a level category.
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
}

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
 * Gets a game series or user's audit log.
 */
export interface GetAuditLogList {

    /**
     * Type to filter by (default "") TODO
     */
    eventType: Enums.EventType;
    page: number; //TODO test if this is opt
    gameId?: string;
    seriesId?: string;

    /**
     * Every change that has happened to this user.
     */
    userId?: string;

    /**
     * Every change this user has made (Admin only)
     */
    actorId?: string;
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
 * Set the default value on a variable.
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
    // check all check base64 encoding of content
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
 * Get data for runs waiting in the moderation queue for a game.
 */
export interface GetModerationRuns {
    gameId: string;
    limit: number;
    page: number; // check if opt

    search?: string;
    verified?: Enums.RunStatus;
    verifiedById?: string;
    videoState: Enums.VideoState;
}

/**
 * Assigns a verifier to a run.
 */
export interface PutRunAssignee {
    assigneeId: string;
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
 */
export interface GetRunSettings {
    runId: string;
}

/**
 * Sets a run's settings OR submit a new run if `settings.runId` is exempted.
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
 * Gets the user's notifications.
 */
export interface GetNotifications {}

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
 * Must be your own.
 */
userUrl: string;
}

/**
 * Sets a user's settings.
 */
export interface PutUserSettings {

    /**
     * Must be your own.
     */
    userUrl: string;
    settings: Interfaces.UserSettings;
}

/**
 * Sets the run featured on a user's profile.
 */
export interface PutUserUpdateFeaturedRun {

/**
 * Must be your own.
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
     * Must be your own.
     */
    userUrl: string;
    groups: Interfaces.GameOrderGroup
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

/**
 * Get a list of games that a user has boosted.
 */
export interface GetUserGameBoostData {
    userId: string;
}

/**
 * Get a user's exported data.
 */
export interface intGetUserDataExport {
    userId: string;
}

/**
 * Reorder a user's followed games.
 */
export interface PutGameFollowerOrder {

    /**
     * List of `gameId`s in the order they should be in
     */
    gameId: string[];
    userId: string;
}

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
    itemId: string;
    itemType: Enums.ItemType;
    like: boolean;
}

/**
 * Updates commentable settings on an item.
 */
export interface PutCommentableSettings {
    itemId: string;
    itemType: Enums.ItemType;
    disabled: boolean;
    locked: boolean;
}

/**
 * Gets whether a set of threads have been read by the user.
 */
GetThreadReadStatus(PostRequest[r_GetThreadReadStatus]):
/**
 * List of thread IDs to get read status from.
 */
threadIds: string[]; 

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
export interface GetThemeSettings(PostRequest[r_GetThemeSettings]):

// One of:
userId: string;
gameId: string;
seriesId: string;

/**
 * Sets a user game or series' theme.
 */
export interface PutThemeSettings {
    // One of:
    userId?: string;
    gameId?: string;
    seriesId?: string;
    settings: Interfaces.ThemeSettings;
}

# Supporter
GetUserSupporterData(PostRequest[r_GetUserSupporterData]):
"""Gets supporter data for a user. # TODO: check auth


userUrl
"""
def __init__(self userUrl: string; **params) -> None:
super().__init__("GetUserSupporterData" r_GetUserSupporterData userUrl=userUrl **params)

PutUserSupporterNewSubscription(PostRequest[r_PutUserSupporterNewSubscription]):
"""Get data used to construct a payment form.

## Mandatory:
planKey: strEnum ("monthly" or "yearly")
userUrl
"""
def __init__(self planKey: SupportPlanPeriod userUrl: string; **params) -> None:
super().__init__("PutUserSuppoprterNewSubscription" r_PutUserSupporterNewSubscription planKey=planKey userUrl=userUrl **params)

PutGameBoostGrant(PostRequest[r_Empty]):
"""Adds a boost to a game.


gameId: string;
anonymous
"""
def __init__(self gameId: string;: string; anonymous: boolean; **params) -> None:
super().__init__("PutGameBoostGrant" r_Empty gameId: string;=gameId: string; anonymous=anonymous **params)

# To Be Sorted
PutAdvertiseContact(PostRequest[r_Empty]):
"""Sends a request for contact to SRC for collaboration.


name
company
email
message
"""
def __init__(self name: string; company: string; email: string; message: string; **params) -> None:
super().__init__("PutAdvertiseContact" r_Empty
                    name=name company=company email=email message=message **params)

GetTickets(PostRequest[r_GetTickets] BasePaginatedRequest[r_GetTickets]):
"""Gets tickets submitted by the user.


ticketId: string;s: list of ticket IDs to fetch
queues: list of `TicketQueueType` to filter by
types: list of `TicketType`
statuses: list of `TicketStatus`
requestorId: string;s: list of userId: string;s who requested the ticket. - this is meant for use by site admins
search: string;
"""
def __init__(
    self
    ticketId: string;s: list[string;] | None = None
    queues: list[TicketQueueType] | None = None
    types: list[TicketType] | None = None
    statuses: list[TicketStatus] | None = None
    requestorId: string;s: list[string;] | None = None
    search: string; | None = None
    **params
) -> None:
super().__init__("GetTickets" r_GetTickets ticketId: string;s=ticketId: string;s queues=queues
                    types=types statuses=statuses requestorId: string;s=requestorId: string;s
                    search=search **params)

def _combine_results(self pages: dict):
combined = self._combine_keys(pages ["ticketList"]
                                ["userList" "gameList" "userModCountList" "userRunCountList"])
combined["pagination"] = copy.copy(combined["pagination"])
combined["pagination"]["page"] = 0  # type: ignorecombined["pagination"]["page"] = 0  # type: ignore
return combined

GetSeriesSettings(PostRequest[r_GetSeriesSettings]):
"""Gets settings of a series.


seriesId: string;
"""
def __init__(self seriesId: string;: string; **params) -> None:
super().__init__("GetSeriesSettings" r_GetSeriesSettings seriesId: string;=seriesId: string; **params)

GetUserBlocks(PostRequest[r_GetUserBlocks]):
"""Gets blocks relevant to a user both as blocker and blockee.
"""
def __init__(self **params) -> None:
super().__init__("GetUserBlocks" r_GetUserBlocks **params)

PutUserBlock(PostRequest[r_Empty]):
"""Blocks or unblocks a user.

## Mandatory:
block
blockeeId: string;
"""
def __init__(self block: boolean; blockeeId: string;: string; **params) -> None:
super().__init__("PutUserBlock" r_Empty block=block blockeeId: string;=blockeeId: string; **params)

PutGame(PostRequest[r_PutGame]):  # TODO: needs param testing
"""Add a new game.


name
releaseDate


gameTypeId: string;s: list of `GameType`
baseGame: string; # If one of the GameTypes supports a baseGame then this can be included with a game id.

#
seriesId: string;
"""
def __init__(
    self
    name: string;
    releaseDate: int
    gameTypeId: string;s: list[GameType] | None = None
    baseGame: string; | None = None
    seriesId: string;: string; | None = None
    **params
) -> None:
super().__init__("PutGame" r_PutGame name=name releaseDate=releaseDate gameTypeId: string;s=gameTypeId: string;s
                    baseGame=baseGame seriesId: string;=seriesId: string; **params)

PutGameModerator(PostRequest[r_Empty]):
"""Add a moderator to a game.


gameId: string;
userId: string;: string;
level: GamePowerLevel (-1 = verifier 0 = mod 1 = supermod)
"""
def __init__(self gameId: string;: string; userId: string;: string;: string; level: GamePowerLevel **params) -> None:
super().__init__("PutGameModerator" r_Empty gameId: string;=gameId: string; userId: string;: string;=userId: string;: string; level=level **params)

PutGameModeratorDelete(PostRequest[r_Empty]):  # TODO: test `level` necessity & enum type
"""Remove a moderator from a game.


gameId: string;
userId: string;: string;
"""
def __init__(self gameId: string;: string; userId: string;: string;: string; **params) -> None:
super().__init__("PutGameModeratorDelete" r_Empty gameId: string;=gameId: string; userId: string;: string;=userId: string;: string; **params)

PutSeriesGame(PostRequest[r_Empty]):
"""Add an existing game to a series.


seriesId: string;
gameId: string;
"""
def __init__(self seriesId: string;: string; gameId: string;: string; **params) -> None:
super().__init__("PutSeriesGame" r_Empty seriesId: string;=seriesId: string; gameId: string;=gameId: string; **params)

PutSeriesGameDelete(PostRequest[r_Empty]):
"""Remove a game from a series. Does not delete the game.


seriesId: string;
gameId: string;
"""
def __init__(self seriesId: string;: string; gameId: string;: string; **params) -> None:
super().__init__("PutSeriesGameDelete" r_Empty seriesId: string;=seriesId: string; gameId: string;=gameId: string; **params)

PutTicket(PostRequest[r_PutTicket]):
"""Submits support tickets.


metadata: a JSON string of ticket data
type: `TicketType` # TODO: check TicketType vs TicketQueue Type
"""
def __init__(self metadata: string; type: TicketType **params) -> None:
super().__init__("PutTicket" r_PutTicket metadata=metadata type=type **params)

PutTicketNote(PostRequest[r_Ok]):
"""Adds a note/message to a ticket. When `isMessage` is `false` only admins can post or read the note.


ticketId: string;
note
isMessage: whether the note is a message to the user. `False` only permitted for admins.
"""
def __init__(self ticketId: string;: string; note: string; isMessage: boolean; **params) -> None:
super().__init__("PutTicketNote" r_Ok ticketId: string;=ticketId: string; note=note isMessage=isMessage **params)

PutUserSocialConnection(PostRequest[r_Empty]):  # TODO: verification?
"""Modifies a user's social connection.


userId: string;: string;
networkId: string;: see `NetworkId: string;`
value
"""
def __init__(self userId: string;: string;: string; networkId: string;: NetworkId: string; value: string; **params) -> None:
super().__init__("PutUserSocialConnection" r_Empty userId: string;: string;=userId: string;: string; networkId: string;=networkId: string; value=value **params)

PutUserSocialConnectionDelete(PostRequest[r_Empty]):
"""Remove a user's social connection.


userId: string;: string;
networkId: string;: see `NetworkId: string;`
"""
def __init__(self userId: string;: string;: string; networkId: string;: NetworkId: string; **params) -> None:
super().__init__("PutUserSocialConnectionDelete" r_Empty userId: string;: string;=userId: string;: string; networkId: string;=networkId: string; **params)

PutUserUpdatePassword(PostRequest[r_Ok]):
"""Update a user's password.


userUrl
oldPassword
newPassword
"""
def __init__(self userUrl: string; oldPassword: string; newPassword: string; **params) -> None:
super().__init__("PutUserUpdatePassword" r_Ok userUrl=userUrl oldPassword=oldPassword newPassword=newPassword **params)

PutUserUpdateEmail(PostRequest[r_PutUserUpdateEmail]):
"""Update a user's email.
First you send userUrl email and password. SRC will respond with `tokenChallengeSent: true`
Afterwards you send the above data again but this time with `token` set.


userUrl: string;
email: string;


token: string;
password: string; # Only optional if the user is authed as an admin
"""
def __init__(self userUrl: string; email: string; password: string; | None = None token: string; | None = None **params) -> None:
super().__init__("PutUserUpdateEmail" r_Ok userUrl=userUrl email=email password=password token=token **params)

PutUserUpdateName(PostRequest[r_Ok]):  # TODO: check what the response is
"""Update a user's name.


userUrl: string; # url: string;: string;: string; of the user to update
newName: string;
acceptTerms: boolean;
"""  # TODO: check if these are mandatory
def __init__(self userUrl: string; newName: string; acceptTerms: boolean; **params) -> None:
super().__init__("PutUserUpdateName" r_Empty userUrl=userUrl newName=newName acceptTerms=acceptTerms **params)

PutCommentDelete(PostRequest[r_Empty]):
"""Delete a comment.


commentId: string;
"""
def __init__(self commentId: string;: string; **params) -> None:
super().__init__("PutCommentDelete" r_Empty commentId: string;=commentId: string; **params)

PutCommentRestore(PostRequest[r_Empty]):
"""Restores a deleted comment


commentId: string;
"""
def __init__(self commentId: string;: string; **params) -> None:
super().__init__("PutCommentRestore" r_Empty commentId: string;=commentId: string; **params)

PutThread(PostRequest[r_PutThread]):
"""Create a new thread on a forum.


forumId: string;
name
body
"""
def __init__(self forumId: string;: string; name: string; body: string; **params) -> None:
super().__init__("PutThread" r_PutThread forumId: string;=forumId: string; name=name body=body **params)

PutThreadLocked(PostRequest[r_Empty]):
"""Lock or unlock a thread.


threadId: string;
locked
"""
def __init__(self threadId: string;: string; locked: boolean; **params) -> None:
super().__init__("PutThreadLocked" r_Empty threadId: string;=threadId: string; locked=locked **params)

PutThreadSticky(PostRequest[r_Empty]):
"""Sticky or un-sticky a thread.


threadId: string;
sticky
"""
def __init__(self threadId: string;: string; sticky: boolean; **params) -> None:
super().__init__("PutThreadSticky" r_Empty threadId: string;=threadId: string; sticky=sticky **params)

PutThreadDelete(PostRequest[r_Empty]):
"""Delete a thread.


threadId: string;
"""
def __init__(self threadId: string;: string; **params) -> None:
super().__init__("PutThreadDelete" r_Empty threadId: string;=threadId: string; **params)


















}