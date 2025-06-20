import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import * as GetEndpoints from './endpoints/endpoints.get.js';
import * as PostEndpoints from './endpoints/endpoints.post.js'
import * as Responses from './responses.js';

const BASE_USER_AGENT = 'speedruncom.js';
const BASE_URL = 'https://www.speedrun.com/api/v2/';
const HEADERS = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
}

const isBrowser = typeof window !== 'undefined';

const objectToBase64 = (obj: object) => {
    const jsonString = JSON.stringify(obj).replace(/\s+/g, '');
    return Buffer.from(jsonString).toString('base64');
}

interface config {
    PHPSESSID?: string;
    userAgent?: string;
}

class APIError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

export default class Client {

    /**
     * `AxiosInstance` used on instance-called methods (called with `POST`).
     */
    axiosClient = axios.create({
        baseURL: BASE_URL,
        method: 'POST',
        withCredentials: true,
        headers: HEADERS
    });

    /**
     * `AxiosInstance` used on Client-called methods (called with `GET`).
     */
    static axiosClient = axios.create({
        baseURL: BASE_URL,
        method: 'GET',
        headers: HEADERS
    });

    private username!: string;
    private password!: string;

    private headers = this.axiosClient.defaults.headers.common;

    constructor(config?: config) {
        if (config) this.config(config);

        this.axiosClient.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => {
                const data = error.response.data as { error?: string };
                throw new APIError(data.error || 'Unknown error', error.response.status);
            }
        );
    }

    config(config: config) {
        if (!isBrowser) this.headers['User-Agent'] = BASE_USER_AGENT + (config.userAgent ? `/${config.userAgent}` : '');

        if (config.PHPSESSID) {
            if (isBrowser) {
                console.error('You cannot use a PHPSESSID to authenticate in a browser environment.');
            } else {
                this.headers['Cookie'] = `PHPSESSID=${config.PHPSESSID}`;
            }
        }
    }

    async request<T>(endpoint: string, params: object = {}): Promise<T> {
        const response = await this.axiosClient.post<T>(endpoint, params);
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !isBrowser) this.headers['Cookie'] = cookie[0].split(';')[0];

        return response.data;
    }

    static async request<T>(endpoint: string, params: object = {}): Promise<T> {
        return (await this.axiosClient.get(`${endpoint}?_r=${objectToBase64(params)}`)).data;
    }

    //Built-in endpoints for auth

    /**
     * Attempts to authorize your cookies if using a browser, or authorizes this Client if otherwise.
     * If the account has two factor authentication, you have to use `setToken` with the token sent to the account's email address.
     */
    async login(username: string, password: string) {
        this.username = username;
        this.password = password;

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
            name: this.username,
            password: this.password,
            token
        });
    }

    /**
     * Attempts to remove the PHPSESSID cookie if using a browser, otherwise removes your Client's authentication.
     */
    async logout() {
        if (isBrowser) return await this.request('PutAuthLogout');

        delete this.headers['Cookie'];
    }

    // Endpoints (auto-generated with build-client)
    async GetGameLeaderboard2(params?: GetEndpoints.GetGameLeaderboard2): Promise<Readonly<Responses.GetGameLeaderboard2>> {
        return await this.request('GetGameLeaderboard2', params);
    }

    static async GetGameLeaderboard2(params?: GetEndpoints.GetGameLeaderboard2): Promise<Readonly<Responses.GetGameLeaderboard2>> {
        return await this.request('GetGameLeaderboard2', params);
    }

    async GetGameLeaderboard(params?: GetEndpoints.GetGameLeaderboard): Promise<Readonly<Responses.GetGameLeaderboard>> {
        return await this.request('GetGameLeaderboard', params);
    }

    static async GetGameLeaderboard(params?: GetEndpoints.GetGameLeaderboard): Promise<Readonly<Responses.GetGameLeaderboard>> {
        return await this.request('GetGameLeaderboard', params);
    }

    async GetGameData(params: GetEndpoints.GetGameData): Promise<Readonly<Responses.GetGameData>> {
        return await this.request('GetGameData', params);
    }

    static async GetGameData(params: GetEndpoints.GetGameData): Promise<Readonly<Responses.GetGameData>> {
        return await this.request('GetGameData', params);
    }

    async GetGameSummary(params: GetEndpoints.GetGameSummary): Promise<Readonly<Responses.GetGameSummary>> {
        return await this.request('GetGameSummary', params);
    }

    static async GetGameSummary(params: GetEndpoints.GetGameSummary): Promise<Readonly<Responses.GetGameSummary>> {
        return await this.request('GetGameSummary', params);
    }

    async GetGameRecordHistory(params: GetEndpoints.GetGameRecordHistory): Promise<Readonly<Responses.GetGameRecordHistory>> {
        return await this.request('GetGameRecordHistory', params);
    }

    static async GetGameRecordHistory(params: GetEndpoints.GetGameRecordHistory): Promise<Readonly<Responses.GetGameRecordHistory>> {
        return await this.request('GetGameRecordHistory', params);
    }

    async GetSearch(params: GetEndpoints.GetSearch): Promise<Readonly<Responses.GetSearch>> {
        return await this.request('GetSearch', params);
    }

    static async GetSearch(params: GetEndpoints.GetSearch): Promise<Readonly<Responses.GetSearch>> {
        return await this.request('GetSearch', params);
    }

    async GetLatestLeaderboard(params: GetEndpoints.GetLatestLeaderboard): Promise<Readonly<Responses.GetLatestLeaderboard>> {
        return await this.request('GetLatestLeaderboard', params);
    }

    static async GetLatestLeaderboard(params: GetEndpoints.GetLatestLeaderboard): Promise<Readonly<Responses.GetLatestLeaderboard>> {
        return await this.request('GetLatestLeaderboard', params);
    }

    async GetRun(params?: GetEndpoints.GetRun): Promise<Readonly<Responses.GetRun>> {
        return await this.request('GetRun', params);
    }

    static async GetRun(params?: GetEndpoints.GetRun): Promise<Readonly<Responses.GetRun>> {
        return await this.request('GetRun', params);
    }

    async GetUserSummary(params?: GetEndpoints.GetUserSummary): Promise<Readonly<Responses.GetUserSummary>> {
        return await this.request('GetUserSummary', params);
    }

    static async GetUserSummary(params?: GetEndpoints.GetUserSummary): Promise<Readonly<Responses.GetUserSummary>> {
        return await this.request('GetUserSummary', params);
    }

    async GetUserComments(params?: GetEndpoints.GetUserComments): Promise<Readonly<Responses.GetUserComments>> {
        return await this.request('GetUserComments', params);
    }

    static async GetUserComments(params?: GetEndpoints.GetUserComments): Promise<Readonly<Responses.GetUserComments>> {
        return await this.request('GetUserComments', params);
    }

    async GetUserThreads(params?: GetEndpoints.GetUserThreads): Promise<Readonly<Responses.GetUserThreads>> {
        return await this.request('GetUserThreads', params);
    }

    static async GetUserThreads(params?: GetEndpoints.GetUserThreads): Promise<Readonly<Responses.GetUserThreads>> {
        return await this.request('GetUserThreads', params);
    }

    async GetUserPopoverData(params?: GetEndpoints.GetUserPopoverData): Promise<Readonly<Responses.GetUserPopoverData>> {
        return await this.request('GetUserPopoverData', params);
    }

    static async GetUserPopoverData(params?: GetEndpoints.GetUserPopoverData): Promise<Readonly<Responses.GetUserPopoverData>> {
        return await this.request('GetUserPopoverData', params);
    }

    async GetTitleList(): Promise<Readonly<Responses.GetTitleList>> {
        return await this.request('GetTitleList');
    }

    static async GetTitleList(): Promise<Readonly<Responses.GetTitleList>> {
        return await this.request('GetTitleList');
    }

    async GetTitle(params?: GetEndpoints.GetTitle): Promise<Readonly<Responses.GetTitle>> {
        return await this.request('GetTitle', params);
    }

    static async GetTitle(params?: GetEndpoints.GetTitle): Promise<Readonly<Responses.GetTitle>> {
        return await this.request('GetTitle', params);
    }

    async GetArticleList(params: GetEndpoints.GetArticleList): Promise<Readonly<Responses.GetArticleList>> {
        return await this.request('GetArticleList', params);
    }

    static async GetArticleList(params: GetEndpoints.GetArticleList): Promise<Readonly<Responses.GetArticleList>> {
        return await this.request('GetArticleList', params);
    }

    async GetArticle(params: GetEndpoints.GetArticle): Promise<Readonly<Responses.GetArticle>> {
        return await this.request('GetArticle', params);
    }

    static async GetArticle(params: GetEndpoints.GetArticle): Promise<Readonly<Responses.GetArticle>> {
        return await this.request('GetArticle', params);
    }

    async GetGameList(params: GetEndpoints.GetGameList): Promise<Readonly<Responses.GetGameList>> {
        return await this.request('GetGameList', params);
    }

    static async GetGameList(params: GetEndpoints.GetGameList): Promise<Readonly<Responses.GetGameList>> {
        return await this.request('GetGameList', params);
    }

    async GetPlatformList(): Promise<Readonly<Responses.GetPlatformList>> {
        return await this.request('GetPlatformList');
    }

    static async GetPlatformList(): Promise<Readonly<Responses.GetPlatformList>> {
        return await this.request('GetPlatformList');
    }

    async GetHomeSummary(): Promise<Readonly<Responses.GetHomeSummary>> {
        return await this.request('GetHomeSummary');
    }

    static async GetHomeSummary(): Promise<Readonly<Responses.GetHomeSummary>> {
        return await this.request('GetHomeSummary');
    }

    async GetSeriesList(params: GetEndpoints.GetSeriesList): Promise<Readonly<Responses.GetSeriesList>> {
        return await this.request('GetSeriesList', params);
    }

    static async GetSeriesList(params: GetEndpoints.GetSeriesList): Promise<Readonly<Responses.GetSeriesList>> {
        return await this.request('GetSeriesList', params);
    }

    async GetSeriesSummary(params?: GetEndpoints.GetSeriesSummary): Promise<Readonly<Responses.GetSeriesSummary>> {
        return await this.request('GetSeriesSummary', params);
    }

    static async GetSeriesSummary(params?: GetEndpoints.GetSeriesSummary): Promise<Readonly<Responses.GetSeriesSummary>> {
        return await this.request('GetSeriesSummary', params);
    }

    async GetGameLevelSummary(params: GetEndpoints.GetGameLevelSummary): Promise<Readonly<Responses.GetGameLevelSummary>> {
        return await this.request('GetGameLevelSummary', params);
    }

    static async GetGameLevelSummary(params: GetEndpoints.GetGameLevelSummary): Promise<Readonly<Responses.GetGameLevelSummary>> {
        return await this.request('GetGameLevelSummary', params);
    }

    async GetGameRandom(): Promise<Readonly<Responses.GetGameRandom>> {
        return await this.request('GetGameRandom');
    }

    static async GetGameRandom(): Promise<Readonly<Responses.GetGameRandom>> {
        return await this.request('GetGameRandom');
    }

    async GetGuideList(params?: GetEndpoints.GetGuideList): Promise<Readonly<Responses.GetGuideList>> {
        return await this.request('GetGuideList', params);
    }

    static async GetGuideList(params?: GetEndpoints.GetGuideList): Promise<Readonly<Responses.GetGuideList>> {
        return await this.request('GetGuideList', params);
    }

    async GetGuide(params?: GetEndpoints.GetGuide): Promise<Readonly<Responses.GetGuide>> {
        return await this.request('GetGuide', params);
    }

    static async GetGuide(params?: GetEndpoints.GetGuide): Promise<Readonly<Responses.GetGuide>> {
        return await this.request('GetGuide', params);
    }

    async GetNewsList(params?: GetEndpoints.GetNewsList): Promise<Readonly<Responses.GetNewsList>> {
        return await this.request('GetNewsList', params);
    }

    static async GetNewsList(params?: GetEndpoints.GetNewsList): Promise<Readonly<Responses.GetNewsList>> {
        return await this.request('GetNewsList', params);
    }

    async GetNews(params?: GetEndpoints.GetNews): Promise<Readonly<Responses.GetNews>> {
        return await this.request('GetNews', params);
    }

    static async GetNews(params?: GetEndpoints.GetNews): Promise<Readonly<Responses.GetNews>> {
        return await this.request('GetNews', params);
    }

    async GetResourceList(params?: GetEndpoints.GetResourceList): Promise<Readonly<Responses.GetResourceList>> {
        return await this.request('GetResourceList', params);
    }

    static async GetResourceList(params?: GetEndpoints.GetResourceList): Promise<Readonly<Responses.GetResourceList>> {
        return await this.request('GetResourceList', params);
    }

    async GetStreamList(params: GetEndpoints.GetStreamList): Promise<Readonly<Responses.GetStreamList>> {
        return await this.request('GetStreamList', params);
    }

    static async GetStreamList(params: GetEndpoints.GetStreamList): Promise<Readonly<Responses.GetStreamList>> {
        return await this.request('GetStreamList', params);
    }

    async GetThreadList(params?: GetEndpoints.GetThreadList): Promise<Readonly<Responses.GetThreadList>> {
        return await this.request('GetThreadList', params);
    }

    static async GetThreadList(params?: GetEndpoints.GetThreadList): Promise<Readonly<Responses.GetThreadList>> {
        return await this.request('GetThreadList', params);
    }

    async GetThreadStateByCommentId(params?: GetEndpoints.GetThreadStateByCommentId): Promise<Readonly<Responses.GetThreadStateByCommentId>> {
        return await this.request('GetThreadStateByCommentId', params);
    }

    static async GetThreadStateByCommentId(params?: GetEndpoints.GetThreadStateByCommentId): Promise<Readonly<Responses.GetThreadStateByCommentId>> {
        return await this.request('GetThreadStateByCommentId', params);
    }

    async GetChallenge(params?: GetEndpoints.GetChallenge): Promise<Readonly<Responses.GetChallenge>> {
        return await this.request('GetChallenge', params);
    }

    static async GetChallenge(params?: GetEndpoints.GetChallenge): Promise<Readonly<Responses.GetChallenge>> {
        return await this.request('GetChallenge', params);
    }

    async GetChallengeLeaderboard(params?: GetEndpoints.GetChallengeLeaderboard): Promise<Readonly<Responses.GetChallengeLeaderboard>> {
        return await this.request('GetChallengeLeaderboard', params);
    }

    static async GetChallengeLeaderboard(params?: GetEndpoints.GetChallengeLeaderboard): Promise<Readonly<Responses.GetChallengeLeaderboard>> {
        return await this.request('GetChallengeLeaderboard', params);
    }

    async GetChallengeGlobalRankingList(): Promise<Readonly<Responses.GetChallengeGlobalRankingList>> {
        return await this.request('GetChallengeGlobalRankingList');
    }

    static async GetChallengeGlobalRankingList(): Promise<Readonly<Responses.GetChallengeGlobalRankingList>> {
        return await this.request('GetChallengeGlobalRankingList');
    }

    async GetChallengeRun(params?: GetEndpoints.GetChallengeRun): Promise<Readonly<Responses.GetChallengeRun>> {
        return await this.request('GetChallengeRun', params);
    }

    static async GetChallengeRun(params?: GetEndpoints.GetChallengeRun): Promise<Readonly<Responses.GetChallengeRun>> {
        return await this.request('GetChallengeRun', params);
    }

    async GetUserLeaderboard(params?: GetEndpoints.GetUserLeaderboard): Promise<Readonly<Responses.GetUserLeaderboard>> {
        return await this.request('GetUserLeaderboard', params);
    }

    static async GetUserLeaderboard(params?: GetEndpoints.GetUserLeaderboard): Promise<Readonly<Responses.GetUserLeaderboard>> {
        return await this.request('GetUserLeaderboard', params);
    }

    async GetUserModeration(params?: GetEndpoints.GetUserModeration): Promise<Readonly<Responses.GetUserModeration>> {
        return await this.request('GetUserModeration', params);
    }

    static async GetUserModeration(params?: GetEndpoints.GetUserModeration): Promise<Readonly<Responses.GetUserModeration>> {
        return await this.request('GetUserModeration', params);
    }

    async GetCommentList(params?: GetEndpoints.GetCommentList): Promise<Readonly<Responses.GetCommentList>> {
        return await this.request('GetCommentList', params);
    }

    static async GetCommentList(params?: GetEndpoints.GetCommentList): Promise<Readonly<Responses.GetCommentList>> {
        return await this.request('GetCommentList', params);
    }

    async GetThread(params?: GetEndpoints.GetThread): Promise<Readonly<Responses.GetThread>> {
        return await this.request('GetThread', params);
    }

    static async GetThread(params?: GetEndpoints.GetThread): Promise<Readonly<Responses.GetThread>> {
        return await this.request('GetThread', params);
    }

    async GetStaticData(): Promise<Readonly<Responses.GetStaticData>> {
        return await this.request('GetStaticData');
    }

    static async GetStaticData(): Promise<Readonly<Responses.GetStaticData>> {
        return await this.request('GetStaticData');
    }

    async GetForumList(): Promise<Readonly<Responses.GetForumList>> {
        return await this.request('GetForumList');
    }

    static async GetForumList(): Promise<Readonly<Responses.GetForumList>> {
        return await this.request('GetForumList');
    }

    async PutAuthLogin(params?: PostEndpoints.PutAuthLogin): Promise<Readonly<Responses.PutAuthLogin>> {
        return await this.request('PutAuthLogin', params);
    }

    async GetSession(): Promise<Readonly<Responses.GetSession>> {
        return await this.request('GetSession');
    }

    async PutSessionPing(): Promise<void> {
        return await this.request('PutSessionPing');
    }

    async GetAuditLogList(params: PostEndpoints.GetAuditLogList): Promise<Readonly<Responses.GetAuditLogList>> {
        return await this.request('GetAuditLogList', params);
    }

    async GetGameSettings(params?: PostEndpoints.GetGameSettings): Promise<Readonly<Responses.GetGameSettings>> {
        return await this.request('GetGameSettings', params);
    }

    async PutGameSettings(params?: PostEndpoints.PutGameSettings): Promise<void> {
        return await this.request('PutGameSettings', params);
    }

    async PutCategory(params?: PostEndpoints.PutCategory): Promise<void> {
        return await this.request('PutCategory', params);
    }

    async PutCategoryUpdate(params?: PostEndpoints.PutCategoryUpdate): Promise<void> {
        return await this.request('PutCategoryUpdate', params);
    }

    async PutCategoryArchive(params?: PostEndpoints.PutCategoryArchive): Promise<void> {
        return await this.request('PutCategoryArchive', params);
    }

    async PutCategoryRestore(params?: PostEndpoints.PutCategoryRestore): Promise<void> {
        return await this.request('PutCategoryRestore', params);
    }

    async PutCategoryOrder(params?: PostEndpoints.PutCategoryOrder): Promise<void> {
        return await this.request('PutCategoryOrder', params);
    }

    async PutLevel(params?: PostEndpoints.PutLevel): Promise<void> {
        return await this.request('PutLevel', params);
    }

    async PutLevelUpdate(params?: PostEndpoints.PutLevelUpdate): Promise<void> {
        return await this.request('PutLevelUpdate', params);
    }

    async PutLevelArchive(params?: PostEndpoints.PutLevelArchive): Promise<void> {
        return await this.request('PutLevelArchive', params);
    }

    async PutLevelRestore(params?: PostEndpoints.PutLevelRestore): Promise<void> {
        return await this.request('PutLevelRestore', params);
    }

    async PutLevelOrder(params?: PostEndpoints.PutLevelOrder): Promise<void> {
        return await this.request('PutLevelOrder', params);
    }

    async PutVariable(params?: PostEndpoints.PutVariable): Promise<void> {
        return await this.request('PutVariable', params);
    }

    async PutVariableUpdate(params?: PostEndpoints.PutVariableUpdate): Promise<void> {
        return await this.request('PutVariableUpdate', params);
    }

    async PutVariableArchive(params?: PostEndpoints.PutVariableArchive): Promise<void> {
        return await this.request('PutVariableArchive', params);
    }

    async PutVariableRestore(params?: PostEndpoints.PutVariableRestore): Promise<void> {
        return await this.request('PutVariableRestore', params);
    }

    async PutVariableOrder(params?: PostEndpoints.PutVariableOrder): Promise<void> {
        return await this.request('PutVariableOrder', params);
    }

    async PutVariableApplyDefault(params?: PostEndpoints.PutVariableApplyDefault): Promise<void> {
        return await this.request('PutVariableApplyDefault', params);
    }

    async PutNews(params?: PostEndpoints.PutNews): Promise<void> {
        return await this.request('PutNews', params);
    }

    async PutNewsUpdate(params?: PostEndpoints.PutNewsUpdate): Promise<void> {
        return await this.request('PutNewsUpdate', params);
    }

    async PutNewsDelete(params?: PostEndpoints.PutNewsDelete): Promise<void> {
        return await this.request('PutNewsDelete', params);
    }

    async PutGuide(params?: PostEndpoints.PutGuide): Promise<void> {
        return await this.request('PutGuide', params);
    }

    async PutGuideUpdate(params?: PostEndpoints.PutGuideUpdate): Promise<void> {
        return await this.request('PutGuideUpdate', params);
    }

    async PutGuideDelete(params?: PostEndpoints.PutGuideDelete): Promise<void> {
        return await this.request('PutGuideDelete', params);
    }

    async PutResource(params?: PostEndpoints.PutResource): Promise<void> {
        return await this.request('PutResource', params);
    }

    async PutResourceUpdate(params?: PostEndpoints.PutResourceUpdate): Promise<void> {
        return await this.request('PutResourceUpdate', params);
    }

    async PutResourceDelete(params?: PostEndpoints.PutResourceDelete): Promise<void> {
        return await this.request('PutResourceDelete', params);
    }

    async GetModerationGames(): Promise<Readonly<Responses.GetModerationGames>> {
        return await this.request('GetModerationGames');
    }

    async GetModerationRuns(params?: PostEndpoints.GetModerationRuns): Promise<Readonly<Responses.GetModerationRuns>> {
        return await this.request('GetModerationRuns', params);
    }

    async PutRunAssignee(params?: PostEndpoints.PutRunAssignee): Promise<void> {
        return await this.request('PutRunAssignee', params);
    }

    async PutRunDelete(params?: PostEndpoints.PutRunDelete): Promise<void> {
        return await this.request('PutRunDelete', params);
    }

    async PutRunVerification(params?: PostEndpoints.PutRunVerification): Promise<void> {
        return await this.request('PutRunVerification', params);
    }

    async PutRunVideoState(params?: PostEndpoints.PutRunVideoState): Promise<void> {
        return await this.request('PutRunVideoState', params);
    }

    async GetRunSettings(params?: PostEndpoints.GetRunSettings): Promise<Readonly<Responses.GetRunSettings>> {
        return await this.request('GetRunSettings', params);
    }

    async PutRunSettings(params?: PostEndpoints.PutRunSettings): Promise<Readonly<Responses.PutRunSettings>> {
        return await this.request('PutRunSettings', params);
    }

    async GetConversations(): Promise<Readonly<Responses.GetConversations>> {
        return await this.request('GetConversations');
    }

    async GetConversationMessages(params?: PostEndpoints.GetConversationMessages): Promise<Readonly<Responses.GetConversationMessages>> {
        return await this.request('GetConversationMessages', params);
    }

    async PutConversation(params?: PostEndpoints.PutConversation): Promise<Readonly<Responses.PutConversation>> {
        return await this.request('PutConversation', params);
    }

    async PutConversationMessage(params?: PostEndpoints.PutConversationMessage): Promise<Readonly<Responses.PutConversationMessage>> {
        return await this.request('PutConversationMessage', params);
    }

    async PutConversationLeave(params?: PostEndpoints.PutConversationLeave): Promise<void> {
        return await this.request('PutConversationLeave', params);
    }

    async PutConversationReport(params?: PostEndpoints.PutConversationReport): Promise<void> {
        return await this.request('PutConversationReport', params);
    }

    async GetNotifications(): Promise<Readonly<Responses.GetNotifications>> {
        return await this.request('GetNotifications');
    }

    async PutNotificationsRead(): Promise<void> {
        return await this.request('PutNotificationsRead');
    }

    async PutGameFollower(params?: PostEndpoints.PutGameFollower): Promise<void> {
        return await this.request('PutGameFollower', params);
    }

    async PutGameFollowerDelete(params?: PostEndpoints.PutGameFollowerDelete): Promise<void> {
        return await this.request('PutGameFollowerDelete', params);
    }

    async PutUserFollower(params?: PostEndpoints.PutUserFollower): Promise<void> {
        return await this.request('PutUserFollower', params);
    }

    async PutUserFollowerDelete(params?: PostEndpoints.PutUserFollowerDelete): Promise<void> {
        return await this.request('PutUserFollowerDelete', params);
    }

    async GetUserSettings(params?: PostEndpoints.GetUserSettings): Promise<Readonly<Responses.GetUserSettings>> {
        return await this.request('GetUserSettings', params);
    }

    async PutUserSettings(params?: PostEndpoints.PutUserSettings): Promise<Readonly<Responses.PutUserSettings>> {
        return await this.request('PutUserSettings', params);
    }

    async PutUserUpdateFeaturedRun(params?: PostEndpoints.PutUserUpdateFeaturedRun): Promise<void> {
        return await this.request('PutUserUpdateFeaturedRun', params);
    }

    async PutUserUpdateGameOrdering(params?: PostEndpoints.PutUserUpdateGameOrdering): Promise<void> {
        return await this.request('PutUserUpdateGameOrdering', params);
    }

    async GetUserApiKey(params?: PostEndpoints.GetUserApiKey): Promise<Readonly<Responses.GetUserApiKey>> {
        return await this.request('GetUserApiKey', params);
    }

    async GetUserFollowers(params?: PostEndpoints.GetUserFollowers): Promise<Readonly<Responses.GetUserFollowers>> {
        return await this.request('GetUserFollowers', params);
    }

    async GetUserFollowingGames(params?: PostEndpoints.GetUserFollowingGames): Promise<Readonly<Responses.GetUserFollowingGames>> {
        return await this.request('GetUserFollowingGames', params);
    }

    async GetUserFollowingUsers(params?: PostEndpoints.GetUserFollowingUsers): Promise<Readonly<Responses.GetUserFollowingUsers>> {
        return await this.request('GetUserFollowingUsers', params);
    }

    async GetUserGameBoostData(params?: PostEndpoints.GetUserGameBoostData): Promise<Readonly<Responses.GetUserGameBoostData>> {
        return await this.request('GetUserGameBoostData', params);
    }

    async GetUserDataExport(params?: PostEndpoints.GetUserDataExport): Promise<Readonly<Responses.GetUserDataExport>> {
        return await this.request('GetUserDataExport', params);
    }

    async PutGameFollowerOrder(params?: PostEndpoints.PutGameFollowerOrder): Promise<void> {
        return await this.request('PutGameFollowerOrder', params);
    }

    async PutArticleSubmission(params?: PostEndpoints.PutArticleSubmission): Promise<void> {
        return await this.request('PutArticleSubmission', params);
    }

    async GetCommentable(params?: PostEndpoints.GetCommentable): Promise<Readonly<Responses.GetCommentable>> {
        return await this.request('GetCommentable', params);
    }

    async PutComment(params?: PostEndpoints.PutComment): Promise<void> {
        return await this.request('PutComment', params);
    }

    async PutLike(params?: PostEndpoints.PutLike): Promise<Readonly<Responses.PutLike>> {
        return await this.request('PutLike', params);
    }

    async PutCommentableSettings(params?: PostEndpoints.PutCommentableSettings): Promise<void> {
        return await this.request('PutCommentableSettings', params);
    }

    async GetThreadReadStatus(params?: PostEndpoints.GetThreadReadStatus): Promise<Readonly<Responses.GetThreadReadStatus>> {
        return await this.request('GetThreadReadStatus', params);
    }

    async PutThreadRead(params?: PostEndpoints.PutThreadRead): Promise<void> {
        return await this.request('PutThreadRead', params);
    }

    async GetForumReadStatus(params?: PostEndpoints.GetForumReadStatus): Promise<Readonly<Responses.GetForumReadStatus>> {
        return await this.request('GetForumReadStatus', params);
    }

    async GetThemeSettings(params: PostEndpoints.GetThemeSettings): Promise<Readonly<Responses.GetThemeSettings>> {
        return await this.request('GetThemeSettings', params);
    }

    async PutThemeSettings(params?: PostEndpoints.PutThemeSettings): Promise<void> {
        return await this.request('PutThemeSettings', params);
    }

    async GetUserSupporterData(params?: PostEndpoints.GetUserSupporterData): Promise<Readonly<Responses.GetUserSupporterData>> {
        return await this.request('GetUserSupporterData', params);
    }

    async PutUserSupporterNewSubscription(params: PostEndpoints.PutUserSupporterNewSubscription): Promise<Readonly<Responses.PutUserSupporterNewSubscription>> {
        return await this.request('PutUserSupporterNewSubscription', params);
    }

    async PutGameBoostGrant(params?: PostEndpoints.PutGameBoostGrant): Promise<void> {
        return await this.request('PutGameBoostGrant', params);
    }

    async PutAdvertiseContact(params?: PostEndpoints.PutAdvertiseContact): Promise<void> {
        return await this.request('PutAdvertiseContact', params);
    }

    async GetTickets(params?: PostEndpoints.GetTickets): Promise<Readonly<Responses.GetTickets>> {
        return await this.request('GetTickets', params);
    }

    async GetSeriesSettings(params?: PostEndpoints.GetSeriesSettings): Promise<Readonly<Responses.GetSeriesSettings>> {
        return await this.request('GetSeriesSettings', params);
    }

    async GetUserBlocks(): Promise<Readonly<Responses.GetUserBlocks>> {
        return await this.request('GetUserBlocks');
    }

    async PutUserBlock(params?: PostEndpoints.PutUserBlock): Promise<void> {
        return await this.request('PutUserBlock', params);
    }

    async PutGame(params?: PostEndpoints.PutGame): Promise<Readonly<Responses.PutGame>> {
        return await this.request('PutGame', params);
    }

    async PutGameModerator(): Promise<void> {
        return await this.request('PutGameModerator');
    }

    async PutGameModeratorDelete(params?: PostEndpoints.PutGameModeratorDelete): Promise<void> {
        return await this.request('PutGameModeratorDelete', params);
    }

    async PutSeriesGame(params?: PostEndpoints.PutSeriesGame): Promise<void> {
        return await this.request('PutSeriesGame', params);
    }

    async PutSeriesGameDelete(params?: PostEndpoints.PutSeriesGameDelete): Promise<void> {
        return await this.request('PutSeriesGameDelete', params);
    }

    async PutSeriesModerator(): Promise<void> {
        return await this.request('PutSeriesModerator');
    }

    async PutSeriesModeratorUpdate(): Promise<void> {
        return await this.request('PutSeriesModeratorUpdate');
    }

    async PutSeriesModeratorDelete(): Promise<void> {
        return await this.request('PutSeriesModeratorDelete');
    }

    async PutSeriesSettings(params?: PostEndpoints.PutSeriesSettings): Promise<void> {
        return await this.request('PutSeriesSettings', params);
    }

    async PutTicket(params?: PostEndpoints.PutTicket): Promise<Readonly<Responses.PutTicket>> {
        return await this.request('PutTicket', params);
    }

    async PutTicketNote(params?: PostEndpoints.PutTicketNote): Promise<void> {
        return await this.request('PutTicketNote', params);
    }

    async PutUserSocialConnection(params?: PostEndpoints.PutUserSocialConnection): Promise<void> {
        return await this.request('PutUserSocialConnection', params);
    }

    async PutUserSocialConnectionDelete(params?: PostEndpoints.PutUserSocialConnectionDelete): Promise<void> {
        return await this.request('PutUserSocialConnectionDelete', params);
    }

    async PutUserSocialConnectionSsoExchange(params?: PostEndpoints.PutUserSocialConnectionSsoExchange): Promise<void> {
        return await this.request('PutUserSocialConnectionSsoExchange', params);
    }

    async PutUserUpdatePassword(params?: PostEndpoints.PutUserUpdatePassword): Promise<void> {
        return await this.request('PutUserUpdatePassword', params);
    }

    async PutUserUpdateEmail(params?: PostEndpoints.PutUserUpdateEmail): Promise<Readonly<Responses.PutUserUpdateEmail>> {
        return await this.request('PutUserUpdateEmail', params);
    }

    async PutUserUpdateName(params?: PostEndpoints.PutUserUpdateName): Promise<Readonly<Responses.PutUserUpdateName>> {
        return await this.request('PutUserUpdateName', params);
    }

    async PutUserDelete(params?: PostEndpoints.PutUserDelete): Promise<void> {
        return await this.request('PutUserDelete', params);
    }

    async PutCommentUpdate(params?: PostEndpoints.PutCommentUpdate): Promise<void> {
        return await this.request('PutCommentUpdate', params);
    }

    async PutCommentDelete(params?: PostEndpoints.PutCommentDelete): Promise<void> {
        return await this.request('PutCommentDelete', params);
    }

    async PutCommentRestore(params?: PostEndpoints.PutCommentRestore): Promise<void> {
        return await this.request('PutCommentRestore', params);
    }

    async PutThread(params?: PostEndpoints.PutThread): Promise<Readonly<Responses.PutThread>> {
        return await this.request('PutThread', params);
    }

    async PutThreadLocked(params?: PostEndpoints.PutThreadLocked): Promise<void> {
        return await this.request('PutThreadLocked', params);
    }

    async PutThreadSticky(params?: PostEndpoints.PutThreadSticky): Promise<void> {
        return await this.request('PutThreadSticky', params);
    }

    async PutThreadDelete(params?: PostEndpoints.PutThreadDelete): Promise<void> {
        return await this.request('PutThreadDelete', params);
    }
}