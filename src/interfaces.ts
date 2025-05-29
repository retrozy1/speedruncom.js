import * as Enums from './enums.ts';

export interface Category {
    id: string;
    name: string;
    url: string;
    pos: number;
    gameId: string;
    isMisc: boolean;
    isPerLevel: boolean;
    numPlayers: number;
    exactPlayers: boolean;
    playerMatchMode: Enums.PlayerMatchMode;
    timeDirection: Enums.TimeDirection;
    enforceMs: boolean;
    rules: string;
    archived?: boolean;
}

export interface ChallengeModerator {
    challengeId: string;
    userId: string;
    level: Enums.GamePowerLevel;
}

export interface ChallengeStanding {
    challengeId: string;
    place: number;
    registeredPlayerIds: string[];
    prizeAmount: number;
    unregisteredPlayers: string[]
    prizeCurrency: string;
}

export interface ChallengePrize {
    place: number;
    amount: number;
}

export interface ChallengePrizeConfig {
    prizePool: number;
    currency: string;
    prizes: ChallengePrize[];
}

/**Sitewide rank based on all challenges entered.*/
export interface GlobalChallengeRanking {
    userId: string;
    rank: number;
    totalEarnings: number;
    firstPlaces: number;
    secondPlaces: number;
    thirdPlaces: number;
    challengesEntered: number;
}

export interface Challenge {
    id: string;
    name: string;
    announcement: string;
    url: string;
    gameId: string;
    createDate: number;
    updateDate: number;
    startDate: number;
    endDate: number;
    state: Enums.ChallengeState;
    description: string;
    rules: string;
    numPlayers: number;
    exactPlayers: boolean;
    playerMatchMode: Enums.PlayerMatchMode;
    timeDirection: Enums.TimeDirection;
    enforceMs: boolean;
    coverImagePath: string;
    contest: boolean;
    contestRules: string;
    runCommentsMode: Enums.ItemPermissionType;
    prizeConfig: ChallengePrizeConfig;
}

/**User reward for completing a Challenge.*/
export interface Title {
    id: string;
    title: string;
    comment: string;
    referenceUrl: string;
}

export interface CommentPermissions {
    canManage: boolean;
    canViewComments: boolean;
    canPostComments: boolean;
    canEditComments: boolean;
    canDeleteComments: boolean;
    cannotViewReasons: string[];
    cannotPostReasons: string[];
}

export interface CommentableProperties {
    disabled: boolean;
    locked: boolean;
}

export interface Commentable {
    itemType: Enums.ItemType;
    itemId: string;
    properties: CommentableProperties;
    /**Permissions of the logged in user. If not logged in; `canPostComments` is `false`.*/
    permissions: CommentPermissions;
}

export interface Comment {
    id: string;
    itemType: Enums.ItemType;
    itemId: string;
    date: number;
    userId: string;
    /**May be omitted on deleted comments.*/
    text?: string;
    parentId?: string;
    deleted: boolean;
    deletedUserId?: string;
}

export interface Like {
    itemType: Enums.ItemType;
    itemId: string;
    userId: string;
    date: number;
}

export interface SocialNetwork {
    id: Enums.SocialConnection;
    name: string;
    major: boolean;
    pos: number;
    pattern: string;
}

export interface Area {
    id: string;
    name: string;
    fullName: string;
    label: string;
    flagIcon: string;
    lbFlagIcon: string;
    lbName: string;
}

export interface Color {
    id: string;
    name: string;
    darkColor: string;
    /**@deprecated `darkColor` is always used on the site*/
    lightColor: string;
    /**@deprecated colors now seem to be sorted by their name's ascending alphabetical order (A-Z)*/
    pos: number;
}

/**
 * A 'category' of threads, being site-wide such as *The Site* and *Supporter* or representing the forum section that every game has. 
 */
export interface Forum {

    /**
     * `id` of this forum section.
     */
    id: string;

    /**
     * Name of the forum. If this is the game's forum, it is the game name.
     */
    name: string;

    /**
     * Page URL of the forum. If this is the game's forum, it is the game's page URL.
     */
    url: string;

    /**
     * A description used to describe site-wide forums.
     */
    description?: string;

    /**
     * The `ForumType` the forum is.
     */
    type: Enums.ForumType;

