//Endpoints that don't give the "Method Not Allowed" error when called with GET.

import * as Enums from '../enums.js';
import * as Interfaces from '../interfaces.js';
import { AtLeastOne } from '../types.js';

/**
 * Gets a leaderboard, with Players included.
 * 
 * `GetGameLeaderboard` can fetch twice as many runs, and also fetches Games, Platforms, Regions, Values, and Variables.
 */
export interface GetGameLeaderboard2 {

    /**
     * The leaderboard to fetch.
     */
    params: Interfaces.LeaderboardParams;

    /**
     * The maximum amount of `Run`s per page.
     * 
     * @max 100
     * @default 100
     */
    limit?: number;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;

}

/**
 * Gets a leaderboard, with all relevant items included.
 * 
 * `GetGameLeaderboard2` only includes Runs and Players, and has half the maximum `limit`.
 */
export interface GetGameLeaderboard {

    /**
     * The leaderboard to fetch.
     */
    params: Interfaces.LeaderboardParams;

    /**
     * The limit of Runs per page.
     * 
     * @max 200
     * @default 100
     */
    limit?: number;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Gets mostly leaderboard-related data of a game.
 * 
 * Both parameters function the same. If both are included, `gameId` will override.
 */
interface GetGameData_Base {

    /**
     * ID of the game.
     */
    gameId: string;

    /**
     * Game page URL.
     */
    gameUrl: string;
}

export type GetGameData = AtLeastOne<GetGameData_Base, 'gameId' | 'gameUrl'>;

/**
 * Gets mostly miscellaneous data of a game.
 * 
 * Both parameters function the same. If both are included, `gameId` will override.
 */
interface GetGameSummary_Base {

    /**
     * ID of the game.
     */
    gameId: string;

    /**
     * Subpath URL of the game.
     */
    gameUrl: string;
}

export type GetGameSummary = AtLeastOne<GetGameSummary_Base, 'gameId' | 'gameUrl'>;

/**
 * Gets the world record history of a game leaderboard.
 */
export interface GetGameRecordHistory {

    /**
     * Leaderboard to fetch record history of.
     */
    params?: Interfaces.LeaderboardParams;

    /**
     * The limit of Runs per page.
     * 
     * @max 200
     * @default 100
     */
    limit?: number;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Searches for site items with a query.
 */
export interface GetSearch {

    /**
     * The text you are searching.
     */
    query?: string;

    /**
     * Useless parameter, there is no affect on what is fetched based on the value.
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
     * The maximum amount of items to fetch in each `[item]List` array.
     * 
     * @max 100
     * @default 100
     */
    limit?: number;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Gets non-obsolete latest runs of a game.
 * 
 * When `seriesId` and `gameId` are exempted, 
 */
export interface GetLatestLeaderboard {

    /**
     * ID of the game.
     * 
     * When exempted, lists in the responses will be empty.
     */
    gameId?: string;

    /**
     * ID of a series
     */
    seriesId?: string;

    /**
     * The maximum amount of Runs to fetch.
     * 
     * Warning: Obsolete runs are not included, but still count to the limit.
     * 
     * If this is `20` and 5 out of the 20 latest runs are obsolete, it will only return the 15 non-obsolete runs.
     * 
     * @max Around 99999, however it varies with caching-related factors.
     * @default 25
     */
    limit?: number;

    /**
     * The run list page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Gets a single run.
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
     * Subpath URL of the user.
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

/**
 * Gets threads created by a specific user.
 */
export interface GetUserThreads {

    /**
     * ID of the user.
     */
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
 * Gets a specific Title.
 */
export interface GetTitle {

    /**
     * ID of the title.
     */
    titleId: string;
}

/**
 * Gets site articles.
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
     * The target of an article, either being `news` or a path URL for site information articles.
     */
    target?: string;

    /**
     * The maximum amount of Articles to fetch.
     * 
     * @max 500
     * @default 500
     */
    limit?: number;

    /**
     * The article list page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Gets a specific site article.
 */
interface GetArticle_Base {

    /**
     * ID of the article to fetch.
     */
    id: string;

    /**
     * Slug of the article to fetch.
     */
    slug: string;
}

export type GetArticle = AtLeastOne<GetArticle_Base>;

/**
 * Gets a list of games.
 */
export interface GetGameList {

    /**
     * ID of a series to filter by.
     */
    seriesId?: string;

    /**
     * ID of a platform to filter by.
     */
    platformId?: string;

