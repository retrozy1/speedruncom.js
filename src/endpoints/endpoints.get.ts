//Endpoints that don't give the "Method Not Allowed" error when called with GET.

import * as Enums from '../enums.js';
import * as Interfaces from '../interfaces.js';
import { AtLeastOne } from '../types.js';

//todo GetPlatformList
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
 * Get static data for the site. Including all areas, colors, gameTypes, platforms, etc.
 */
export interface GetStaticData {}

/**
 * Get a list of site-wide forums. When logged in, may include forums of followed games.
 */
export interface GetForumList {}