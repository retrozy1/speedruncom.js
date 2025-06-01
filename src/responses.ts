import * as Interfaces from './interfaces.js';

//TODO does src use GetGameData along with this to get things like platform objects?
export interface GetGameLeaderboard2 {

    /**
     * Runs in the leaderboard.
     */
    runList: Interfaces.GameRun[];

    /**
     * Every Player with a run in a game.
     */
    playerList: Interfaces.Player[];
    pagination: Interfaces.Pagination;
}

export interface GetGameLeaderboard {
    leaderboard: Interfaces.Leaderboard;
}

export interface GetGameData {
    game: Interfaces.Game;
    categories: Interfaces.Category[];
    levels: Interfaces.Level[];
    moderators: Interfaces.GameModerator[];
    platforms: Interfaces.Platform[];
    regions: Interfaces.Region[];
    theme?: Interfaces.Theme[];
    users: Interfaces.User[];
    values: Interfaces.Value[];
    variables: Interfaces.Variable[];
}

export interface GetGameSummary {
    game: Interfaces.Game;
    gameBoosts: Interfaces.GameBoost[];
    gameModerators: Interfaces.GameModerator[];
    forum: Interfaces.Forum;
    newsList: Interfaces.GameNews[];
    gameStats: Interfaces.GameStats[];
    stats: Interfaces.GameStats;
    relatedGames: Interfaces.Game[];
    seriesList: Interfaces.Series[];
    theme: Interfaces.Theme;
    threadList: Interfaces.Thread[];
    users: Interfaces.User[];
    challengeList: Interfaces.Challenge[];
    challengeCount: number;
    guideCount: number;
    levelCount: number;
    newsCount: number;
    relatedCount: number;
    resourceCount: number;
    streamCount: number;
    threadCount: number;
}

export interface GetGameRecordHistory {
    playerList: Interfaces.Player[];
    runList: Interfaces.GameRun[];
}

export interface GetSearch { //TODO add platform, TODO this is probably inacurate i think the users are much less detailed + more
    gameList: Interfaces.Game[];
    newsList: Interfaces.GameNews[];
    pageList: Interfaces.Article[];
    seriesList: Interfaces.Series[];
    userList: Interfaces.User[];
    challengeList: Interfaces.Challenge[] | null;
}

export interface GetLatestLeaderboard {
    categories: Interfaces.Category[];
    games: Interfaces.Game[];
    levels: Interfaces.Level[];
    players: Interfaces.Player[];
    regions: Interfaces.Region[];
    runs: Interfaces.GameRun[];
    values: Interfaces.Value[];
    variables: Interfaces.Variable[];
    platforms: Interfaces.Platform[];
}

export interface GetRun {
    game: Interfaces.Game;
    category: Interfaces.Category;
    level?: Interfaces.Level;
    platform?: Interfaces.Platform;
    players: Interfaces.Player[];
    region?: Interfaces.Region;
    run: Interfaces.GameRun;
    users: Interfaces.User[];
    values: Interfaces.Value[];
    variables: Interfaces.Variable[];
}

export interface GetUserSummary {
    user: Interfaces.User;
    userProfile: Interfaces.UserReducedProfile;
    userStats: Interfaces.UserStats;

    /**
     * Empty list if the user has set game follows to private.
     */
    userGameFollowerStats: Interfaces.UserGameFollow[];
    userGameModeratorStats: Interfaces.UserModerationStats[];
    userGameRunnerStats: Interfaces.UserGameRunnerStats[];
    userSocialConnectionList: Interfaces.UserSocialConnection[];
    games: Interfaces.Game[];
    theme: Interfaces.Theme;
    titleList: Interfaces.Title[];
}

export interface GetUserComments {
    articleList: Interfaces.Article[];
    commentList: Interfaces.Comment[];
    forumList: Interfaces.Forum[];
    gameList: Interfaces.Game[];
    likeList: Interfaces.Like[];
    newsList: Interfaces.GameNews[];
    runList: Interfaces.GameRun[];
    threadList: Interfaces.Thread[];
    userList: Interfaces.User[];
    pagination: Interfaces.Pagination;
}

