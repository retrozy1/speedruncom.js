import * as Enums from './enums';

/**
 * A Category item.
 */
export interface Category {

    /**
     * ID of the category.
     */
    readonly id: string;

    /**
     * Name of the category.
     */
    name: string;

    /**
     * Page URL of the category.
     * This is never actually used in site pages.
     * The URL is permanent and can never update, even when changing the category name.
     */
    readonly url: string;

    /**
     * A global, site-wide position order number for the category.
     */
    readonly pos: number;

    /**
     * ID of the game the category is on.
     */
    readonly gameId: string;

    /**
     * Whether or not the category is miscellaneous.
     */
    isMisc: boolean;

    /**
     * Whether or not the category is only for individual levels.
     */
    isPerLevel: boolean;

    /**
     * The maximum amount of players you can choose when submitting a run to the category.
     * todo check if the 1 player > infinite player glitch is still patches yet
     */
    numPlayers: number;

    /**
     * todo wtf is this
     */
    exactPlayers: boolean;

    /**
     * `PlayerMatchMode` of the category.
     */
    playerMatchMode: Enums.PlayerMatchMode;

    /**
     * `TimeDirection` of the category.
     */
    timeDirection: Enums.TimeDirection;

    /**
     * Whether or not runs with `.000` milliseconds have their milliseconds shown on leaderboards or not.
     */
    enforceMs: boolean;

    /**
     * Rules for the category.
     */
    rules: string;

    /**
     * Whether or not the category is archived.
     */
    archived?: boolean;
}

/**
 * A moderator (or verifier) of a challenge.
 */
export interface ChallengeModerator {

    /**
     * ID of the challenge being moderated.
     */
    readonly challengeId: string;

    /**
     * ID of the user moderating.
     */
    readonly userId: string;

    /**
     * `GamePowerLevel` of the moderator.
     */
    readonly level: Enums.GamePowerLevel;
}

/**
 * A current status of a challenge.
 */
export interface ChallengeStanding {
    
    /**
     * ID of the challenge.
     */
    readonly challengeId: string;
    
    /**
     * todo
     */
    readonly place: number;

    /**
     * todo
     */
    readonly registeredPlayerIds: string[];

    /**
     * todo
     */
    readonly prizeAmount: number;

    /**
     * todo
     */
    readonly unregisteredPlayers: string[]

    /**
     * todo
     */
    readonly prizeCurrency: string;
}

/**
 * A currency reward for getting a certain ranking in a challenge.
 */
export interface ChallengePrize {

    /**
     * The ranking in the challenge for the reward.
     */
    readonly place: number;

    /**
     * The amount of money rewarded to the player in the `place`.
     */
    readonly amount: number;
}

/**
 * Configuration settings of a challenge.
 */
export interface ChallengePrizeConfig {

    /**
     * TODO
     */
    readonly prizePool: number;

    /**
     * TODO
     */
    readonly currency: string;
    readonly prizes: ChallengePrize[];
}

/**
 * A single user's site-wide ranking details based on all challenges entered.
 */
export interface GlobalChallengeRanking {

    /**
     * ID of the user.
     */
    readonly userId: string;

    /**
     * The user's site-wide rank.
     */
    readonly rank: number;
    readonly totalEarnings: number;

    /**
     * The amount of first place ranks the user has achieved in challenges.
     */
    readonly firstPlaces: number;

    /**
     * The amount of second place ranks the user has achieved in challenges.
     */
    readonly secondPlaces: number;

    /**
     * The amount of third place ranks the user has achieved in challenges.
     */
    readonly thirdPlaces: number;

    /**
     * The total amount of challenges the user has entered.
     */
    readonly challengesEntered: number;
}

/**
 * A site challenge.
 */
export interface Challenge {

    /**
     * ID of the challenge.
     */
    readonly id: string;

    /**
     * Name of the challenge.
     */
    readonly name: string;

    /**
     * todo
     */
    readonly announcement: string;

    /**
     * Subpath URL of the challenge.
     */
    readonly url: string;

    /**
     * ID of the game the challenge is based on.
     */
    readonly gameId: string;

    /**
     * UNIX timestamp of when the challenge was created.
     */
    readonly createDate: number;

    /**
     * UNIX timestamp of when the challenge settings were last updated.
     */
    readonly updateDate: number;

    /**
     * todo
     */
    readonly startDate: number;

    /**
     * todo
     */
    readonly endDate: number;

    /**
     * `ChallengeState` of the challenge.
     */
    readonly state: Enums.ChallengeState;

    /**
     * Description of the challenge.
     */
    readonly description: string;

    /**
     * Rules of the challenge (not to be confused with `contestRules`).
     */
    readonly rules: string;

