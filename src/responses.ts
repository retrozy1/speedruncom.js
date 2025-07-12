import * as Interfaces from './interfaces.js';

export default interface Responses {
    GetGameLeaderboard2: {
        /**
         * Runs in the leaderboard.
         */
        runList: Interfaces.GameRun[];

        /**
         * Every Player with a run in a game.
         */
        playerList: Interfaces.Player[];
        pagination: Interfaces.Pagination;
    };

    GetGameLeaderboard: {
        leaderboard: Interfaces.Leaderboard;
    };

    GetGameData: {
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
    };

    GetGameSummary: {
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
    };

    GetGameRecordHistory: {
        playerList: Interfaces.Player[];
        runList: Interfaces.GameRun[];
    };

    GetSearch: {
        gameList: Interfaces.Game[];
        newsList: Interfaces.GameNews[];
        pageList: Interfaces.Article[];
        seriesList: Interfaces.Series[];
        userList: Interfaces.User[];
        challengeList: Interfaces.Challenge[] | null;
    };

    GetLatestLeaderboard: {
        categories: Interfaces.Category[];
        games: Interfaces.Game[];
        levels: Interfaces.Level[];
        players: Interfaces.Player[];
        regions: Interfaces.Region[];
        runs: Interfaces.GameRun[];
        values: Interfaces.Value[];
        variables: Interfaces.Variable[];
        platforms: Interfaces.Platform[];
    };

    GetRun: {
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
    };

    GetUserSummary: {
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
    };

    GetUserComments: {
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
    };

    GetUserPopoverData: {
        user: Interfaces.User;
        userProfile: Interfaces.UserReducedProfile;
        userStats: Interfaces.UserStats;
        userSocialConnectionList: Interfaces.UserSocialConnection[];

        /**
         * Contains games sometimes
         */
        games: Interfaces.Game[];
        titleList: Interfaces.Title[];
    };

    GetTitle: {
        title: Interfaces.Title;
    };

    GetTitleList: {
        titleList: Interfaces.Title[];
    };

    GetArticleList: {
        articleList: Interfaces.Article[];
        pagination: Interfaces.Pagination;
        gameList: Interfaces.Game[];
        userList: Interfaces.User[];
    };

    GetArticle: {
        article: Interfaces.Article;
        relatedArticleList: Interfaces.Article[];
        gameList: Interfaces.Game[];
        userList: Interfaces.User[];
    };

    GetChallenge: {
        challenge: Interfaces.Challenge;
        game: Interfaces.Game;
        moderatorList: Interfaces.ChallengeModerator[];
        standingList: Interfaces.ChallengeStanding[];
        theme: Interfaces.Theme;
        userList: Interfaces.User[];
        challengeRunCount: number;
        gameFollowerCount: number;
        titleList: Interfaces.Title[];
    };

    GetChallengeLeaderboard: {
        challengeRunList: Interfaces.ChallengeRun[];
        playerList: Interfaces.Player[];
        userList: Interfaces.User[];
        pagination: Interfaces.Pagination;
    };

    GetChallengeRun: {
        challenge: Interfaces.Challenge;
        challengeRun: Interfaces.ChallengeRun;
        game: Interfaces.Game;
        playerList: Interfaces.Player[];
        userList: Interfaces.User[];
    };

    GetChallengeGlobalRankingList: {
        rankingList: Interfaces.GlobalChallengeRanking[];
        userList: Interfaces.User[];
    };

    GetGameList: {
        article: Interfaces.Article;
        relatedArticleList: Interfaces.Article[];
        gameList: Interfaces.Game[];
        userList: Interfaces.User[];
    };

    GetPlatformList: {
        platformList: Interfaces.Platform[];
    };

    GetCommentList: {
        commentable: Interfaces.Commentable;
        commentList: Interfaces.Comment[];
        likeList: Interfaces.Like[];
        userList: Interfaces.User[];
        pagination: Interfaces.Pagination;
    };

    GetForumList: {
        forumList: Interfaces.Forum[];
        gameList: Interfaces.Game[];
        userList: Interfaces.User[];
    };

    GetStaticData: {
        areas: Interfaces.Area[];
        colors: Interfaces.Color[];
        gameTypeList: Interfaces.GameTypeDetails[];
        notificationSettings: Interfaces.NotificationSettingStaticData[];
        regionList: Interfaces.Region[];
        socialNetworkList: Interfaces.SocialNetwork[];

        /**
         * Unknown type
         */
        supporterPlanList?: null;
    };

    GetHomeSummary: {
        stream?: Interfaces.Stream;
    };

    GetSeriesList: {
        seriesList: Interfaces.Series[];
        pagination: Interfaces.Pagination;
    };

    GetSeriesSummary: {
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
    };

    GetGameLevelSummary: {
        category: Interfaces.Category;
        runList: Interfaces.GameRun[];
        playerList: Interfaces.Player[];
    };

    GetGameRandom: {
        game: Interfaces.Game;
    };

    GetGuideList: {
        guideList: Interfaces.Guide[];
        users: Interfaces.User[];
    };

    GetGuide: {
        guideList: Interfaces.Guide[];
        users: Interfaces.User[];
    };

    GetNewsList: {
        newsList: Interfaces.GameNews[];
        users: Interfaces.User[];
    };

    GetNews: {
        news: Interfaces.GameNews;
        users: Interfaces.User[];
    };

    GetResource: {
        resource: Interfaces.Resource;
        game: Interfaces.Game[];
        users: Interfaces.User[];
    };

    GetResourceList: {
        resourceList: Interfaces.Resource[];
        users: Interfaces.User[];
    };