export interface GetUserPopoverData {
    user: Interfaces.User;
    userProfile: Interfaces.UserReducedProfile;
    userStats: Interfaces.UserStats;
    userSocialConnectionList: Interfaces.UserSocialConnection[];

    /**
     * Contains games sometimes
     */
    games: Interfaces.Game[];
    titleList: Interfaces.Title[];
}

export interface GetTitle {
    titleList: Interfaces.Title[];
}

export interface GetArticleList {
    articleList: Interfaces.Article[];
    pagination: Interfaces.Pagination;
    gameList: Interfaces.Game[];
    userList: Interfaces.User[];
}

export interface GetArticle {
    article: Interfaces.Article;
    relatedArticleList: Interfaces.Article[];
    gameList: Interfaces.Game[];
    userList: Interfaces.User[];
}

export interface GetChallenge {
    challenge: Interfaces.Challenge;
    game: Interfaces.Game;
    moderatorList: Interfaces.ChallengeModerator[];
    standingList: Interfaces.ChallengeStanding[];
    theme: Interfaces.Theme;
    userList: Interfaces.User[];
    challengeRunCount: number;
    gameFollowerCount: number;
    titleList: Interfaces.Title[];
}

export interface GetChallengeLeaderboard {
    challengeRunList: Interfaces.ChallengeRun[]
    playerList: Interfaces.Player[]
    userList: Interfaces.User[]
    pagination: Interfaces.Pagination
}

export interface GetChallengeRun {
    challenge: Interfaces.Challenge;
    challengeRun: Interfaces.ChallengeRun;
    game: Interfaces.Game;
    playerList: Interfaces.Player[];
    userList: Interfaces.User[];
}

export interface GetChallengeGlobalRankingList {
    rankingList: Interfaces.GlobalChallengeRanking[];
    userList: Interfaces.User[];
}

export interface GetGameList {
    article: Interfaces.Article;
    relatedArticleList: Interfaces.Article[];
    gameList: Interfaces.Game[];
    userList: Interfaces.User[];
}

export interface GetCommentList {
    commentable: Interfaces.Commentable;
    commentList: Interfaces.Comment[];
    likeList: Interfaces.Like[];
    userList: Interfaces.User[];
    pagination: Interfaces.Pagination;
}

export interface GetForumList {
    forumList: Interfaces.Forum[];
    gameList: Interfaces.Game[];
    userList: Interfaces.User[];
}

export interface GetStaticData {
    areas: Interfaces.Area[];
    colors: Interfaces.Color[];
    gameTypeList: Interfaces.GameTypeDetails[];
    notificationSettings: Interfaces.NotificationSettingStaticData[];
    platformList: Interfaces.Platform[];
    regionList: Interfaces.Region[];
    socialNetworkList: Interfaces.SocialNetwork[];

    /**
     * Unknown type
     */
    supporterPlanList?: any[] | null;
}

export interface GetHomeSummary {
    stream?: Interfaces.Stream;
}

export interface GetSeriesList {
    seriesList: Interfaces.Series[];
    pagination: Interfaces.Pagination;
}

export interface GetSeriesSummary {
    series: Interfaces.Series;
    forum: Interfaces.Forum;
    gameList: Interfaces.Game[];
    moderatorList: Interfaces.SeriesModerator[];
    theme: Interfaces.Theme;
    threadList: Interfaces.Thread[];
    userList: Interfaces.User[];
    gameCount: number;
    streamCount: number;
    threadCount: number;
}

export interface GetGameLevelSummary {
    category: Interfaces.Category;
    runList: Interfaces.GameRun[];
    playerList: Interfaces.Player[];
}

export interface GetGameRandom {
    game: Interfaces.Game;
}

export interface GetGuideList {
    guideList: Interfaces.Guide[];
    users: Interfaces.User[];
}

export interface GetGuide {
    guideList: Interfaces.Guide[];
    users: Interfaces.User[];
}

export interface GetNewsList {
    newsList: Interfaces.GameNews[];
    users: Interfaces.User[];
}

export interface GetNews {
    news: Interfaces.GameNews;
    users: Interfaces.User[];
}

export interface GetNewsList {
    newsList: Interfaces.GameNews[];
    users: Interfaces.User[];
}

export interface GetResourceList {
    resourceList: Interfaces.Resource[];
    users: Interfaces.User[];
}