    /**
     * 
     */
    readonly numPlayers: number;
    readonly exactPlayers: boolean;
    readonly playerMatchMode: Enums.PlayerMatchMode;
    readonly timeDirection: Enums.TimeDirection;
    readonly enforceMs: boolean;

    /**
     * Subpath URL of the challenge's cover image.
     * check if opt todo
     */
    readonly coverImagePath: string;
    readonly contest: boolean;
    readonly contestRules: string;
    readonly runCommentsMode: Enums.ItemPermissionType;

    /**
     * `ChallengePrizeConfig` of the challenge.
     */
    readonly prizeConfig: ChallengePrizeConfig;
}

/**
 * Player reward for completing a Challenge.
 */
export interface Title {

    /**
     * ID of the title.
     */
    readonly id: string;

    /**
     * Title of the challenge.
     */
    readonly title: string;

    /**
     * Description of how the challenge is rewarded to players.
     */
    readonly comment: string;

    /**
     * Subpath URL of the challenge that rewards the title.
     */
    readonly referenceUrl: string;
}

/**
 * Permissions of a comment section.
 */
export interface CommentPermissions {

    /**
     * Whether or not 
     */
    readonly canManage: boolean;

    /**
     * Whether or 
     */
    readonly canViewComments: boolean;
    readonly canPostComments: boolean;

    /**
     * Whether or not editing comments is allowed.
     */
    readonly canEditComments: boolean;

    /**
     * Whether or not deleting comments is allowsed.
     */
    readonly canDeleteComments: boolean;

    /**
     * Reasons for not being able to not view a thread.
     */
    readonly cannotViewReasons: string[];

    /**
     * Reasons for not being able to post a comment.
     */
    readonly cannotPostReasons: string[];
}

export interface CommentableProperties {
    readonly disabled: boolean;
    readonly locked: boolean;
}

export interface Commentable {
    readonly itemType: Enums.ItemType;
    readonly itemId: string;
    readonly properties: CommentableProperties;
    /**Permissions of the logged in user. If not logged in; `canPostComments` is `false`.*/
    readonly permissions: CommentPermissions;
}

export interface Comment {
    readonly id: string;
    readonly itemType: Enums.ItemType;
    readonly itemId: string;
    readonly date: number;
    readonly userId: string;
    /**May be omitted on deleted comments.*/
    readonly text?: string;
    readonly parentId?: string;
    readonly deleted: boolean;
    readonly deletedUserId?: string;
}

export interface Like {
    readonly itemType: Enums.ItemType;
    readonly itemId: string;
    readonly userId: string;
    readonly date: number;
}

export interface SocialNetwork {

    /**
     * `SocialConnection` of the social network.
     */
    readonly id: Enums.SocialConnection;

    /**
     * Name of the social network.
     */
    readonly name: string;

    /**
     * Arbitrary and unknown determination of if the platform is popular.
     * 
     * This does not have to do with if the platform is depricated or not.
     */
    readonly major: boolean;

    /**
     * Site-wide ordering method of the platform.
     */
    readonly pos: number;

    /**
     * Either a URL with a `[id]` placeholder of where the entered value would be stored, `popup` when there is complex authentication of the social network, or an empty string when the value you enter is exactly what the end result will be.
     * 
     * Example: `https://www.youtube.com/user/[id]` 
     */
    readonly pattern: string;
}

export interface Area {
    readonly id: string;
    readonly name: string;
    readonly fullName: string;
    readonly label: string;
    readonly flagIcon: string;
    readonly lbFlagIcon: string;
    readonly lbName: string;
}

export interface Color {
    readonly id: string;
    readonly name: string;
    readonly darkColor: string;
    /**@deprecated `darkColor` is always used on the site*/
    readonly lightColor: string;
    /**@deprecated colors now seem to be sorted by their name's ascending alphabetical order (A-Z)*/
    readonly pos: number;
}

/**
 * A 'category' of threads, being site-wide such as *The Site* and *Supporter* or representing the forum section that every game has. 
 */
export interface Forum {

    /**
     * `id` of this forum section.
     */
    readonly id: string;

    /**
     * Name of the forum. If this is the game's forum, it is the game name.
     */
    readonly name: string;

    /**
     * Page URL of the forum. If this is the game's forum, it is the game's page URL.
     */
    readonly url: string;

    /**
     * A description used to describe site-wide forums.
     */
    readonly description?: string;

    /**
     * The `ForumType` the forum is.
     */
    readonly type: Enums.ForumType;

    /**
     * The amount of threads inside of a forum.
     */
    readonly threadCount: number;

    /**
     * The amont of combined posts of every thread in the forum.
     */
    readonly postCount: number;

    /**
     * The ID of the latest post in any thread in the forum.
     */
    readonly lastPostId: string;