    GetStreamList: {
        gameList: Interfaces.Game[];
        streamList: Interfaces.Stream[];
        userList: Interfaces.User[];
        pagination: Interfaces.Pagination;
    };

    GetThread: {
        thread: Interfaces.Thread;
        commentList: Interfaces.Comment[];
        userList: Interfaces.User[];
        likeList: Interfaces.Like[];
        pagination: Interfaces.Pagination;
    };

    GetThreadList: {
        threadList: Interfaces.Thread[];
        pagination: Interfaces.Pagination;
        users: Interfaces.User[];
    };

    GetThreadStateByCommentId: {
        forum: Interfaces.Forum;
        thread: Interfaces.Thread;
        commentId: string;
        pagination: Interfaces.Pagination;
    };

    GetUserLeaderboard: {
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
    };

    GetUserModeration: {
        gameList: Interfaces.Game[];
        gameModeratorList: Interfaces.GameModerator[];
        platformList: Interfaces.Platform[];
        seriesList: Interfaces.Series[];
        seriesModeratorList: Interfaces.SeriesModerator[];
        userGameModeratorStatsList: Interfaces.UserModerationStats[];
    };

    GetUserThreads: {
        commentList: Interfaces.Comment[];
        forumList: Interfaces.Forum[];
        likeList: Interfaces.Like[];
        threadList: Interfaces.Thread[];
        userList: Interfaces.User[];
        pagination: Interfaces.Pagination;
    };

    // POST

    GetAuditLogList: {
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
    };

    GetCommentable: {
        commentable: Interfaces.Commentable;
    };

    GetConversationMessages: {
        conversation: Interfaces.Conversation;
        participants: Interfaces.ConversationParticipant[];
        messages: Interfaces.ConversationMessage[];
        users: Interfaces.User[];
        userBlocks: Interfaces.UserBlock[];
    };

    GetConversations: {
        conversations: Interfaces.Conversation[];
        participants: Interfaces.ConversationParticipant[];
        users: Interfaces.User[];
        systemMessages: Interfaces.SystemMessage[];
    };

    GetForumReadStatus: {
        forumReadStatusList: Interfaces.ForumReadStatus[];
    };

    GetGameSettings: {
        settings: Interfaces.GameSettings;
        moderatorList: Interfaces.GameModerator[];
        theme: Interfaces.Theme;
        gameList: Interfaces.Game[];
        userList: Interfaces.User[];
    };

    GetModerationGames: {
        /**
         * List of Games you moderate. `null` when not logged in.
         */
        games: Interfaces.Game[] | null;

        /**
         * `GameModerationStats` of the games you moderate. `null` when not logged in.
         */
        gameModerationStats: Interfaces.GameModerationStats[] | null;
    };

    GetModerationRuns: {
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
    };

    GetNotifications: {
        unreadCount: number;
        notifications: Interfaces.Notification[];
        pagination: Interfaces.Pagination;
    };

    GetRunSettings: {
        settings: Interfaces.RunSettings;
        users: Interfaces.User[];
    };

    GetSeriesSettings: {
        settings: Interfaces.SeriesSettings;
        moderatorList: Interfaces.SeriesModerator[];
        gameList: Interfaces.Game[];
        theme: Interfaces.Theme;
        userList: Interfaces.User[];
    };

    GetSession: {
        session: Interfaces.Session;
    };

    /**
     * NB: if no theme is set then this response will be empty
     */
    GetThemeSettings: {
        settings?: Interfaces.ThemeSettings;
        theme?: Interfaces.Theme;
    };

    GetThreadReadStatus: {
        threadReadStatusList: Interfaces.ThreadReadStatus[];
    };

    GetTickets: {
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
    };

    GetUserBlocks: {
        userBlocks: Interfaces.UserBlock[];
    };

    GetUserSettings: {
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
    };

    GetUserSupporterData: {
        supporterEndDate: number;
        boostEndDate: number;
    };

    PutUserSupporterNewSubscription: {
        subscription: Interfaces.SupporterSubscription;
        paymentIntentClientSecret: string;
    };

    PutAuthLogin: {
        loggedIn: boolean;
        tokenChallengeSent?: boolean;
    };

    /*PutAuthSignup: {
        loggedIn: boolean;
        tokenChallengeSent?: boolean;
    };*/

    PutConversation: {
        ok: true;
        conversationId: string;
        messageId: string;
    };

    PutConversationMessage: {
        ok: true;
        conversationId: string;
        messageId: string;
    };

    PutGame: {
        game: Interfaces.Game;
    };

    PutRunSettings: {
        runId: string;
    };

    PutThread: {
        thread: Interfaces.Thread;
    };

    PutLike: {
        likeList: Interfaces.Like[];
        userList: Interfaces.User[];
    };

    PutTicket: {
        ticketId: string;
    };

    PutUserSettings: {
        settings: Interfaces.UserSettings;
    };

    GetUserApiKey: {
        apiKey: string;
    };

    GetUserFollowers: {
        followerList: Interfaces.UserFollower;
        userList: Interfaces.User;
        pagination: Interfaces.Pagination;
    };

    GetUserFollowingGames: {
        followerList: Interfaces.UserFollower;
        gameList: Interfaces.Game;
        pagination: Interfaces.Pagination;
    };

    GetUserFollowingUsers: {
        followerList: Interfaces.UserFollower;
        userList: Interfaces.User;
        pagination: Interfaces.Pagination;
    };

    GetUserGameBoostData: {
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
    };

    GetUserDataExport: {
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
    };

    PutUserUpdateEmail: {
        emailChanged: boolean;
        tokenChallengeSent?: boolean;
    };

    PutUserUpdateName: {
        ok: true;
    };

    GetAnnouncementLatest: {
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
    }
}