    /**
     * The amount of threads inside of a forum.
     */
    threadCount: number;

    /**
     * The amont of combined posts of every thread in the forum.
     */
    postCount: number;

    /**
     * The ID of the latest post in any thread in the forum.
     */
    lastPostId: string;

    /**
     * The `userId` of the latest post in any thread in the forum.
     */
    lastPostUserId: string;

    /**
     * The UNIX timestamp of when the latest post in any thread in the forum was posted.
     */
    lastPostDate: number;

    /**
     * 
     */
    touchDate: number;
}

export interface Thread {
    id: string;
    name: string;
    gameId: string;
    forumId: string;
    userId: string;
    replies: number;
    created: number;
    lastCommentId: string;
    lastCommentUserId: string;
    lastCommentDate: number;
    sticky: boolean;
    locked: boolean;
}

export interface ForumReadStatus {
    forumId: string;
    date: number;
}

export interface Datatype {
    threadId: string;
    date: number;
}

export interface Leaderboard {
    category: Category;
    game: Game;
    pagination: Pagination;
    platforms: Platform[];
    players: Player[];
    regions: Region[];
    runs: Run[];
    values: VariableValue[];
    variables: Variable[];
}

export interface RunCount {
    gameId: string;
    categoryId: string;
    levelId?: string;
    variableId?: string;
    valueId?: string;
    count: number;
}

export interface Platform {
    id: string;
    name: string;
    url: string;
    year: number;
}

export interface Article {
    id: string;
    slug: string;
    title: string;
    summary: string;
    body: string;
    createDate: number;
    updateDate: number;
    publishDate?: number;
    rejectDate?: number;
    publishTarget: string;
    publishTags: string[];
    coverImagePath?: string;
    commentsCount: number;
    community?: boolean;
    gameId?: string;
    userId?: string;
    editorId?: string;
    /**day it was pinned */
    stickyDate?: number;
}

export interface Region {
    id: string;
    name: string;
    url: string;
    flag: string;
}

export interface Pagination {
    count: number;
    page: number;
    pages: number;
    per: number;
}

export interface Guide {
    id: string;
    name: string;
    text: string;
    date: number;
    userId: string;
    gameId: string;
}

export interface Resource {
    id: string;
    type: Enums.ResourceType;
    name: string;
    description: string;
    date: number;
    userId: string;
    gameId: string;
    path?: string;
    link?: string;
    fileName?: string;
    authorNames: string;  // TODO: exhaustive check for lists AND CHECK THAT UCHI ARTICLE WITH META??
}

export interface Stream {
    id: string;
    gameId?: string;
    userId?: string;
    areaId?: string;
    url: string;
    title: string;
    previewUrl: string;
    channelName: string;
    viewers: number;
    /**If the stream has a PB on SRC (and has their account linked)  TODO: check*/
    hasPb: boolean;
}

export interface AuditLogEntry {
    id: string;
    date: number;
    eventType: Enums.EventType
    actorId: string;
    gameId: string; // TODO check if optional, prolly is
    /**A json dict of extra context based on eventType.*/
    context: string;
    userId?: string;
}

export interface Session {
    signedIn: boolean;
    showAds: boolean;
    user?: User;
    theme?: Theme;
    powerLevel: Enums.SitePowerLevel;
    dateFormat: Enums.DateFormat;
    timeFormat: Enums.TimeFormat;
    timeReference: Enums.TimeReference;
    timeUnits: Enums.TimeDisplayUnits;
    homepageStream: Enums.HomepageStreamType;
    disableThemes: boolean;
    csrfToken: string;
    networkToken?: string;
    gameList: Game[];
    gameFollowerList: GameFollower[];
    gameModeratorList: GameModerator[];
    gameRunnerList: GameRunner[];
    seriesList: Series[];
    seriesModeratorList: SeriesModerator[];
    boostAvailableTokens?: number;
    boostNextTokenDate: number;
    boostNextTokenAmount: number;
    userFollowerList: UserFollower[];
    enabledExperimentIds: string[];  // TODO: check
    challengeModeratorList: ChallengeModerator[];  // TODO: check
}

export interface Conversation {
    id: string;
    participantUserIds: string[];
    lastMessageId: string;
    lastMessageUser: string;
    lastMessageText: string;
    lastMessageDate: number;
    readDate: number;
}