    /**
     * The `userId` of the latest post in any thread in the forum.
     */
    readonly lastPostUserId: string;

    /**
     * The UNIX timestamp of when the latest post in any thread in the forum was posted.
     */
    readonly lastPostDate: number;

    /**
     * 
     */
    readonly touchDate: number;
}

export interface Thread {
    readonly id: string;
    readonly name: string;
    readonly gameId: string;
    readonly forumId: string;
    readonly userId: string;
    readonly replies: number;
    readonly created: number;
    readonly lastCommentId: string;
    readonly lastCommentUserId: string;
    readonly lastCommentDate: number;
    readonly sticky: boolean;
    readonly locked: boolean;
}

export interface ForumReadStatus {
    readonly forumId: string;
    readonly date: number;
}

export interface Datatype {
    readonly threadId: string;
    readonly date: number;
}

export interface Leaderboard {
    readonly category: Category;
    readonly game: Game;
    readonly pagination: Pagination;
    readonly platforms: Platform[];

    /**
     * Every Player with a run in a game.
     */
    readonly players: Player[];
    readonly regions: Region[];
    readonly runs: GameRun[];
    readonly values: VariableValue[];
    readonly variables: Variable[];
}

/**
 * Paramaters for filtering a leaderboard.
 */
export interface LeaderboardParams {

    /**
     * ID of the leaderboard's game.
     */
    gameId: string;

    /**
     * ID of the leaderboard's category.
     */
    categoryId: string;

    /**
     * YYYY-MM-DD format of the minimum speedrun date of runs.
     */
    dateFrom?: string;

    /**
     * YYYY-MM-DD format of the maximum speedrun date of runs.
     */
    dateTo?: string;

    /**
     * `EmulatorFilter` determining the emulator inclusivity of runs.
     */
    emulator?: Enums.EmulatorFilter;

    /**
     * ID of the leaderboard's level, if applicable.
     */
    levelId?: string;

    /**
     * `ObsoleteFilter` determining the obsoletion inclusivity of runs.
     */
    obsolete?: Enums.ObsoleteFilter;

    /**
     * IDs of the platforms of runs.
     * Platform IDs can be found with `GetPlatformList`.
     */
    platformIds?: string[];

    /**
     * IDs of the regions of runs.
     * This is not to be confused with country, you cannot filter runs by country.
     */
    regionIds?: string[];
    timer?: Enums.TimingMethod;

    /**
     * `RunStatus` of runs.
     */
    verified?: Enums.RunStatus;

    /**
     * Variable and value pairs of runs.
     */
    values?: VariableValues[];
    
    /**
     * `VideoFilter` determining video inclusivity of runs.
     */
    video?: Enums.VideoFilter;
}

export interface RunCount {
    readonly gameId: string;
    readonly categoryId: string;
    readonly levelId?: string;
    readonly variableId?: string;
    readonly valueId?: string;
    readonly count: number;
}

export interface Platform {
    readonly id: string;
    readonly name: string;
    readonly url: string;
    readonly year: number;
}

export interface Article {
    readonly id: string;
    readonly slug: string;
    readonly title: string;
    readonly summary: string;
    readonly body: string;
    readonly createDate: number;
    readonly updateDate: number;
    readonly publishDate?: number;
    readonly rejectDate?: number;
    readonly publishTarget: string;
    readonly publishTags: string[];
    readonly coverImagePath?: string;
    readonly commentsCount: number;
    readonly community?: boolean;
    readonly gameId?: string;
    readonly userId?: string;
    readonly editorId?: string;
    /**day it was pinned */
    readonly stickyDate?: number;
}

export interface Region {
    readonly id: string;
    readonly name: string;
    readonly url: string;
    readonly flag: string;
}

export interface Pagination {
    readonly count: number;
    readonly page: number;
    readonly pages: number;
    readonly per: number;
}

export interface Guide {
    readonly id: string;
    readonly name: string;
    readonly text: string;
    readonly date: number;
    readonly userId: string;
    readonly gameId: string;
}

export interface Resource {
    readonly id: string;
    readonly type: Enums.ResourceType;
    readonly name: string;
    readonly description: string;
    readonly date: number;
    readonly userId: string;
    readonly gameId: string;
    readonly path?: string;
    readonly link?: string;
    readonly fileName?: string;
    readonly authorNames: string;  // TODO: exhaustive check for lists AND CHECK THAT UCHI ARTICLE WITH META??
}

export interface Stream {
    readonly id: string;
    readonly gameId?: string;
    readonly userId?: string;
    readonly areaId?: string;
    readonly url: string;
    readonly title: string;
    readonly previewUrl: string;
    readonly channelName: string;
    readonly viewers: number;
    /**If the stream has a PB on SRC (and has their account linked)  TODO: check*/
    readonly hasPb: boolean;
}