    /**
     * Search query for game names or game subpath URLs.
     */
    search?: string;

    /**
     * `GameOrderType` to filter games by.
     */
    orderType?: Enums.GameOrderType;

    /**
     * The maximum amount of Games to fetch.
     * 
     * @max 500
     * @default 500
     */
    limit?: number;

    /**
     * The game list page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Gets a list of Platforms in the site.
 */

export interface GetPlatformList {}

/**
 * Gets information for the home page.
 */
export interface GetHomeSummary {}

/**
 * Gets a list of series on the site.
 */
export interface GetSeriesList {

    /**
     * A query to search for, of series names or subpath URLs.
     */
    search?: string;
    orderType?: Enums.GameOrderType;

    /**
     * The maximum amount of Series to fetch.
     * 
     * @max 500
     * @default 500
     */
    limit?: number;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Gets most information pertinent to a series.
 */
export interface GetSeriesSummary {

    /**
     * Subpath URL of the series.
     */
    seriesUrl: string;
}

/**
 * Gets the top 3 runs from all levels under a level category.
 */
export interface GetGameLevelSummary {

    /**
     * The game leaderboard to fetch level summaries from.
     * 
     * When not included, `runList[]` will be empty.
     */
    params?: Interfaces.LeaderboardParams;

    /**
     * The limit of Runs per page.
     * 
     * @max Unknown - likely around 99999.
     * @default Unknown - likely around 99999.
     */
    limit?: number;

    /**
     * The leaderboard page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Gets a random Game.
 */
export interface GetGameRandom {}

/**
 * Gets all guides on a game.
 */
export interface GetGuideList {

    /**
     * ID of the game.
     */
    gameId: string;
}

/**
 * Get a specific guide.
 */
export interface GetGuide {  

    /**
     * ID of the guide.
     */
    id: string;
}

/**
 * Gets news posts in a game.
 */
export interface GetNewsList {

    /**
     * ID of the game.
     */
    gameId: string;
}

/**
 * Gets a specific game news post.
 */
export interface GetNews {
    
    /**
     * ID of the news post.
     */
    id: string;
}

/**
 * Gets a single resource.
 */
export interface GetResource {
    resourceId: string;
}

/**
 * Get a list of a game's resources.
 */
export interface GetResourceList {
    gameId: string;
}

/**
 * Gets a list of live streams on twitch that have the `Speedrun` tag.
 * 
 * A stream is assigned to a game when the Twitch game is the Game's `GameSettings.twitchName`.
 */
export interface GetStreamList {

    /**
     * ID of a series.
     */
    seriesId?: string;

    /**
     * ID of a game.
     */
    gameId?: string;
}

/**
 * Get threads on a forum.
 */
export interface GetThreadList {

    /**
     * ID of the forum.
     */
    forumId: string;
}

/**
 * Gets a comment post's Thread and Forum by `commentId`.
 */
export interface GetThreadStateByCommentId {

    /**
     * ID of the comment.
     */
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

    /**
     * ID of the challenge you are getting the leaderboard from.
     */
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

    /**
     * ID of the challenge.
     */
    id: string;
}

/**
 * Get a user's runs for display on their profile.
 */
export interface GetUserLeaderboard {

    /**
     * ID of the user.
     */
    userId: string;
}

/**
 * Gets game and series moderation stats for any user.
 */
export interface GetUserModeration {

    /**
     * ID of the user.
     */
    userId: string;
}

/**
 * Get a list of comments on an item, and data of the parent.
 */
export interface GetCommentList {

    /**
     * ID of the parent item to fetch.
     */
    itemId: string;

    /**
     * `ItemType` of the item referenced in `itemId`.
     */
    itemType: Enums.ItemType;

    /**
     * The maximum amount of `Comment`s per page.
     * 
     * When this is >= 500 but <= 1000, it will fetch a maximum of 500 `Run`s, but when over 1000 it will return a maximum of 20 runs.
     * @max 500
     * @default 20
     */
    limit?: number;

    /**
     * The comment page, in relation to `limit`.
     */
    page?: number;
}

/**
 * Get a specific thread.
 */
export interface GetThread {

    /**
     * ID of the thread.
     */
    id: string;
}

/**
 * Get static data for the site.
 */
export interface GetStaticData {}

/**
 * Get a list of site-wide forums. When logged in, may include forums of followed games.
 */
export interface GetForumList {}