export interface ConversationLightweight {
    id: string;
    /**TODO check if empty */
    participantUserIds: string[];
    lastMessageId: string;
    lastMessageDate: number;
}

export interface ConversationParticipant {
    conversationId: string;
    userId: string;
    joinedDate: number;
    /**TODO check if optional*/
    leftDate: number;
}

export interface ConversationMessage {
    id: string;
    conversationId: string;
    userId: string;
    text: string;
    date: number;
}

export interface SystemMessage {
    id: string;
    userId: string;
    text: string;
    date: number;
    read: boolean;
}


export interface Game {
    /**Unique identification characters of a game.*/
    id: string;
    /**Name of the game.*/
    name: string;
    /**Page name of where a game can be accessed.*/
    url: string;
    /**Unused enum that is always `1`.*/
    type: 1;
    /**Whether or not a game has Load Removed Time (LRT) as a timing method.*/
    loadtimes: boolean;
    /**Whether or not the game supports entering milliseconds when entering a time into a run.*/
    milliseconds: boolean;
    /**Whether or not a game has In Game Time (IGT) as a timing method.*/
    igt: boolean;
    /**Whether or not runs require moderators to verify them.*/
    verification: boolean;
    /**Whether or not the default option for 'Automatically Verify Run' is true.*/
    autoVerify?: boolean;
    /**Whether or not videos are required for submission.*/
    requireVideo: boolean;
    /**Emulator allowability in a game.*/
    emulator: Enums.EmulatorType;
    /**Default timing method of the game.*/
    defaultTimer: Enums.TimingMethod;
}

export interface GameStats {
    gameId: string;
    totalRuns: number;
    totalRunsFG: number;
    totalRunsIL: number;
    totalRunTime: number;
    recentRuns: number;
    recentRunsFG: number;
    recentRunsIL: number;
    totalPlayers: number;
    activePlayers: number;
    followers: number;
    guides: number;
    resources: number;
}

export interface GameNews {
    id: string;
    gameId: string;
    userId: string;
    title: string;
    /**Omitted for all but the first item in `GetGameSummary.newsList[]*/
    body?: string;
    dateSubmitted: number;
}

export interface GameModerator {
    gameId: string;
    userId: string;
    level: Enums.GamePowerLevel;
}

export interface GameBoost {
    id: string;
    createdAt: number;
    updatedAt: number;
    gameId: string;
    donorUserId: string;
    anonymous: boolean;
    recipientUserIds: [];
}

export interface GameTypeDetails {
    id: Enums.GameType
    name: string;
    url: string;
    description: string;
    allowBaseGame: boolean;
}

/**TODO: Check for optional props*/
export interface GameSettings {
    id: string;
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
    gameId: string;
    /**enum? appears to always be 0*/
    state: number;
    count: number;
    minDate?: number;
    maxDate?: number;
}

export interface GameFollower {
    gameId: string;
    followerId: string;
    pos?: number;
    accessCount: number;
    lastAccessDate: number;
}

export interface GameRunner {
    gameId: string;
    userId: string;
    runCount: number;
}

export interface Level {
    id: string;
    gameId: string;
    name: string;
    url: string;
    pos: number;
    rules?: string;
    archived: boolean;
}

export interface Notification {
    id: string;
    date: number;
    title: string;
    path: string;
    read: boolean;
}

export interface NotificationSetting {
    type: number;  //# enum??
    gameId?: string;
    site: boolean;
    email: boolean;
}

/**A different type of notification are returned by `GetStaticData` than in other areas.*/
export interface NotificationSettingStaticData {
    id: number;
    group: string;
    title: string;
    pos: number;
    gameSpecific: boolean;
    siteDefault: number;
    emailDefault: boolean;
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
    defaultGroups: GameOrderGroup[];
    supporterGroups: GameOrderGroup[];
}