export interface AuditLogEntry {
    readonly id: string;
    readonly date: number;
    readonly eventType: Enums.EventType
    readonly actorId: string;
    readonly gameId: string; // TODO check if optional, prolly is
    /**A json dict of extra context based on eventType.*/
    readonly context: string;
    readonly userId?: string;
}

export interface Session {
    readonly signedIn: boolean;
    readonly showAds: boolean;
    readonly user?: User;
    readonly theme?: Theme;
    readonly powerLevel: Enums.SitePowerLevel;
    readonly dateFormat: Enums.DateFormat;
    readonly timeFormat: Enums.TimeFormat;
    readonly timeReference: Enums.TimeReference;
    readonly timeUnits: Enums.TimeDisplayUnits;
    readonly homepageStream: Enums.HomepageStreamType;
    readonly disableThemes: boolean;
    readonly csrfToken: string;
    readonly networkToken?: string;
    readonly gameList: Game[];
    readonly gameFollowerList: GameFollower[];
    readonly gameModeratorList: GameModerator[];
    readonly gameRunnerList: GameRunner[];
    readonly seriesList: Series[];
    readonly seriesModeratorList: SeriesModerator[];
    readonly boostAvailableTokens?: number;
    readonly boostNextTokenDate: number;
    readonly boostNextTokenAmount: number;
    readonly userFollowerList: UserFollower[];
    readonly enabledExperimentIds: string[];  // TODO: check
    readonly challengeModeratorList: ChallengeModerator[];  // TODO: check
}

export interface Conversation {
    readonly id: string;
    readonly participantUserIds: string[];
    readonly lastMessageId: string;
    readonly lastMessageUser: string;
    readonly lastMessageText: string;
    readonly lastMessageDate: number;
    readonly readDate: number;
}

export interface ConversationLightweight {
    readonly id: string;
    /**TODO check if empty */
    readonly participantUserIds: string[];
    readonly lastMessageId: string;
    readonly lastMessageDate: number;
}

export interface ConversationParticipant {
    readonly conversationId: string;
    readonly userId: string;
    readonly joinedDate: number;
    /**TODO check if optional*/
    readonly leftDate: number;
}

export interface ConversationMessage {
    readonly id: string;
    readonly conversationId: string;
    readonly userId: string;
    readonly text: string;
    readonly date: number;
}

export interface SystemMessage {
    readonly id: string;
    readonly userId: string;
    readonly text: string;
    readonly date: number;
    readonly read: boolean;
}

/**
 * The basic data of a game.
 */
export interface Game {
    
    /**
     * ID of the game.
     */
    readonly id: string;
    
    /**
     * Name of the game.
     */
    readonly name: string;

    /**
     * Page URL of the game.
     */
    readonly url: string;

    /**
     * Unused enum that is always `1`. todo check if gameType is this
     */
    readonly type: 1;
    
    /**
     * Whether or not a game has Load Removed Time (LRT) as a timing method.
     */
    readonly loadtimes: boolean;

    /**
     * Whether or not the game supports entering milliseconds when entering a time into a run.
     */
    readonly milliseconds: boolean;

    /**
     * Whether or not a game has In Game Time (IGT) as a timing method.
     */
    readonly igt: boolean;

    /**
     * Whether or not runs require moderators to verify them.
     */
    readonly verification: boolean;
    
    /**
     * Whether or not the default option for 'Automatically Verify Run' is true.
     */
    readonly autoVerify?: boolean;

    /**
     * Whether or not videos are required for submission.
     */
    readonly requireVideo: boolean;

    /**
     * Emulator allowability in a game.
     */
    readonly emulator: Enums.EmulatorType;

    /**
     * Default timing method of the game.
     */
    readonly defaultTimer: Enums.TimingMethod;
    readonly validTimers: Enums.TimingMethod[];
    readonly releaseDate?: number;
    readonly addedDate: number;
    readonly touchDate: number;
    readonly baseGameId?: string;
    readonly coverPath: string; //check if opt
    readonly trophy1stPath?: string;
    readonly trophy2ndPath?: string;
    readonly trophy3rdPath?: string;
    readonly trophy4thPath?: string;
    readonly runCommentsMode: Enums.ItemPermissionType;
    readonly runCount: number;
    readonly activePlayerCount: number;
    readonly totalPlayerCount: number;
    readonly boostReceivedCount: number;
    readonly boostDistinctDonorsCount: number;
    readonly rules?: string;
    readonly viewPowerLevel: Enums.SitePowerLevel;
    readonly platformIds: string[];
    readonly regionIds: string[];
    readonly gameTypeIds: Enums.GameType[];
    readonly websiteUrl?: string;
    readonly discordUrl?: string;
    readonly defaultView: Enums.DefaultViewType
    readonly guidePermissionType: Enums.ItemPermissionType;
    readonly resourcePermissionType: Enums.ItemPermissionType;
    readonly staticAssets: StaticAsset[];
    readonly embargoDate?: number;
    readonly embargoText?: string;
}

