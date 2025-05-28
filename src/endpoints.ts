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


GetConversationMessages(PostRequest[r_GetConversationMessages]):
"""Gets messages from a given conversation.


conversationId: string;
"""
def __init__(self conversationId: string; **params) -> None:
super().__init__("GetConversationMessages" r_GetConversationMessages conversationId: string;=conversationId: string; **params)

PutConversation(PostRequest[r_PutConversation]):
"""Creates a new conversation. May include several users.
If the conversation already exists the message is sent to the existing conversation.

NOTE: if the conversation exists but the user has left it they will _not_ rejoin the conversation.


csrfToken: May be retrieved by `GetSession`.
recipientId: string;s: A list of other users to add to the conversation.
text: Content of the initial message.
"""
def __init__(self csrfToken: string; recipientId: string;s: list[string;] text: string; **params) -> None:
super().__init__("PutConversation" r_PutConversation csrfToken=csrfToken recipientId: string;s=recipientId: string;s text=text **params)

PutConversationMessage(PostRequest[r_PutConversationMessage]):
"""Sends a message to a conversation.


csrfToken: May be retrieved by `GetSession`.
conversationId: string;
text
"""
def __init__(self csrfToken: string; conversationId: string;: string; text: string; **params) -> None:
super().__init__("PutConversationMessage" r_PutConversationMessage csrfToken=csrfToken conversationId: string;=conversationId: string; text=text **params)

PutConversationLeave(PostRequest[r_Empty]):
"""Leaves a conversation.


csrfToken: May be retrieved by `GetSession`.
conversationId: string;
"""
def __init__(self csrfToken: string; conversationId: string;: string; **params) -> None:
super().__init__("PutConversationLeave" r_Empty csrfToken=csrfToken conversationId: string;=conversationId: string; **params)

PutConversationReport(PostRequest[r_Ok]):
"""Reports a conversation.


csrfToken: May be retrieved by `GetSession`.
conversationId: string;
text: User description of the report
"""
def __init__(self csrfToken: string; conversationId: string;: string; text: string; **params) -> None:
super().__init__("PutConversationReport" r_Ok csrfToken=csrfToken conversationId: string;=conversationId: string; text=text **params)

# User notifications & follows
GetNotifications(PostRequest[r_GetNotifications] BasePaginatedRequest[r_GetNotifications]):
"""Gets the user's notifications.
"""
def __init__(self **params) -> None:
super().__init__("GetNotifications" r_GetNotifications **params)

def _combine_results(self pages: dict[int r_GetNotifications]) -> r_GetNotifications:
combined = self._combine_keys(pages ["notifications"] [])
combined["pagination"] = copy.copy(combined["pagination"])
combined["pagination"]["page"] = 0  # type: ignorecombined["pagination"]["page"] = 0  # type: ignore
return combined

PutGameFollower(PostRequest[r_Empty]):
"""Follow a game.


gameId: string;
userId: string;: string;: own userId: string;: string;
"""
def __init__(self gameId: string;: string; userId: string;: string;: string; **params) -> None:
super().__init__("PutGameFollower" r_Empty gameId: string;=gameId: string; userId: string;: string;=userId: string;: string; **params)

PutGameFollowerDelete(PostRequest[r_Empty]):
"""Unfollow a game.


gameId: string;
userId: string;: string;: own userId: string;: string;
"""
def __init__(self gameId: string;: string; userId: string;: string;: string; **params) -> None:
super().__init__("PutGameFollowerDelete" r_Empty gameId: string;=gameId: string; userId: string;: string;=userId: string;: string; **params)

PutUserFollower(PostRequest[r_Empty]):
"""Follow a user.


userId: string;: string;
"""
def __init__(self userId: string;: string;: string; **params) -> None:
super().__init__("PutUserFollower" r_Empty userId: string;: string;=userId: string;: string; **params)

PutUserFollowerDelete(PostRequest[r_Empty]):
"""Unfollow a user.


userId: string;: string;
"""
def __init__(self userId: string;: string;: string; **params) -> None:
super().__init__("PutUserFollowerDelete" r_Empty userId: string;: string;=userId: string;: string; **params)

# User settings
GetUserSettings(PostRequest[r_GetUserSettings]):
"""Gets a user's settings.


userUrl: must be your own unless you are a site moderator.
"""
def __init__(self userUrl: string; **params) -> None:
super().__init__("GetUserSettings" r_GetUserSettings userUrl=userUrl **params)

PutUserSettings(PostRequest[r_PutUserSettings]):
"""Sets a user's settings.


userUrl: must be your own unless you are a site moderator.
settings
"""
def __init__(self userUrl: string; settings: UserSettings **params) -> None:
super().__init__("PutUserSettings" r_PutUserSettings userUrl=userUrl settings=settings **params)

PutUserUpdateFeaturedRun(PostRequest[r_Empty]):
"""Sets the run featured on a user's profile.


userUrl: must be your own unless you are an admin.
fullRunId: string;: If omitted clears the full game featured run.
levelRunId: string;: If omitted clears the level featured run
"""
def __init__(self userUrl: string; fullRunId: string;: string; | None = None levelRunId: string;: string; | None = None **params) -> None:
super().__init__("PutUserUpdateFeaturedRun" r_Empty userUrl=userUrl fullRunId: string;=fullRunId: string; levelRunId: string;=levelRunId: string; **params)