/**Represents a speedrun's public data.*/
export interface Run {
    /**Unique identification characters of a run.*/
    id: string;
    /**Unique identification characters of the run's game.*/
    gameId: string;
    /**Unique identification characters of the run's category.*/
    categoryId: string;
    /**Unique identification characters of the run's level, if the run is on an individual level (IL).*/
    levelId?: string;
    /**Timing of the run, in seconds. If the run has an *LRT* (Load Removed Time) **and** an *RTA* (Real Time Attack) time, this property will be the LRT. If there is an RTA and not an LRT, this will be the RTA.*/
    time?: number;
    /**Timing of the run, in seconds. If the run has an *LRT* (Load Removed Time) **and** an *RTA* (Real Time Attack) time, this property will be the RTA. If there is an LRT and not an RTA, this will be the LRT.*/
    timeWithLoads?: number;
    /**In Game Time* of the run, in seconds.*/
    igt?: number;
    /**Unique identification characters of a platform. Platforms can be accessed with `GetPlatformList`.*/
    platformId?: string;
    /**Whether or not an emulator was used in the run.*/
    emulator: boolean;
    /**Unique identification characters of a region. Found in older games that vary based on regions.*/
    regionId?: string;
    /**Everything in the 'Video URL' box.*/
    video?: string;
    /**Description of a run.*/
    comment?: string;
    /**Unique user identification of the run submitter. Absent if the submitter is deleted.*/
    submittedById?: string;
    /**A run's verification status.*/
    verified: Enums.RunStatus;
    /**Unique user identification characters of the run resolver. Absent if the resolver is deleted.*/
    verifiedById?: string;
    /**Run rejection reason if it was rejected.*/
    reason?: string;
    /**UNIX timestamp of a run's (changeable) date.*/
    date: number;
    /**UNIX timestamp of when the run was submitted.*/
    dateSubmitted?: number;
    /**UNIX timestamp of when the run was resolved.*/
    dateVerified?: number;
    /**Whether the run has *splits.io* splits. Splits.io has been shut down; this is `false` on all new runs.*/
    hasSplits: boolean;
    /**Whether the run is obsolete or not - absent when false.*/
    obsolete?: boolean;
    /**Leaderboard rank of the run. Absent when obsolete.*/
    place?: number;
    /**Unique identification characters of players in the run.*/
    playerIds: string[];
    /**Unique identification characters of values (subcategories and annotations) in the run.*/
    valueIds: string[];
    /**Whether or not the run's category or subcategories were archived - absent when false.*/
    orphaned?: boolean;
    /**Property only present when fetching `GetModerationRuns` determining whether or not the run's ranking is estimated - absent when false.*/
    estimated?: boolean;
    /**Unused property that used to store reports of bad data for a run.*/
    issues: null;
    /**Availibility and 'status' of the video of a run.*/
    VideoState: Enums.VideoState;
};

export interface RunTime {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
}

export interface RunSettings {
    /**Omitted when submitting a new run.*/
    runId?: string;
    gameId: string;
    categoryId: string;
    playerNames: string[];
    /**whichever timing method is primary to the game is required*/
    time?: RunTime;
    timeWithLoads?: RunTime;
    igt?: RunTime;
    platformId: string;
    emulator: boolean;
    video: string;
    comment: string;
    date: number;
    values: VariableValue[];
}

export interface Series {
    id: string;
    name: string;
    url: string;
    addedDate: number;
    touchDate: number;
    websiteUrl?: string;
    discordUrl?: string;
    runCount: number;
    activePlayerCount: number;
    totalPlayerCount: number;
    officialGameCount: number;
    staticAssets: StaticAsset[];
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
    id: string;
    userId: string;
    providerId: number;  // enum
    createdAt: number;
    updatedAt: number;
    creditType: number;  // enum
    amount: number;
    currency: string;
    receivedAt: number;
    subscriptionId: string;
    periodStartsAt: number;
    periodEndsAt: number;
    providerItemId: string;
}

export interface SupporterCode {
    id: string;
    code: string;
    description: string;
    duration: number;
    userId: string;
    createdAt: number;
    updatedAt: number;
}

export interface SupporterSubscription {
    id: string;
    userId: string;
    providerId: number;  // enum
    createdAt: number;
    updatedAt: number;
    expiresAt: number;
    planId: number;  // enum
    nextPeriodPlanId: number;  // enum
    status: number;  // enum
    /**Default 0, undocumented but assume timestamp otherwise TODO*/
    trialEndsAt: number;
    cancelAtPeriodEnd: boolean;
    canceledAt: number;  // TODO assume timestamp
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
    id: string;
    name: string;
    url: string;
    pos: number;
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