export interface GameStats {
    readonly gameId: string;
    readonly totalRuns: number;
    readonly totalRunsFG: number;
    readonly totalRunsIL: number;
    readonly totalRunTime: number;
    readonly recentRuns: number;
    readonly recentRunsFG: number;
    readonly recentRunsIL: number;
    readonly totalPlayers: number;
    readonly activePlayers: number;
    readonly followers: number;
    readonly guides: number;
    readonly resources: number;
}

export interface GameNews {
    readonly id: string;
    readonly gameId: string;
    readonly userId: string;
    readonly title: string;
    /**
     * Omitted for all but the first item in `GetGameSummary.newsList[]`.
     */
    readonly body?: string;
    readonly dateSubmitted: number;
}

export interface GameModerator {
    gameId: string;
    userId: string;
    level: Enums.GamePowerLevel;
}

export interface GameBoost {
    readonly id: string;
    readonly createdAt: number;
    readonly updatedAt: number;
    readonly gameId: string;
    readonly donorUserId: string;
    readonly anonymous: boolean;
    readonly recipientUserIds: [];
}

export interface GameTypeDetails {
    readonly id: Enums.GameType
    readonly name: string;
    readonly url: string;
    readonly description: string;
    readonly allowBaseGame: boolean;
}

/**TODO: Check for optional properties*/
export interface GameSettings {
    readonly id: string;
    name: string;
    url: string;
    twitchName: string;
    releaseDate: number;
    milliseconds: boolean;
    defaultView: Enums.DefaultViewType
    loadTimes: boolean;
    igt: boolean;
    defaultTimer: Enums.TimingMethod
    showEmptyTimes: boolean;
    rulesView: boolean;
    emulator: Enums.EmulatorType;
    verification: boolean;
    requireVideo: boolean;
    autoVerify: boolean;
    regionsObsolete: boolean;
    platformsObsolete: boolean;
    discordUrl: string;
    websiteUrl: string;
    rules: string;
    /**TODO: find this ENUM vvv */
    showOnStreamsPage: number;
    touchDate: number;
    noEvents: boolean;
    promoted: boolean;
    runCommentsMode: Enums.ItemPermissionType;
    noPromote: boolean;
    platformIds: string[];
    regionIds: string[];
    gameTypeIds: Enums.GameType[];
    guidePermissionType: Enums.ItemPermissionType;
    resourcePermissionType: Enums.ItemPermissionType;
    staticAssets: StaticAsset[];
    staticAssetUpdates: StaticAssetUpdate[];
}

export interface GameModerationStats {
    readonly gameId: string;
    /**enum? appears to always be 0*/
    readonly state: number;
    readonly count: number;
    readonly minDate?: number;
    readonly maxDate?: number;
}

export interface GameFollower {
    readonly gameId: string;
    readonly followerId: string;
    readonly pos?: number;
    readonly accessCount: number;
    readonly lastAccessDate: number;
}

export interface GameRunner {
    readonly gameId: string;
    readonly userId: string;
    readonly runCount: number;
}

export interface NewLevel {
    readonly gameId: string;
    name: string;
    rules?: string;
    archived: boolean;
}

export interface Level extends NewLevel {
    readonly id: string;
    readonly url: string;
    readonly pos: number;
}

export interface Notification {
    readonly id: string;
    readonly date: number;
    readonly title: string;
    readonly path: string;
    readonly read: boolean;
}

export interface NotificationSetting {
    readonly type: number;  //# enum??
    readonly gameId?: string;
    readonly site: boolean;
    readonly email: boolean;
}

/**A different type of notification are returned by `GetStaticData` than in other areas.*/
export interface NotificationSettingStaticData {
    readonly id: number;
    readonly group: string;
    readonly title: string;
    readonly pos: number;
    readonly gameSpecific: boolean;
    readonly siteDefault: number;
    readonly emailDefault: boolean;
}

export interface GameOrderGroup {
    id: string;
    name: string;
    sortType: Enums.GameSortType;
    gameIds: string[];
    open?: boolean;
    editing?: boolean;
}

export interface GameOrdering {
    readonly defaultGroups: GameOrderGroup[];
    readonly supporterGroups: GameOrderGroup[];
}

interface Run_Base {
    /**
     * Unique identification characters of a run.
     */
    readonly id: string;
    /**
     * Unique identification characters of the run's game.
     */
    readonly gameId: string;
    