export interface GetRun {
    game: Interfaces.Game;
    category: Interfaces.Category;
    level?: Interfaces.Level;
    platform?: Interfaces.Platform
    players: Interfaces.Player[];
    region?: Interfaces.Region;
    run: Interfaces.GameRun;
    users: Interfaces.User[];
    values: Interfaces.Value[];
    variables: Interfaces.Variable[];
}

export interface GetSearch {
    gameList: Interfaces.Game[];
    newsList: Interfaces.GameNews[];
    pageList: Interfaces.Article[];
    seriesList: Interfaces.Series[];
    userList: Interfaces.User[];
    challengeList: Interfaces.Challenge[];
}

export interface GetSeriesList {
    seriesList: Interfaces.Series[];
    pagination: Interfaces.Pagination;
}

export interface GetSeriesSummary {
    series: Interfaces.Series;
    forum: Interfaces.Forum;
    gameList: Interfaces.Game[];
    moderatorList: Interfaces.SeriesModerator[];
    theme: Interfaces.Theme;
    threadList: Interfaces.Thread[];
    userList: Interfaces.User[];
    gameCount: number;
    streamCount: number;
    threadCount: number;
}

export interface GetStreamList {
    gameList: Interfaces.Game[];
    streamList: Interfaces.Stream[];
    userList: Interfaces.User[];
    pagination: Interfaces.Pagination;
}

export interface GetThread {
    thread: Interfaces.Thread;
    commentList: Interfaces.Comment[];
    userList: Interfaces.User[];
    likeList: Interfaces.Like[];
    pagination: Interfaces.Pagination;
}

export interface GetThreadList {
    threadList: Interfaces.Thread[];
    pagination: Interfaces.Pagination;
    users: Interfaces.User[];
}

export interface GetThreadStateByCommentId {
    forum: Interfaces.Forum;
    thread: Interfaces.Thread;
    commentId: string;
    pagination: Interfaces.Pagination;
}

export interface GetUserLeaderboard {
    categories: Interfaces.Category[];
    games: Interfaces.Game[];
    levels: Interfaces.Level[];
    platforms: Interfaces.Platform[];
    regions: Interfaces.Region[];
    runs: Interfaces.GameRun[];
    user: Interfaces.User;
    userProfile: Interfaces.UserReducedProfile;
    users: [];
    players: Interfaces.Player[];
    values: Interfaces.Value[];
    variables: Interfaces.Variable[];

    /**
     * Unused null key
     */
    followedGameIds: null;
    challengeList: Interfaces.Challenge[];
    challengeRunList: Interfaces.GameRun[];
}

export interface GetUserModeration {
    gameList: Interfaces.Game[];
    gameModeratorList: Interfaces.GameModerator[];
    platformList: Interfaces.Platform[];
    seriesList: Interfaces.Series[];
    seriesModeratorList: Interfaces.SeriesModerator[];
    userGameModeratorStatsList: Interfaces.UserModerationStats[];
}

export interface GetUserSummary {
    user: Interfaces.User;
    userProfile: Interfaces.UserReducedProfile;
    userStats: Interfaces.UserStats;
    
    /**
     * Empty list if the user has set game follows to private
     */
    userGameFollowerStats: Interfaces.UserGameFollow[];
    userGameModeratorStats: Interfaces.UserModerationStats[];
    userGameRunnerStats: Interfaces.UserGameRunnerStats[];
    userSocialConnectionList: Interfaces.UserSocialConnection[];
    games: Interfaces.Game[];
    theme: Interfaces.Theme;
    titleList: Interfaces.Title[];
}

export interface GetUserComments {
    articleList: Interfaces.Article[];
    commentList: Interfaces.Comment[];
    forumList: Interfaces.Forum[];
    gameList: Interfaces.Game[];
    likeList: Interfaces.Like[];
    newsList: Interfaces.GameNews[];
    runList: Interfaces.GameRun[];
    threadList: Interfaces.Thread[];
    userList: Interfaces.User[];
    pagination: Interfaces.Pagination;
}

export interface GetUserThreads {
    commentList: Interfaces.Comment[];
    forumList: Interfaces.Forum[];
    likeList: Interfaces.Like[];
    threadList: Interfaces.Thread[];
    userList: Interfaces.User[];
    pagination: Interfaces.Pagination;
}

