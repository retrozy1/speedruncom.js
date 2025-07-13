export enum TimeDirection {
    Ascending,
    Descending
}

export enum PlayerMatchMode {
    AllPlayersInOrder,
    AllPlayersAnyOrder,
    AnyPlayersInOrder,
    AnyPlayersAnyOrder
}

/**The type of the item this object is referencing (eg. a comment on either a run or a thread)*/
export enum ItemType {
    Unknown,
    Comment,
    Run,
    Game,
    Guide,
    Resource,
    User,
    Thread,
    GameMod,
    Category,
    Level,
    GameRequest,
    Ticket = 22,
    TicketNote,
    News = 27,
    GameBoostToken,
    GameBoost,
    Article,
    UserFollower,
    Challenge,
    ChallengeRun
}

export enum CommentableItemType {
    Run = 2,
    Thread = 7,
    News = 27,
    Article = 30,
    ChallengeRun = 33
}

export enum ForumType {
    FrontPage = 1,
    Supporter,
    Game
}

export enum DefaultViewType {
    FullGame,
    Levels
}

export enum GameOrderType {
    Name = 1,
    NewestReleased,
    OldestReleased,
    MostActive,
    LeastActive,
    MostPlayers,
    LeastPlayers,
    MostRuns,
    LeastRuns,
    NewestAdded,
    OldestAdded
}


export enum SitePowerLevel {
    Banned,
    User,
    /**@deprecated Unused power level for users that can moderate 'content'.*/
    ContentMod,
    /**@deprecated Unused power level for users that had more limited version of SiteAdmin.*/
    SiteMod,
    SiteAdmin
}

export enum EventType {
    None = "",
    CategoryCreated = "category-created",
    CategoryRemoved = "category-removed",
    CategoryRestored = "category-restored",
    CategoryUpdated = "category-updated",
    CommentCreated = "comment-created",
    CommentDeleted = "comment-deleted",
    /**
     * New comment updates are not recognized as events as of a few years ago.
     */
    CommentUpdated = "comment-updated",
    GameCoversUpdated = "game-covers-updated",
    GameCreated = "game-created",
    GameModeratorCreated = "game-moderator-created",
    GameModeratorRemoved = "game-moderator-removed",
    GameModeratorUpdated = "game-moderator-updated",
    GameNewsPostCreated = "game-news-post-created",
    GameNewsPostEdited = "game-news-post-edited",
    GameNewsPostRemoved = "game-news-post-removed",
    GameRestored = "game-restored",
    GameUpdated = "game-updated",
    GameRequestReviewed = "gamerequest-reviewed",
    LevelCreated = "level-created"
}

export enum ChallengeState {
    Draft,
    Published,
    Finalized
}

/**
 * Who is allowed to perform an action (posting comments, guides or resources).
 */
export enum ItemPermissionType {
    All,
    Disabled,
    VerifiedHere,
    VerifiedAny,
    ModsOnly
}

export enum ObsoleteFilter {
    Hidden,
    Shown,
    Exclusive
}

export enum EmulatorFilter {
    Hidden,
    Shown,
    Exclusive
}

export enum VideoFilter {
    Optional,
    Required,
    Missing
}

export enum TimingMethod {
    /**LRT if present, otherwise RTA.*/
    LRTThenRTA,
    /**RTA if LRT is present.*/
    RTAIfLRT,
    InGameTime
}

/**Classifiers for games, provided in `Game.gameTypeIds`.*/
export enum GameType {
    RomHack = 1,
    Modification,
    FanGame,
    WebGame,
    PrereleaseGame,
    MobileGame,
    Expansion,
    CategoryExtensions,
    MultipleGames,
    MiniGame,
    ServerMap,
    HomebrewGame
}

export enum ResourceType {
    Tool = 1,
    Save,
    Splits,
    Patch
}

export enum GamePowerLevel {
    Verifier = -1,
    Moderator,
    SuperModerator,
}

export enum EmulatorType {
    Banned = -1,
    Hidden,
    Shown
}