    /**
     * Timing of the run, in seconds. If the run has an *LRT* (Load Removed Time) **and** an *RTA* (Real Time Attack) time, this property will be the LRT. If there is an RTA and not an LRT, this will be the RTA.
     */
    readonly time?: number;

        /**
     * Timing of the run, in seconds. If the run has an *LRT* (Load Removed Time) **and** an *RTA* (Real Time Attack) time, this property will be the RTA. If there is an LRT and not an RTA, this will be the LRT.
     */
    readonly timeWithLoads?: number;

    /**
     * In Game Time* of the run, in seconds.
     */
    readonly igt?: number;

    /**
     * Unique identification characters of a platform. Platforms can be accessed with `GetPlatformList`.
     */
    readonly platformId?: string;

    /**
     * Whether or not an emulator was used in the run.
     */
    readonly emulator: boolean;

    /**
     * Unique identification characters of a region. Found in older games that vary based on regions.
     */
    readonly regionId?: string;

    /**
     * Everything in the 'Video URL' box.
     */
    readonly video?: string;

    /**
     * Description of a run.
     */
    readonly comment?: string;
    
    /**
     * Unique user identification of the run submitter. Absent if the submitter is deleted.
     */
    readonly submittedById?: string;

    /**
     * A run's verification status.
     */
    readonly verified: Enums.RunStatus;

    /**
     * Unique user identification characters of the run resolver.
     * 
     * Absent if the resolver is deleted.
     */
    readonly verifiedById?: string;
    
    /**
     * Run rejection reason if it was rejected.
     */
    readonly reason?: string;

    /**
     * UNIX timestamp of a run's (changeable) date.
     */
    readonly date: number;

    /**
     * UNIX timestamp of when the run was submitted.
     */
    readonly dateSubmitted?: number;
    
    /**
     * UNIX timestamp of when the run was resolved.
     */
    readonly dateVerified?: number;

    /**
     * Whether the run is obsolete or not - absent when false.
     */
    readonly obsolete?: boolean;

    /**
     * Leaderboard rank of the run. Absent when obsolete.
     */
    readonly place?: number;

    /**
     * Unique identification characters of players in the run.
     */
    readonly playerIds: string[];

    /**
     * Unused property that used to store reports of bad data for a run.
     */
    readonly issues: null;

    /**
     * Availibility and 'status' of the video of a run.
     */
    readonly VideoState: Enums.VideoState;
}

/**
 * A game speedrun's public data.
 */
export interface GameRun extends Run_Base {

    /**
     * Unique identification characters of the run's category.
     */
    readonly categoryId: string;

    /**
     * Unique identification characters of the run's level, if the run is on an individual level (IL).
     */
    readonly levelId?: string;

    /**
     * Whether the run has *splits.io* splits. Splits.io has been shut down; this is `false` on all new runs.
     */
    readonly hasSplits: boolean;

    /**
     * Unique identification characters of values (subcategories and annotations) in the run.
     */
    readonly valueIds: string[];
    
    /**
     * Whether or not the run's category or subcategories were archived - absent when false.
     */
    readonly orphaned?: boolean;
}

export interface ChallengeRun extends Run_Base {
    readonly challengeId: string;
    readonly screened: boolean;
    readonly screenedById?: string;
    readonly dateScreened?: number;
    readonly commentsCount: number;
}

export interface ModerationRun extends GameRun {

    /**
     * Whether or not the run's ranking is estimated.
     * 
     * Missing when false.
     */
    readonly estimated?: true;
}

export interface RunTime {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
}

export interface RunSettings {

    /**
     * Omitted when submitting a new run.
     */
    readonly runId?: string;
    gameId: string;
    categoryId: string;
    playerNames: string[];

    /**
     * whichever timing method is primary to the game is required.
     */
    time?: RunTime;
    timeWithLoads?: RunTime;
    igt?: RunTime;
    platformId?: string;
    emulator: boolean;
    video?: string;
    comment?: string;
    date: number;
    values?: VariableValue[];
}

export interface Series {
    readonly id: string;
    readonly name: string;
    readonly url: string;
    readonly addedDate: number;
    readonly touchDate: number;
    readonly websiteUrl?: string;
    readonly discordUrl?: string;
    readonly runCount: number;
    readonly activePlayerCount: number;
    readonly totalPlayerCount: number;
    readonly officialGameCount: number;
    readonly staticAssets: StaticAsset[];
}

export interface SeriesModerator {
    seriesId: string;
    userId: string;
    level: Enums.GamePowerLevel;
}

export interface SeriesSettings {
    name: string;
    url: string;
    discordUrl: string;
    websiteUrl: string;
    staticAssets: StaticAsset[];
    staticAssetUpdates: StaticAssetUpdate[];
}