export interface GetUserPopoverData {
    user: Interfaces.User;
    userProfile: Interfaces.UserReducedProfile;
    userStats: Interfaces.UserStats;
    userSocialConnectionList: Interfaces.UserSocialConnection[];
    
    /**
     * Contains games sometimes
     */
    games: Interfaces.Game[];
    titleList: Interfaces.Title[];
}

export interface GetTitleList {
    titleList: Interfaces.Title[];
}

export interface GetTitle {
    title: Interfaces.Title;
}

//POST

export interface GetAuditLogList {
    auditLogList: Interfaces.AuditLogEntry[];
    userList: Interfaces.User[];
    gameList: Interfaces.Game[];
    categoryList: Interfaces.Category[];

    /**
     * Array of `Level`s referenced in an Audit Log.
     * When empty, this is `null`, not an empty array.
     */
    levelList: Interfaces.Level[] | null;
    variableList: Interfaces.Variable[];
    valueList: Interfaces.Value[];
    runList: Interfaces.GameRun[];
    pagination: Interfaces.Pagination;
}

export interface GetCommentable {
    commentable: Interfaces.Commentable;
}

export interface GetConversationMessages {
    conversation: Interfaces.Conversation;
    participants: Interfaces.ConversationParticipant[];
    messages: Interfaces.ConversationMessage[];
    users: Interfaces.User[];
    userBlocks: Interfaces.UserBlock[];
}

export interface GetConversations {
    conversations: Interfaces.Conversation[];
    participants: Interfaces.ConversationParticipant[];
    users: Interfaces.User[];
    systemMessages: Interfaces.SystemMessage[];
}

export interface GetForumReadStatus {
    forumReadStatusList: Interfaces.ForumReadStatus[];
}

export interface GetGameSettings {
    settings: Interfaces.GameSettings;
    moderatorList: Interfaces.GameModerator[];
    theme: Interfaces.Theme;
    gameList: Interfaces.Game[];
    userList: Interfaces.User[];
}

export interface GetModerationGames {

    /**
     * List of Games you moderate. `null` when not logged in.
     */
    games: Interfaces.Game[] | null;

    /**
     * `GameModerationStats` of the games you moderate. `null` when not logged in.
     */
    gameModerationStats: Interfaces.GameModerationStats[] | null;
}

export interface GetModerationRuns {
    categories: Interfaces.Category[];
    games: Interfaces.Game[];
    levels: Interfaces.Level[];
    pagination: Interfaces.Pagination;
    platforms: Interfaces.Platform[];
    players: Interfaces.Player[];
    regions: Interfaces.Region[];
    runs: Interfaces.GameRun[];
    values: Interfaces.Value[];
    variables: Interfaces.Variable[];
    users: Interfaces.User[];
}

export interface GetNotifications {
    unreadCount: number;
    notifications: Interfaces.Notification[];
    pagination: Interfaces.Pagination;
}

export interface GetRunSettings {
    settings: Interfaces.RunSettings;
    users: Interfaces.User[];
}

export interface GetSeriesSettings {
    settings: Interfaces.SeriesSettings;
    moderatorList: Interfaces.SeriesModerator[];
    gameList: Interfaces.Game[];
    theme: Interfaces.Theme;
    userList: Interfaces.User[];
}

export interface GetSession {
    session: Interfaces.Session;
}

/**
 * NB: if no theme is set then this response will be empty
 */
export interface GetThemeSettings {
    settings?: Interfaces.ThemeSettings;
    theme?: Interfaces.Theme;
}

export interface GetThreadReadStatus {
    threadReadStatusList: Interfaces.ThreadReadStatus[];
}

export interface GetTickets {
    ticketList: Interfaces.Ticket[];

    /**
     * Admins can see all notes, users can see messages here.
     */
    ticketNoteList: Interfaces.TicketNote[];
    pagination: Interfaces.Pagination;
    userList: Interfaces.User[];
    gameList: Interfaces.Game[];
    userModCountList: Interfaces.UserCount[];
    userRunCountList: Interfaces.UserCount[];
}

export interface GetUserBlocks {
    userBlocks: Interfaces.UserBlock[];
}

