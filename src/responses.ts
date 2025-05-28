import * as Enums from './enums';
import * as Interfaces from './interfaces';

export interface GetGameLeaderboard2 {
    runList: Interfaces.Run[];
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
    runList: Interfaces.Run[];
}

export interface GetSearch {
    gameList: Interfaces.Game[];
    newsList: Interfaces.GameNews[];
    pageList: Interfaces.Article[];
    seriesList: Interfaces.Series[];
    userList: Interfaces.User[];
    challengeList: Interfaces.Challenge[];
}

export interface GetLatestLeaderboard {
    categories: Interfaces.Category[];
    games: Interfaces.Game[];
    levels: Interfaces.Level[];
    players: Interfaces.Player[];
    regions: Interfaces.Region[];
    runs: Interfaces.Run[];
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
    run: Interfaces.Run;
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
    runList: Interfaces.Run[];
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

export interface GetGameList {
    article: Interfaces.Article;
    relatedArticleList: Interfaces.Article[];
    gameList: Interfaces.Game[];
    userList: Interfaces.User[];
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
    runList: Interfaces.Run[];
    playerList: Interfaces.Player[];
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

export interface 