export enum RunStatus {
    Pending,
    Verified,
    Rejected
}

/**
 * Video at-risk status for Twitch Highlights and the like.
 */
export enum VideoState {
    Unknown,
    AtRisk,
    Safe,
    Abandoned
}

export enum SupportPlanPeriod {
    Monthly = "monthly",
    Yearly = "yearly"
}

export enum NavbarColorType {
    Primary,
    Panel
}

export enum ScrollType {
    None,
    Slow,
    Medium,
    Fast
}

export enum PositionType {
    TopLeft,
    Top,
    TopRight,
    Left,
    Center,
    Right,
    BottomLeft,
    Bottom,
    BottomRight
}

export enum RepeatType {
    None,
    Horizontal,
    Vertical,
    Both
}

export enum FitType {
    Original,
    Fit
}

export enum TicketQueueType {
    GameRequests = 1,
    SeriesRequests,
    ModReports,
    MarathonRequests,
    ContentReports,
    UserReports,
    BugReports,
    FrontPageRequests,
    Feedback,
    StaffApplications,
    Support,
    ContentRequests,
    Supporter
}

export enum TicketType {
    GameRequest = 1,
    SeriesRequest,
    ModRequest,
    MarathonRequest,
    ContentReport,
    UserReport,
    BugReport,
    FrontPageRequest,
    Feedback,
    StaffApplication,
    OtherSupport,
    GameTypeUpdate,
    AddToSeriesRequest,
    AddPlatformRequest,
    OtherGameRequest,
    SupporterHelp
}

export enum TicketStatus {
    Pending,
    Approved,
    Denied,
    Reviewing,
    Withdrawn
}

export enum IconType {
    None,
    Default,
    Custom
}

export enum IconPosition {
    Before,
    After
}

export enum HomepageStreamType {
    Muted,
    Paused,
    Hidden
}

export enum GameSortType {
    Alphabetical,
    Chronological,
    Custom
}

export enum TimeDisplayUnits {
    Explicit,
    Colon
}

export enum TimeReference {
    Absolute,
    Relative
}

export enum DateFormat {
    YYYY_MM_DD,
    DD_MM_YYYY,
    MM_DD_YYYY
}

export enum TimeFormat {
    HH_MM,
    HH_MM_SS,
    HH_MM_12h,
    HH_MM_SS_12h
}

/**
 * Depricated values are still accessible by the API, but not settable.
 */
export enum SocialConnection {
    /**@deprecated*/
    ASKfm = 1,
    /**@deprecated*/
    BattleNet,
    BiliBili,
    /**@deprecated*/
    DeviantArt,
    Discord,
    /**@deprecated*/
    DouYu,
    /**@deprecated*/
    Duolingo,
    Facebook,
    /**@deprecated*/
    GooglePlus,
    /**@deprecated*/
    GooglePodcasts,
    Instagram,
    /**@deprecated*/
    ITunes,
    /**@deprecated*/
    Mixer,
    /**@deprecated*/
    MMRTA,
    Niconico,
    /**@deprecated*/
    Patreon,
    /**@deprecated*/
    Pinterest,
    Reddit,
    /**@deprecated*/
    Smashcast,
    /**@deprecated*/
    Snapchat,
    /**@deprecated*/
    SoundCloud,
    /**@deprecated*/
    SplitsIO,
    /**@deprecated*/
    Spotify,
    /**@deprecated*/
    SpotifyShow,
    /**@deprecated*/
    SRL,
    /**@deprecated*/
    Steam,
    /**@deprecated*/
    Stitcher,
    /**@deprecated*/
    Tumblr,
    Twitch,
    Twitter,
    Website,
    Youtube,
    /**@deprecated*/
    ZSR,
    Bluesky,
    Threads,
}

export enum VarCategoryScope {
    All = -1,
    Single = 1
}

export enum VarLevelScope {
    All = -2,
    Levels,
    FullGame,
    SingleLevel
}

export enum VarDisplayMode {
    Auto,
    Dropdown,
    Buttons
}