export interface GetUserSettings {
    settings: Interfaces.UserSettings;
    gameFollowerList: Interfaces.GameFollower[];
    gameModeratorList: Interfaces.GameModerator[];
    notificationSettings: Interfaces.NotificationSetting[];
    userSocialConnectionList: Interfaces.UserSocialConnection[];
    gameList: Interfaces.Game[];
    themeList: Interfaces.Theme[];
    titleList: Interfaces.Title[];
    supporterCreditList: Interfaces.SupporterCredit[];
    supporterCodeList: Interfaces.SupporterCode[];
    supporterSubscription?: Interfaces.SupporterSubscription;
    experimentList: any;
    enabledExperimentIds: any;
}

export interface GetUserSupporterData {
    supporterEndDate: number;
    boostEndDate: number;
}

export interface PutUserSupporterNewSubscription {
    subscription: Interfaces.SupporterSubscription;
    paymentIntentClientSecret: string;
}

export interface PutAuthLogin {
    loggedIn: boolean;
    tokenChallengeSent?: boolean;
}

export interface PutAuthSignup {
    loggedIn: boolean;
    tokenChallengeSent?: boolean;
}
    
export interface PutConversation {
    ok: true;
    conversationId: string;
    messageId: string;
}

export interface PutConversationMessage {
    ok: true;
    conversationId: string;
    messageId: string;
}

export interface PutGame {
    game: Interfaces.Game;
}

export interface PutRunSettings {
    runId: string;
}

export interface PutThread {
    thread: Interfaces.Thread;
}

export interface PutLike {
    likeList: Interfaces.Like[];
    userList: Interfaces.User[];
}

export interface PutTicket {
    ticketId: string;
}

export interface PutUserSettings {
    settings: Interfaces.UserSettings;
}

export interface GetUserApiKey {
    apiKey: string;
}

export interface GetUserFollowers {
    followerList: Interfaces.UserFollower;
    userList: Interfaces.User;
    pagination: Interfaces.Pagination;
}

export interface GetUserFollowingGames {
    followerList: Interfaces.UserFollower;
    gameList: Interfaces.Game;
    pagination: Interfaces.Pagination;
}

export interface GetUserFollowingUsers {
    followerList: Interfaces.UserFollower;
    userList: Interfaces.User;
    pagination: Interfaces.Pagination;
}

export interface GetUserGameBoostData {
    boostAvailableTokens: number;
    boostDistinctGamesCount: number;
    boostDistinctUsersCount: number;
    boostEndDate: number;
    boostGiftedCount: number;
    boostLastTokenDate: number;
    boostNextTokenAmount: number;
    boostNextTokenDate: number;
    boostReceivedCount: number;
    gameBoostList: Interfaces.GameBoost[];
    gameList: Interfaces.Game[];
    isBoosted: boolean;
    userList: Interfaces.User[];
}

export interface GetUserDataExport {
    articleList: Interfaces.Article[];
    commentList: Interfaces.Comment[];
    conversationList: Interfaces.ConversationLightweight[];
    gameFollowerList: Interfaces.GameFollower[];
    guideList: Interfaces.Guide[];
    likeList: Interfaces.Like[];
    messageList: Interfaces.ConversationMessage[];
    newsList: Interfaces.GameNews[];
    resourceList: Interfaces.Resource[];
    runList: Interfaces.GameRun[];
    threadList: Interfaces.Thread[];
    ticketList: Interfaces.Ticket[];
    ticketNoteList: Interfaces.TicketNote[];
    user: Interfaces.User;
    userFollowerList: Interfaces.UserFollower[];
    userSettings: Interfaces.UserSettings;
    userSocialConnectionList: Interfaces.UserSocialConnection[];
}

export interface PutUserUpdateEmail {
    emailChanged: boolean;
    tokenChallengeSent?: boolean;
}

export interface PutUserUpdateName {
    ok: true;
}

export interface GetAnnouncementLatest {
    id: string;
    title: string;
    message: string;

    /**
     * Site subpath to a related article.
     */
    link: string;
    enabled: boolean;

    /**
     * UNIX timestamp of when the announcement was created.
     */
    createDate: number;

    /**
     * UNIX timestamp of when the announcement was last updated.
     */
    updateDate: number;
}