PutUserUpdateGameOrdering(PostRequest[r_Empty]):
"""Updates the order of games displayed on your profile.

Note that having multiple GameOrderGroups is a Supporter-only feature. The default group has fixed id "default".


userUrl: must be your own unless you are an admin.
groups: Groups to display on the profile.
"""
def __init__(self userUrl: string; groups: list[GameOrderGroup] **params) -> None:
super().__init__("PutUserUpdateGameOrdering" r_Empty userUrl=userUrl groups=groups **params)

GetUserApiKey(PostRequest[r_GetUserApiKey]):
"""Get a user's API key.


userId: string;: string;


regenerate: boolean; # Returns a new API key if True
"""
def __init__(self userId: string;: string;: string; regenerate: boolean; | None = None **params) -> None:
super().__init__("GetUserApiKey" r_GetUserApiKey userId: string;: string;=userId: string;: string; regenerate=regenerate **params)

GetUserGameBoostData(PostRequest[r_GetUserGameBoostData]):
"""Get a list of games that a user has boosted.


userId: string;: string;
"""
def __init__(self userId: string;: string;: string; **params) -> None:
super().__init__("GetUserGameBoostData" r_GetUserGameBoostData userId: string;: string;=userId: string;: string; **params)

GetUserDataExport(PostRequest[r_GetUserDataExport]):
"""Get a user's exported data.


userId: string;: string;
"""
def __init__(self userId: string;: string;: string; **params) -> None:
super().__init__("GetUserDataExport" r_GetUserDataExport userId: string;: string;=userId: string;: string; **params)

PutGameFollowerOrder(PostRequest[r_Empty]):
"""Reorder a user's followed games.


gameId: string;s: list of game Id: string;s in the order they should be in
userId: string;: string;
"""
def __init__(self gameId: string;s: list[string;] userId: string;: string;: string; **params) -> None:
super().__init__("PutGameFollowerOrder" r_Empty gameId: string;s=gameId: string;s userId: string;: string;=userId: string;: string; **params)

# PUT IT HERE

# Comment Actions
GetCommentable(PostRequest[r_GetCommentable]):
"""Checks the comment permissions on an item.


itemId: string;
itemType
"""
def __init__(self itemId: string;: string; itemType: ItemType **params) -> None:
super().__init__("GetCommentable" r_GetCommentable itemId: string;=itemId: string; itemType=itemType **params)

PutComment(PostRequest[r_Empty]):
"""Posts a comment on an item.


itemId: string;
itemType
text
"""
def __init__(self itemId: string;: string; itemType: ItemType text: string; **params) -> None:
super().__init__("PutComment" r_Empty itemId: string;=itemId: string; itemType=itemType text=text **params)

PutLike(PostRequest[r_PutLike]):
"""Adds or removes a like to a comment.


itemId: string;
itemType
like
"""
def __init__(self itemId: string;: string; itemType: ItemType like: boolean; **params) -> None:
super().__init__("PutLike" r_PutLike itemId: string;=itemId: string; itemType=itemType like=like **params)

PutCommentableSettings(PostRequest[r_Empty]):
"""Updates commentable settings on an item.


itemId: string;
itemType
disabled
locked
"""
def __init__(self itemId: string;: string; itemType: ItemType **params) -> None:
super().__init__("PutCommentableSettings" r_Empty itemId: string;=itemId: string; itemType=itemType **params)

# Thread Actions
GetThreadReadStatus(PostRequest[r_GetThreadReadStatus]):
"""Gets whether a set of threads have been read by the user.


threadId: string;s: list of IDs
"""
def __init__(self threadId: string;s: list[string;] **params) -> None:
super().__init__("GetThreadReadStatus" r_GetThreadReadStatus threadId: string;s=threadId: string;s **params)

PutThreadRead(PostRequest[r_Empty]):
"""Sets a thread as read by the user.


threadId: string;
"""
def __init__(self threadId: string;: string; **params) -> None:
super().__init__("PutThreadRead" r_Empty threadId: string;=threadId: string; **params)

# Forum actions
GetForumReadStatus(PostRequest[r_GetForumReadStatus]):
"""Gets whether a set of forums have been read by the user.


forumId: string;s: list of IDs
"""
def __init__(self forumId: string;s: list[string;] **params) -> None:
super().__init__("GetForumReadStatus" r_GetForumReadStatus forumId: string;s=forumId: string;s **params)

# Theme actions
GetThemeSettings(PostRequest[r_GetThemeSettings]):
"""Gets a user game or series' theme.  # TODO: check noargs & series


#### One of:
userId: string;: string;
gameId: string;
seriesId: string;
"""
def __init__(
    self
    userId: string;: string;: string; | None = None
    gameId: string;: string; | None = None
    seriesId: string;: string; | None = None
    **params) -> None:
super().__init__("GetThemeSettings" r_GetThemeSettings userId: string;: string;=userId: string;: string; gameId: string;=gameId: string;
                    seriesId: string;=seriesId: string; **params)

PutThemeSettings(PostRequest[r_Empty]):
"""Sets a user game or series' theme.


#### One of:
userId: string;: string;
gameId: string;
seriesId: string;
settings: ThemeSettings
"""
def __init__(self settings: ThemeSettings userId: string;: string;: string; | None = None gameId: string;: string; | None = None seriesId: string;: string; | None = None **params) -> None:
super().__init__("PutThemeSettings" r_Empty userId: string;: string;=userId: string;: string; gameId: string;=gameId: string; seriesId: string;=seriesId: string; settings=settings **params)

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