export interface StaticAsset {
    /**TODO: make enum*/
    assetType: string;
    path: string;
}

export interface StaticAssetUpdate {
    assetType: string;
    /**Example: data:image/png;base64,examplebase64data*/
    updateContent: string;
    deleteContent?: boolean;
}

export interface SupporterCredit {
    readonly id: string;
    readonly userId: string;
    readonly providerId: number;  // enum
    readonly createdAt: number;
    readonly updatedAt: number;
    readonly creditType: number;  // enum
    readonly amount: number;
    readonly currency: string;
    readonly receivedAt: number;
    readonly subscriptionId: string;
    readonly periodStartsAt: number;
    readonly periodEndsAt: number;
    readonly providerItemId: string;
}

export interface SupporterCode {
    readonly id: string;
    readonly code: string;
    readonly description: string;
    readonly duration: number;
    readonly userId: string;
    readonly createdAt: number;
    readonly updatedAt: number;
}

export interface SupporterSubscription {
    readonly id: string;
    readonly userId: string;
    readonly providerId: number;  // enum
    readonly createdAt: number;
    readonly updatedAt: number;
    readonly expiresAt: number;
    readonly planId: number;  // enum
    readonly nextPeriodPlanId: number;  // enum
    readonly status: number;  // enum
    /**Default 0, undocumented but assume timestamp otherwise TODO*/
    readonly trialEndsAt: number;
    readonly cancelAtPeriodEnd: boolean;
    readonly canceledAt: number;  // TODO assume timestamp
}

export interface Theme {
    id: string;
    url: string;
    name?: string; // TODO: check optional
    primaryColor: string;
    panelColor: string;
    panelOpacity: number;
    navbarColor: Enums.NavbarColorType;
    backgroundColor: string;
    backgroundFit: Enums.FitType;
    backgroundPosition: Enums.PositionType;
    backgroundRepeat: Enums.RepeatType;
    backgroundScrolling: Enums.ScrollType;
    foregroundFit: Enums.FitType;
    foregroundPosition: Enums.PositionType;
    foregroundRepeat: Enums.RepeatType;
    foregroundScrolling: Enums.ScrollType;
    touchDate: number;
    staticAssets: StaticAsset[];
}

export interface ThemeSettings {
    primaryColor: string;
    panelColor: string;
    panelOpacity: number;  // TODO: may be an enum of every 5 between 70 and 100
    navbarColor: Enums.NavbarColorType
    backgroundColor: string;
    backgroundFit: Enums.FitType;
    backgroundPosition: Enums.PositionType;
    backgroundRepeat: Enums.RepeatType;
    backgroundScrolling: Enums.ScrollType;
    foregroundFit: Enums.FitType;
    foregroundPosition: Enums.PositionType;
    foregroundRepeat: Enums.RepeatType;
    foregroundScrolling: Enums.ScrollType;
    staticAssets: StaticAsset[];
    staticAssetUpdates: StaticAssetUpdate[];
}

export interface ThreadReadStatus {
    threadId: string;
    date: number;
}

export interface Ticket {
    id: string;
    queue: Enums.TicketQueueType;
    type: Enums.TicketType;
    status: Enums.TicketStatus;
    requestorId: string;
    dateSubmitted: number;
    dateResolved?: number;
    /**This is a json object that may be dependent on type*/
    metadata: string;
}

export interface TicketNote {
    id: string;
    ticketId: string;
    readerId: string;
    dateSubmitted: number;
    note: string;
    isMessage: boolean;
    isRead: boolean;
}

/**Fields from `User` present in `playerLists`. May also be an unregistered player.*/
export interface Player {
    id: string;
    name: string;
    url?: string;
    powerLevel?: Enums.SitePowerLevel;
    color1Id?: string;
    /**Optional even on full `player`*/
    color2Id?: string;
    colorAnimate?: number;
    areaId?: string;
    isSupporter?: boolean;
}

/**Supporter feature for rings around names.*/
export interface AvatarDecoration {
    enabled: boolean;
    /**If true, see this object's color Ids. If either is absent, inherit from username.*/
    separateColors?: boolean;
    color1Id?: string;
    /**Defaults to username's `color1Id`*/
    color2Id?: string;
    /**Defaults to username's `color2Id`*/
}

export interface User {
    id: string;
    name: string;
    altname?: string;
    url: string;
    pronouns: string[];
    powerLevel: Enums.SitePowerLevel;
    color1Id: string;
    color2Id?: string;
    colorAnimate?: number;
    areaId: string;
    isSupporter?: boolean;
    avatarDecoration?: AvatarDecoration;
    iconType: Enums.IconType;
    onlineDate: number;
    signupDate: number;
    touchDate: number;
    staticAssets: StaticAsset[];
    supporterIconType?: Enums.IconType;
    supporterIconPosition?: Enums.IconPosition;
    /**ID for a title given for completing a Challenge*/
    titleId?: string;
}

