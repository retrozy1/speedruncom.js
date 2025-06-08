import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import * as GetEndpoints from './endpoints/endpoints.get.js';
import * as PostEndpoints from './endpoints/endpoints.post.js'
import * as Responses from './responses.js';

const LANG = 'en';
const ACCEPT = 'application/json';
const BASE_USER_AGENT = 'speedrun.js';

const isBrowser = typeof window !== 'undefined';

const objectToBase64 = (obj: object) => {
    const jsonString = JSON.stringify(obj).replace(/\s+/g, '');
    return Buffer.from(jsonString).toString('base64');
}

class APIError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

export default class Client {

    axiosClient: AxiosInstance = axios.create({
        baseURL: 'https://www.speedrun.com/api/v2/',
        withCredentials: true,
        headers: {
            'Accept-Language': LANG,
            'Accept': ACCEPT,
        }
    });

    static axiosClient: AxiosInstance = axios.create({
        baseURL: 'https://www.speedrun.com/api/v2/',
        headers: {
            'Accept-Language': LANG,
            'Accept': ACCEPT,
        }
    });

    user!: string;
    pass!: string;

    constructor({ PHPSESSID, userAgent }: { PHPSESSID?: string, userAgent?: string }) {
        if (!isBrowser) this.axiosClient.defaults.headers.common['User-Agent'] = BASE_USER_AGENT + (userAgent ? `/${userAgent}` : '');

        if (PHPSESSID) {
            if (isBrowser) {
                console.error('You cannot use a PHPSESSID to authenticate in a browser environment.');
            } else {
                this.axiosClient.defaults.headers.common['Cookie'] = `PHPSESSID=${PHPSESSID}`;
            }
        }

        this.axiosClient.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => {
                if (error.response) {
                    const data = error.response?.data as { error?: string };
                    throw new APIError(data?.error || 'Unknown error', error.response.status);
                }
            }
        );
    }

    async request<T>(endpoint: string, params: object = {}, method: string = 'post'): Promise<T> {
        let response: any;
        if (method === 'post') {
            response = await this.axiosClient.post<T>(endpoint, params);
        } else {
            response = await this.axiosClient.get(`${endpoint}?_r=${objectToBase64(params)}`);
        }
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !isBrowser) this.axiosClient.defaults.headers.common['Cookie'] = `PHPSESSID=${cookie[0].split('=')[1].split(';')[0]}`;

        return response.data;
    }

    static async request<T>(endpoint: string, params: object = {}, method: string = 'post'): Promise<T> {
        let response: any;
        if (method === 'post') {
            response = await this.axiosClient.post<T>(endpoint, params);
        } else {
            response = await this.axiosClient.get(`${endpoint}?_r=${objectToBase64(params)}`);
        }
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !isBrowser) this.axiosClient.defaults.headers.common['Cookie'] = `PHPSESSID=${cookie[0].split('=')[1].split(';')[0]}`;

        return response.data;
    }

    //Built-in endpoints for auth

    /**
     * Attempts to authorize your cookies if using a browser, or authorizes this Client if otherwise.
     * If the account has two factor authentication, you have to use `setToken` with the token sent to the account's email address.
     */
    async login(username: string, password: string) {
        this.user = username;
        this.pass = password;

        return await this.request('PutAuthLogin', {
            name: username,
            password
        });
    }

    /**
     * Attempts to authorize your cookies if using a browser, or authorizes this Client if otherwise, with the token that `login()` sent to the account's email address.
     * @param token The 5-digit code sent to your email after a successful `login()`.
     */
    async setToken(token: string) {
        return await this.request('PutAuthLogin', {
            name: this.user,
            password: this.pass,
            token
        });
    }

    /**
     * Attempts to remove the PHPSESSID cookie if using a browser, otherwise removes your Client's authentication.
     */
    async logout() {
        if (isBrowser) return await this.request('PutAuthLogout');

        delete this.axiosClient.defaults.headers.common['Cookie'];
    }

    // Endpoints (auto-generated with build-client)
    async GetGameLeaderboard2(params: GetEndpoints.GetGameLeaderboard2): Promise<Responses.GetGameLeaderboard2> {
        return await this.request('GetGameLeaderboard2', params, 'post');
    }

    static async GetGameLeaderboard2(params: GetEndpoints.GetGameLeaderboard2): Promise<Responses.GetGameLeaderboard2> {
        return await this.request('GetGameLeaderboard2', params, 'get');
    }

    async GetGameLeaderboard(params: GetEndpoints.GetGameLeaderboard): Promise<Responses.GetGameLeaderboard> {
        return await this.request('GetGameLeaderboard', params, 'post');
    }

    static async GetGameLeaderboard(params: GetEndpoints.GetGameLeaderboard): Promise<Responses.GetGameLeaderboard> {
        return await this.request('GetGameLeaderboard', params, 'get');
    }

    async GetGameData(params: GetEndpoints.GetGameData): Promise<Responses.GetGameData> {
        return await this.request('GetGameData', params, 'post');
    }

    static async GetGameData(params: GetEndpoints.GetGameData): Promise<Responses.GetGameData> {
        return await this.request('GetGameData', params, 'get');
    }

    async GetGameSummary(params: GetEndpoints.GetGameSummary): Promise<Responses.GetGameSummary> {
        return await this.request('GetGameSummary', params, 'post');
    }

    static async GetGameSummary(params: GetEndpoints.GetGameSummary): Promise<Responses.GetGameSummary> {
        return await this.request('GetGameSummary', params, 'get');
    }

    async GetGameRecordHistory(params: GetEndpoints.GetGameRecordHistory): Promise<Responses.GetGameRecordHistory> {
        return await this.request('GetGameRecordHistory', params, 'post');
    }

    static async GetGameRecordHistory(params: GetEndpoints.GetGameRecordHistory): Promise<Responses.GetGameRecordHistory> {
        return await this.request('GetGameRecordHistory', params, 'get');
    }

    async GetSearch(params: GetEndpoints.GetSearch): Promise<Responses.GetSearch> {
        return await this.request('GetSearch', params, 'post');
    }

    static async GetSearch(params: GetEndpoints.GetSearch): Promise<Responses.GetSearch> {
        return await this.request('GetSearch', params, 'get');
    }

    async GetLatestLeaderboard(params: GetEndpoints.GetLatestLeaderboard): Promise<Responses.GetLatestLeaderboard> {
        return await this.request('GetLatestLeaderboard', params, 'post');
    }

    static async GetLatestLeaderboard(params: GetEndpoints.GetLatestLeaderboard): Promise<Responses.GetLatestLeaderboard> {
        return await this.request('GetLatestLeaderboard', params, 'get');
    }

    async GetRun(params: GetEndpoints.GetRun): Promise<Responses.GetRun> {
        return await this.request('GetRun', params, 'post');
    }

    static async GetRun(params: GetEndpoints.GetRun): Promise<Responses.GetRun> {
        return await this.request('GetRun', params, 'get');
    }

    async GetUserSummary(params: GetEndpoints.GetUserSummary): Promise<Responses.GetUserSummary> {
        return await this.request('GetUserSummary', params, 'post');
    }

    static async GetUserSummary(params: GetEndpoints.GetUserSummary): Promise<Responses.GetUserSummary> {
        return await this.request('GetUserSummary', params, 'get');
    }

    async GetUserComments(params: GetEndpoints.GetUserComments): Promise<Responses.GetUserComments> {
        return await this.request('GetUserComments', params, 'post');
    }

    static async GetUserComments(params: GetEndpoints.GetUserComments): Promise<Responses.GetUserComments> {
        return await this.request('GetUserComments', params, 'get');
    }

    async GetUserThreads(params: GetEndpoints.GetUserThreads): Promise<Responses.GetUserThreads> {
        return await this.request('GetUserThreads', params, 'post');
    }

    static async GetUserThreads(params: GetEndpoints.GetUserThreads): Promise<Responses.GetUserThreads> {
        return await this.request('GetUserThreads', params, 'get');
    }

    async GetUserPopoverData(params: GetEndpoints.GetUserPopoverData): Promise<Responses.GetUserPopoverData> {
        return await this.request('GetUserPopoverData', params, 'post');
    }

    static async GetUserPopoverData(params: GetEndpoints.GetUserPopoverData): Promise<Responses.GetUserPopoverData> {
        return await this.request('GetUserPopoverData', params, 'get');
    }

    async GetTitleList(params?: GetEndpoints.GetTitleList): Promise<Responses.GetTitleList> {
        return await this.request('GetTitleList', params, 'post');
    }

    static async GetTitleList(params?: GetEndpoints.GetTitleList): Promise<Responses.GetTitleList> {
        return await this.request('GetTitleList', params, 'get');
    }

    async GetTitle(params: GetEndpoints.GetTitle): Promise<Responses.GetTitle> {
        return await this.request('GetTitle', params, 'post');
    }

    static async GetTitle(params: GetEndpoints.GetTitle): Promise<Responses.GetTitle> {
        return await this.request('GetTitle', params, 'get');
    }

    async GetArticleList(params: GetEndpoints.GetArticleList): Promise<Responses.GetArticleList> {
        return await this.request('GetArticleList', params, 'post');
    }

    static async GetArticleList(params: GetEndpoints.GetArticleList): Promise<Responses.GetArticleList> {
        return await this.request('GetArticleList', params, 'get');
    }

    async GetArticle(params: GetEndpoints.GetArticle): Promise<Responses.GetArticle> {
        return await this.request('GetArticle', params, 'post');
    }

    static async GetArticle(params: GetEndpoints.GetArticle): Promise<Responses.GetArticle> {
        return await this.request('GetArticle', params, 'get');
    }

    async GetGameList(params: GetEndpoints.GetGameList): Promise<Responses.GetGameList> {
        return await this.request('GetGameList', params, 'post');
    }

    static async GetGameList(params: GetEndpoints.GetGameList): Promise<Responses.GetGameList> {
        return await this.request('GetGameList', params, 'get');
    }

    async GetPlatformList(params?: GetEndpoints.GetPlatformList): Promise<Responses.GetPlatformList> {
        return await this.request('GetPlatformList', params, 'post');
    }

    static async GetPlatformList(params?: GetEndpoints.GetPlatformList): Promise<Responses.GetPlatformList> {
        return await this.request('GetPlatformList', params, 'get');
    }

    async GetHomeSummary(params?: GetEndpoints.GetHomeSummary): Promise<Responses.GetHomeSummary> {
        return await this.request('GetHomeSummary', params, 'post');
    }

    static async GetHomeSummary(params?: GetEndpoints.GetHomeSummary): Promise<Responses.GetHomeSummary> {
        return await this.request('GetHomeSummary', params, 'get');
    }

    async GetSeriesList(params: GetEndpoints.GetSeriesList): Promise<Responses.GetSeriesList> {
        return await this.request('GetSeriesList', params, 'post');
    }

    static async GetSeriesList(params: GetEndpoints.GetSeriesList): Promise<Responses.GetSeriesList> {
        return await this.request('GetSeriesList', params, 'get');
    }

    async GetSeriesSummary(params: GetEndpoints.GetSeriesSummary): Promise<Responses.GetSeriesSummary> {
        return await this.request('GetSeriesSummary', params, 'post');
    }

    static async GetSeriesSummary(params: GetEndpoints.GetSeriesSummary): Promise<Responses.GetSeriesSummary> {
        return await this.request('GetSeriesSummary', params, 'get');
    }

    async GetGameLevelSummary(params: GetEndpoints.GetGameLevelSummary): Promise<Responses.GetGameLevelSummary> {
        return await this.request('GetGameLevelSummary', params, 'post');
    }

    static async GetGameLevelSummary(params: GetEndpoints.GetGameLevelSummary): Promise<Responses.GetGameLevelSummary> {
        return await this.request('GetGameLevelSummary', params, 'get');
    }

    async GetGameRandom(params?: GetEndpoints.GetGameRandom): Promise<Responses.GetGameRandom> {
        return await this.request('GetGameRandom', params, 'post');
    }

    static async GetGameRandom(params?: GetEndpoints.GetGameRandom): Promise<Responses.GetGameRandom> {
        return await this.request('GetGameRandom', params, 'get');
    }

    async GetGuideList(params: GetEndpoints.GetGuideList): Promise<Responses.GetGuideList> {
        return await this.request('GetGuideList', params, 'post');
    }

    static async GetGuideList(params: GetEndpoints.GetGuideList): Promise<Responses.GetGuideList> {
        return await this.request('GetGuideList', params, 'get');
    }

    async GetGuide(params: GetEndpoints.GetGuide): Promise<Responses.GetGuide> {
        return await this.request('GetGuide', params, 'post');
    }

    static async GetGuide(params: GetEndpoints.GetGuide): Promise<Responses.GetGuide> {
        return await this.request('GetGuide', params, 'get');
    }

    async GetNewsList(params: GetEndpoints.GetNewsList): Promise<Responses.GetNewsList> {
        return await this.request('GetNewsList', params, 'post');
    }

    static async GetNewsList(params: GetEndpoints.GetNewsList): Promise<Responses.GetNewsList> {
        return await this.request('GetNewsList', params, 'get');
    }

    async GetNews(params: GetEndpoints.GetNews): Promise<Responses.GetNews> {
        return await this.request('GetNews', params, 'post');
    }

    static async GetNews(params: GetEndpoints.GetNews): Promise<Responses.GetNews> {
        return await this.request('GetNews', params, 'get');
    }

    async GetResourceList(params: GetEndpoints.GetResourceList): Promise<Responses.GetResourceList> {
        return await this.request('GetResourceList', params, 'post');
    }

    static async GetResourceList(params: GetEndpoints.GetResourceList): Promise<Responses.GetResourceList> {
        return await this.request('GetResourceList', params, 'get');
    }

    async GetStreamList(params: GetEndpoints.GetStreamList): Promise<Responses.GetStreamList> {
        return await this.request('GetStreamList', params, 'post');
    }

    static async GetStreamList(params: GetEndpoints.GetStreamList): Promise<Responses.GetStreamList> {
        return await this.request('GetStreamList', params, 'get');
    }

    async GetThreadList(params: GetEndpoints.GetThreadList): Promise<Responses.GetThreadList> {
        return await this.request('GetThreadList', params, 'post');
    }

    static async GetThreadList(params: GetEndpoints.GetThreadList): Promise<Responses.GetThreadList> {
        return await this.request('GetThreadList', params, 'get');
    }

    async GetThreadStateByCommentId(params: GetEndpoints.GetThreadStateByCommentId): Promise<Responses.GetThreadStateByCommentId> {
        return await this.request('GetThreadStateByCommentId', params, 'post');
    }

    static async GetThreadStateByCommentId(params: GetEndpoints.GetThreadStateByCommentId): Promise<Responses.GetThreadStateByCommentId> {
        return await this.request('GetThreadStateByCommentId', params, 'get');
    }

    async GetChallenge(params: GetEndpoints.GetChallenge): Promise<Responses.GetChallenge> {
        return await this.request('GetChallenge', params, 'post');
    }

    static async GetChallenge(params: GetEndpoints.GetChallenge): Promise<Responses.GetChallenge> {
        return await this.request('GetChallenge', params, 'get');
    }

    async GetChallengeLeaderboard(params: GetEndpoints.GetChallengeLeaderboard): Promise<Responses.GetChallengeLeaderboard> {
        return await this.request('GetChallengeLeaderboard', params, 'post');
    }

    static async GetChallengeLeaderboard(params: GetEndpoints.GetChallengeLeaderboard): Promise<Responses.GetChallengeLeaderboard> {
        return await this.request('GetChallengeLeaderboard', params, 'get');
    }

    async GetChallengeGlobalRankingList(params?: GetEndpoints.GetChallengeGlobalRankingList): Promise<Responses.GetChallengeGlobalRankingList> {
        return await this.request('GetChallengeGlobalRankingList', params, 'post');
    }

    static async GetChallengeGlobalRankingList(params?: GetEndpoints.GetChallengeGlobalRankingList): Promise<Responses.GetChallengeGlobalRankingList> {
        return await this.request('GetChallengeGlobalRankingList', params, 'get');
    }

    async GetChallengeRun(params: GetEndpoints.GetChallengeRun): Promise<Responses.GetChallengeRun> {
        return await this.request('GetChallengeRun', params, 'post');
    }

    static async GetChallengeRun(params: GetEndpoints.GetChallengeRun): Promise<Responses.GetChallengeRun> {
        return await this.request('GetChallengeRun', params, 'get');
    }

    async GetUserLeaderboard(params: GetEndpoints.GetUserLeaderboard): Promise<Responses.GetUserLeaderboard> {
        return await this.request('GetUserLeaderboard', params, 'post');
    }

    static async GetUserLeaderboard(params: GetEndpoints.GetUserLeaderboard): Promise<Responses.GetUserLeaderboard> {
        return await this.request('GetUserLeaderboard', params, 'get');
    }

    async GetUserModeration(params: GetEndpoints.GetUserModeration): Promise<Responses.GetUserModeration> {
        return await this.request('GetUserModeration', params, 'post');
    }

    static async GetUserModeration(params: GetEndpoints.GetUserModeration): Promise<Responses.GetUserModeration> {
        return await this.request('GetUserModeration', params, 'get');
    }

    async GetCommentList(params: GetEndpoints.GetCommentList): Promise<Responses.GetCommentList> {
        return await this.request('GetCommentList', params, 'post');
    }

    static async GetCommentList(params: GetEndpoints.GetCommentList): Promise<Responses.GetCommentList> {
        return await this.request('GetCommentList', params, 'get');
    }

    async GetThread(params: GetEndpoints.GetThread): Promise<Responses.GetThread> {
        return await this.request('GetThread', params, 'post');
    }

    static async GetThread(params: GetEndpoints.GetThread): Promise<Responses.GetThread> {
        return await this.request('GetThread', params, 'get');
    }

    async GetStaticData(params?: GetEndpoints.GetStaticData): Promise<Responses.GetStaticData> {
        return await this.request('GetStaticData', params, 'post');
    }

    static async GetStaticData(params?: GetEndpoints.GetStaticData): Promise<Responses.GetStaticData> {
        return await this.request('GetStaticData', params, 'get');
    }

    async GetForumList(params?: GetEndpoints.GetForumList): Promise<Responses.GetForumList> {
        return await this.request('GetForumList', params, 'post');
    }

    static async GetForumList(params?: GetEndpoints.GetForumList): Promise<Responses.GetForumList> {
        return await this.request('GetForumList', params, 'get');
    }

    async PutAuthLogin(params: GetEndpoints.PutAuthLogin): Promise<Responses.PutAuthLogin> {
        return await this.request('PutAuthLogin', params, 'post');
    }

    async GetSession(params: GetEndpoints.GetSession): Promise<Responses.GetSession> {
        return await this.request('GetSession', params, 'post');
    }

    async PutSessionPing(params: GetEndpoints.PutSessionPing): Promise<void> {
        return await this.request('PutSessionPing', params, 'post');
    }

    async GetAuditLogList(params: GetEndpoints.GetAuditLogList): Promise<Responses.GetAuditLogList> {
        return await this.request('GetAuditLogList', params, 'post');
    }

    async GetGameSettings(params: GetEndpoints.GetGameSettings): Promise<Responses.GetGameSettings> {
        return await this.request('GetGameSettings', params, 'post');
    }

    async PutGameSettings(params: GetEndpoints.PutGameSettings): Promise<void> {
        return await this.request('PutGameSettings', params, 'post');
    }

    async PutCategory(params: GetEndpoints.PutCategory): Promise<void> {
        return await this.request('PutCategory', params, 'post');
    }

    async PutCategoryUpdate(params: GetEndpoints.PutCategoryUpdate): Promise<void> {
        return await this.request('PutCategoryUpdate', params, 'post');
    }

    async PutCategoryArchive(params: GetEndpoints.PutCategoryArchive): Promise<void> {
        return await this.request('PutCategoryArchive', params, 'post');
    }

    async PutCategoryRestore(params: GetEndpoints.PutCategoryRestore): Promise<void> {
        return await this.request('PutCategoryRestore', params, 'post');
    }

    async PutCategoryOrder(params: GetEndpoints.PutCategoryOrder): Promise<void> {
        return await this.request('PutCategoryOrder', params, 'post');
    }

    async PutLevel(params: GetEndpoints.PutLevel): Promise<void> {
        return await this.request('PutLevel', params, 'post');
    }

    async PutLevelUpdate(params: GetEndpoints.PutLevelUpdate): Promise<void> {
        return await this.request('PutLevelUpdate', params, 'post');
    }

    async PutLevelArchive(params: GetEndpoints.PutLevelArchive): Promise<void> {
        return await this.request('PutLevelArchive', params, 'post');
    }

    async PutLevelRestore(params: GetEndpoints.PutLevelRestore): Promise<void> {
        return await this.request('PutLevelRestore', params, 'post');
    }

    async PutLevelOrder(params: GetEndpoints.PutLevelOrder): Promise<void> {
        return await this.request('PutLevelOrder', params, 'post');
    }

    async PutVariable(params: GetEndpoints.PutVariable): Promise<void> {
        return await this.request('PutVariable', params, 'post');
    }

    async PutVariableUpdate(params: GetEndpoints.PutVariableUpdate): Promise<void> {
        return await this.request('PutVariableUpdate', params, 'post');
    }

    async PutVariableArchive(params: GetEndpoints.PutVariableArchive): Promise<void> {
        return await this.request('PutVariableArchive', params, 'post');
    }

    async PutVariableRestore(params: GetEndpoints.PutVariableRestore): Promise<void> {
        return await this.request('PutVariableRestore', params, 'post');
    }

    async PutVariableOrder(params: GetEndpoints.PutVariableOrder): Promise<void> {
        return await this.request('PutVariableOrder', params, 'post');
    }

    async PutVariableApplyDefault(params: GetEndpoints.PutVariableApplyDefault): Promise<void> {
        return await this.request('PutVariableApplyDefault', params, 'post');
    }

    async PutNews(params: GetEndpoints.PutNews): Promise<void> {
        return await this.request('PutNews', params, 'post');
    }

    async PutNewsUpdate(params: GetEndpoints.PutNewsUpdate): Promise<void> {
        return await this.request('PutNewsUpdate', params, 'post');
    }

    async PutNewsDelete(params: GetEndpoints.PutNewsDelete): Promise<void> {
        return await this.request('PutNewsDelete', params, 'post');
    }

    async PutGuide(params: GetEndpoints.PutGuide): Promise<void> {
        return await this.request('PutGuide', params, 'post');
    }

    async PutGuideUpdate(params: GetEndpoints.PutGuideUpdate): Promise<void> {
        return await this.request('PutGuideUpdate', params, 'post');
    }

    async PutGuideDelete(params: GetEndpoints.PutGuideDelete): Promise<void> {
        return await this.request('PutGuideDelete', params, 'post');
    }

    async PutResource(params: GetEndpoints.PutResource): Promise<void> {
        return await this.request('PutResource', params, 'post');
    }

    async PutResourceUpdate(params: GetEndpoints.PutResourceUpdate): Promise<void> {
        return await this.request('PutResourceUpdate', params, 'post');
    }

    async PutResourceDelete(params: GetEndpoints.PutResourceDelete): Promise<void> {
        return await this.request('PutResourceDelete', params, 'post');
    }

    async GetModerationGames(params: GetEndpoints.GetModerationGames): Promise<Responses.GetModerationGames> {
        return await this.request('GetModerationGames', params, 'post');
    }

    async GetModerationRuns(params: GetEndpoints.GetModerationRuns): Promise<Responses.GetModerationRuns> {
        return await this.request('GetModerationRuns', params, 'post');
    }

    async PutRunAssignee(params: GetEndpoints.PutRunAssignee): Promise<void> {
        return await this.request('PutRunAssignee', params, 'post');
    }

    async PutRunDelete(params: GetEndpoints.PutRunDelete): Promise<void> {
        return await this.request('PutRunDelete', params, 'post');
    }

    async PutRunVerification(params: GetEndpoints.PutRunVerification): Promise<void> {
        return await this.request('PutRunVerification', params, 'post');
    }

    async PutRunVideoState(params: GetEndpoints.PutRunVideoState): Promise<void> {
        return await this.request('PutRunVideoState', params, 'post');
    }

    async GetRunSettings(params: GetEndpoints.GetRunSettings): Promise<Responses.GetRunSettings> {
        return await this.request('GetRunSettings', params, 'post');
    }

    async PutRunSettings(params: GetEndpoints.PutRunSettings): Promise<Responses.PutRunSettings> {
        return await this.request('PutRunSettings', params, 'post');
    }

    async GetConversations(params: GetEndpoints.GetConversations): Promise<Responses.GetConversations> {
        return await this.request('GetConversations', params, 'post');
    }

    async GetConversationMessages(params: GetEndpoints.GetConversationMessages): Promise<Responses.GetConversationMessages> {
        return await this.request('GetConversationMessages', params, 'post');
    }

    async PutConversation(params: GetEndpoints.PutConversation): Promise<Responses.PutConversation> {
        return await this.request('PutConversation', params, 'post');
    }

    async PutConversationMessage(params: GetEndpoints.PutConversationMessage): Promise<Responses.PutConversationMessage> {
        return await this.request('PutConversationMessage', params, 'post');
    }

    async PutConversationLeave(params: GetEndpoints.PutConversationLeave): Promise<void> {
        return await this.request('PutConversationLeave', params, 'post');
    }

    async PutConversationReport(params: GetEndpoints.PutConversationReport): Promise<void> {
        return await this.request('PutConversationReport', params, 'post');
    }

    async GetNotifications(params: GetEndpoints.GetNotifications): Promise<Responses.GetNotifications> {
        return await this.request('GetNotifications', params, 'post');
    }

    async PutNotificationsRead(params: GetEndpoints.PutNotificationsRead): Promise<void> {
        return await this.request('PutNotificationsRead', params, 'post');
    }

    async PutGameFollower(params: GetEndpoints.PutGameFollower): Promise<void> {
        return await this.request('PutGameFollower', params, 'post');
    }

    async PutGameFollowerDelete(params: GetEndpoints.PutGameFollowerDelete): Promise<void> {
        return await this.request('PutGameFollowerDelete', params, 'post');
    }

    async PutUserFollower(params: GetEndpoints.PutUserFollower): Promise<void> {
        return await this.request('PutUserFollower', params, 'post');
    }

    async PutUserFollowerDelete(params: GetEndpoints.PutUserFollowerDelete): Promise<void> {
        return await this.request('PutUserFollowerDelete', params, 'post');
    }

    async GetUserSettings(params: GetEndpoints.GetUserSettings): Promise<Responses.GetUserSettings> {
        return await this.request('GetUserSettings', params, 'post');
    }

    async PutUserSettings(params: GetEndpoints.PutUserSettings): Promise<Responses.PutUserSettings> {
        return await this.request('PutUserSettings', params, 'post');
    }

    async PutUserUpdateFeaturedRun(params: GetEndpoints.PutUserUpdateFeaturedRun): Promise<void> {
        return await this.request('PutUserUpdateFeaturedRun', params, 'post');
    }

    async PutUserUpdateGameOrdering(params: GetEndpoints.PutUserUpdateGameOrdering): Promise<void> {
        return await this.request('PutUserUpdateGameOrdering', params, 'post');
    }

    async GetUserApiKey(params: GetEndpoints.GetUserApiKey): Promise<Responses.GetUserApiKey> {
        return await this.request('GetUserApiKey', params, 'post');
    }

    async GetUserFollowers(params: GetEndpoints.GetUserFollowers): Promise<Responses.GetUserFollowers> {
        return await this.request('GetUserFollowers', params, 'post');
    }

    async GetUserFollowingGames(params: GetEndpoints.GetUserFollowingGames): Promise<Responses.GetUserFollowingGames> {
        return await this.request('GetUserFollowingGames', params, 'post');
    }

    async GetUserFollowingUsers(params: GetEndpoints.GetUserFollowingUsers): Promise<Responses.GetUserFollowingUsers> {
        return await this.request('GetUserFollowingUsers', params, 'post');
    }

    async GetUserGameBoostData(params: GetEndpoints.GetUserGameBoostData): Promise<Responses.GetUserGameBoostData> {
        return await this.request('GetUserGameBoostData', params, 'post');
    }

    async GetUserDataExport(params: GetEndpoints.GetUserDataExport): Promise<Responses.GetUserDataExport> {
        return await this.request('GetUserDataExport', params, 'post');
    }

    async PutGameFollowerOrder(params: GetEndpoints.PutGameFollowerOrder): Promise<void> {
        return await this.request('PutGameFollowerOrder', params, 'post');
    }

    async PutArticleSubmission(params: GetEndpoints.PutArticleSubmission): Promise<void> {
        return await this.request('PutArticleSubmission', params, 'post');
    }

    async GetCommentable(params: GetEndpoints.GetCommentable): Promise<Responses.GetCommentable> {
        return await this.request('GetCommentable', params, 'post');
    }

    async PutComment(params: GetEndpoints.PutComment): Promise<void> {
        return await this.request('PutComment', params, 'post');
    }

    async PutLike(params: GetEndpoints.PutLike): Promise<Responses.PutLike> {
        return await this.request('PutLike', params, 'post');
    }

    async PutCommentableSettings(params: GetEndpoints.PutCommentableSettings): Promise<void> {
        return await this.request('PutCommentableSettings', params, 'post');
    }

    async GetThreadReadStatus(params: GetEndpoints.GetThreadReadStatus): Promise<Responses.GetThreadReadStatus> {
        return await this.request('GetThreadReadStatus', params, 'post');
    }

    async PutThreadRead(params: GetEndpoints.PutThreadRead): Promise<void> {
        return await this.request('PutThreadRead', params, 'post');
    }

    async GetForumReadStatus(params: GetEndpoints.GetForumReadStatus): Promise<Responses.GetForumReadStatus> {
        return await this.request('GetForumReadStatus', params, 'post');
    }

    async GetThemeSettings(params: GetEndpoints.GetThemeSettings): Promise<Responses.GetThemeSettings> {
        return await this.request('GetThemeSettings', params, 'post');
    }

    async PutThemeSettings(params: GetEndpoints.PutThemeSettings): Promise<void> {
        return await this.request('PutThemeSettings', params, 'post');
    }

    async GetUserSupporterData(params: GetEndpoints.GetUserSupporterData): Promise<Responses.GetUserSupporterData> {
        return await this.request('GetUserSupporterData', params, 'post');
    }

    async PutUserSupporterNewSubscription(params: GetEndpoints.PutUserSupporterNewSubscription): Promise<Responses.PutUserSupporterNewSubscription> {
        return await this.request('PutUserSupporterNewSubscription', params, 'post');
    }

    async PutGameBoostGrant(params: GetEndpoints.PutGameBoostGrant): Promise<void> {
        return await this.request('PutGameBoostGrant', params, 'post');
    }

    async PutAdvertiseContact(params: GetEndpoints.PutAdvertiseContact): Promise<void> {
        return await this.request('PutAdvertiseContact', params, 'post');
    }

    async GetTickets(params: GetEndpoints.GetTickets): Promise<Responses.GetTickets> {
        return await this.request('GetTickets', params, 'post');
    }

    async GetSeriesSettings(params: GetEndpoints.GetSeriesSettings): Promise<Responses.GetSeriesSettings> {
        return await this.request('GetSeriesSettings', params, 'post');
    }

    async GetUserBlocks(params: GetEndpoints.GetUserBlocks): Promise<Responses.GetUserBlocks> {
        return await this.request('GetUserBlocks', params, 'post');
    }

    async PutUserBlock(params: GetEndpoints.PutUserBlock): Promise<void> {
        return await this.request('PutUserBlock', params, 'post');
    }

    async PutGame(params: GetEndpoints.PutGame): Promise<Responses.PutGame> {
        return await this.request('PutGame', params, 'post');
    }

    async PutGameModerator(params: GetEndpoints.PutGameModerator): Promise<void> {
        return await this.request('PutGameModerator', params, 'post');
    }

    async PutGameModeratorDelete(params: GetEndpoints.PutGameModeratorDelete): Promise<void> {
        return await this.request('PutGameModeratorDelete', params, 'post');
    }

    async PutSeriesGame(params: GetEndpoints.PutSeriesGame): Promise<void> {
        return await this.request('PutSeriesGame', params, 'post');
    }

    async PutSeriesGameDelete(params: GetEndpoints.PutSeriesGameDelete): Promise<void> {
        return await this.request('PutSeriesGameDelete', params, 'post');
    }

    async PutSeriesModerator(params: GetEndpoints.PutSeriesModerator): Promise<void> {
        return await this.request('PutSeriesModerator', params, 'post');
    }

    async PutSeriesModeratorUpdate(params: GetEndpoints.PutSeriesModeratorUpdate): Promise<void> {
        return await this.request('PutSeriesModeratorUpdate', params, 'post');
    }

    async PutSeriesModeratorDelete(params: GetEndpoints.PutSeriesModeratorDelete): Promise<void> {
        return await this.request('PutSeriesModeratorDelete', params, 'post');
    }

    async PutSeriesSettings(params: GetEndpoints.PutSeriesSettings): Promise<void> {
        return await this.request('PutSeriesSettings', params, 'post');
    }

    async PutTicket(params: GetEndpoints.PutTicket): Promise<Responses.PutTicket> {
        return await this.request('PutTicket', params, 'post');
    }

    async PutTicketNote(params: GetEndpoints.PutTicketNote): Promise<void> {
        return await this.request('PutTicketNote', params, 'post');
    }

    async PutUserSocialConnection(params: GetEndpoints.PutUserSocialConnection): Promise<void> {
        return await this.request('PutUserSocialConnection', params, 'post');
    }

    async PutUserSocialConnectionDelete(params: GetEndpoints.PutUserSocialConnectionDelete): Promise<void> {
        return await this.request('PutUserSocialConnectionDelete', params, 'post');
    }

    async PutUserSocialConnectionSsoExchange(params: GetEndpoints.PutUserSocialConnectionSsoExchange): Promise<void> {
        return await this.request('PutUserSocialConnectionSsoExchange', params, 'post');
    }

    async PutUserUpdatePassword(params: GetEndpoints.PutUserUpdatePassword): Promise<void> {
        return await this.request('PutUserUpdatePassword', params, 'post');
    }

    async PutUserUpdateEmail(params: GetEndpoints.PutUserUpdateEmail): Promise<Responses.PutUserUpdateEmail> {
        return await this.request('PutUserUpdateEmail', params, 'post');
    }

    async PutUserUpdateName(params: GetEndpoints.PutUserUpdateName): Promise<Responses.PutUserUpdateName> {
        return await this.request('PutUserUpdateName', params, 'post');
    }

    async PutUserDelete(params: GetEndpoints.PutUserDelete): Promise<void> {
        return await this.request('PutUserDelete', params, 'post');
    }

    async PutCommentDelete(params: GetEndpoints.PutCommentDelete): Promise<void> {
        return await this.request('PutCommentDelete', params, 'post');
    }

    async PutCommentRestore(params: GetEndpoints.PutCommentRestore): Promise<void> {
        return await this.request('PutCommentRestore', params, 'post');
    }

    async PutThread(params: GetEndpoints.PutThread): Promise<Responses.PutThread> {
        return await this.request('PutThread', params, 'post');
    }

    async PutThreadLocked(params: GetEndpoints.PutThreadLocked): Promise<void> {
        return await this.request('PutThreadLocked', params, 'post');
    }

    async PutThreadSticky(params: GetEndpoints.PutThreadSticky): Promise<void> {
        return await this.request('PutThreadSticky', params, 'post');
    }

    async PutThreadDelete(params: GetEndpoints.PutThreadDelete): Promise<void> {
        return await this.request('PutThreadDelete', params, 'post');
    }
}