export interface UserStats {
    userId: string;
    followers: number;
    runs: number;
    runsFg: number;
    runsIl: number;
    runsPending: number;
    runTime: number;
    minRunDate: number;
    maxRunDate: number;
    commentsPosted: number;
    guidesCreated: number;
    resourcesCreated: number;
    threadsCreated: number;
    gamesBoosted: number;
    usersBoosted: number;
    followingGames: number;
    followingUsers: number;
    challengeRuns: number;
    challengeRunsPending: number;
    runVideosAtRisk: number;
}

export interface UserSocialConnection {
    userId: string;
    networkId: Enums.SocialConnection;
    value: string;
    verified: boolean;
}

export interface UserModerationStats {
    gameId: string;
    level: Enums.GamePowerLevel;
    totalRuns: number;
    totalTime: number;
    minDate: number;
    maxDate: number;
}

export interface UserGameFollow {
    gameId: string;
    accessCount: number;
    lastAccessDate: number;
}

export interface UserGameRunnerStats {
    gameId: string;
    totalRuns: number;
    totalTime: number;
    uniqueLevels: number;
    uniqueCategories: number;
    minDate: number;
    maxDate: number;
}

/**UserProfile as returned by `GetUserLeaderboard`, `GetUserSummary` & `GetUserPopoverData` - Missing `userStats` and `userSocialConnectionList`.*/
export interface UserReducedProfile {
    userId: string;
    bio?: string;
    signupDate: number;
    defaultView: Enums.DefaultViewType;
    showMiscByDefault: boolean;
    gameOrdering?: GameOrdering;
}

export interface UserProfile {
    userId: string;
    bio?: string;
    signupDate: number;
    defaultView: Enums.DefaultViewType;
    showMiscByDefault: boolean;
    gameOrdering: GameOrdering;
    userStats: UserStats;
    userSocialConnectionList: UserSocialConnection[];
}

export interface UserFollower {
    userId: string;
    followerId: string;
}

export interface UserCount {
    userId: string;
    count: number;
}

export interface UserBlock {
    blockerId: string;
    blockeeId: string;
}

export interface UserSettings {
    id: string;
    name: string;
    url: string;
    email: string;
    bio: string;
    powerLevel: Enums.SitePowerLevel;
    areaId: string;
    /**May be `<gameUrl>`, `user/<userUrl>` or `Default`*/
    theme: string;
    color1Id: string;
    color2Id?: string;
    colorAnimate: number;  // enum
    avatarDecoration: AvatarDecoration  // TODO: check
    defaultView: Enums.DefaultViewType;
    timeReference: Enums.TimeReference;
    timeUnits: Enums.TimeDisplayUnits;
    dateFormat: Enums.DateFormat;
    timeFormat: Enums.TimeFormat;
    iconType: Enums.IconType;
    disableThemes: boolean;
    emailAuthentication: boolean;
    latestMaxFollowed: number;
    latestMinFollowed: number;
    latestTimeFollowed: number;
    showMiscByDefault: boolean;
    showOnStreamsPage: boolean;
    showUnofficialGameTypes: boolean;
    homepageStream: Enums.HomepageStreamType;
    disableMessages: boolean;
    showAds: boolean;
    pronouns: string[];
    nameChangeDate?: number;
    runCommentsDisabled: boolean;
    followedGamesDisabled: boolean;
    supporterEndDate: number;
    boostEndDate: number;
    supporterIconType: Enums.IconType;
    supporterIconPosition: Enums.IconPosition;
    staticAssets: StaticAsset[];
    staticAssetUpdates: StaticAssetUpdate[];
}

export interface VariableValue {
    variableId: string;
    valueId: string;
}

export interface VariableValues {
    variableId: string;
    valueIds: string[];
}

export interface Variable {
    
    name: string;
    
    gameId: string;
    description?: string;
    categoryScope: Enums.VarCategoryScope;
    categoryId?: string;
    levelScope: Enums.VarLevelScope;
    levelId?: string;
    isMandatory: boolean;
    isSubcategory: boolean;
    isUserDefined: boolean;
    isObsoleting: boolean;
    defaultValue?: string;
    archived: boolean;
    displayMode?: Enums.VarDisplayMode;
}

export interface Variable {
    id: string;
    url: string;
    pos: number;
}

/**Value of a variable. `VariableValue` is a selector on this type (and the underlying variable)*/
export interface Value {
    id: string;
    name: string;
    url: string;
    pos: number;
    variableId: string;
    isMisc?: boolean;
    rules?: string;
    archived: boolean;
}