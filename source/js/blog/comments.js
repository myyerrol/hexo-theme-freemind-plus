// github issue comment
// Copyright (C) 2017
// Joseph Pan <http://github.com/wzpan>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA

// Formatted by myyerrol

"use strict";

var type,
    username,
    repo,
    clientID,
    clientSecret,
    commentsNo,
    commentsGoTo,
    commentsBtnClass,
    commentsTarget,
    commentsRecentTarget,
    commentsLoadingTarget;
var githubAddr = "https://github.com/";
var githubApiAddr = "https://api.github.com/repos/";
var oschinaAddr = "http://git.oschina.net/";
var oschinaApiAddr = "http://git.oschina.net/api/v5/repos/";
var spinOpts = {
    lines: 13,
    length: 10,
    width: 6,
    radius: 12,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: "#5882FA",
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: false,
    className: "spinner",
    zIndex: 2e9,
    top: "auto",
    left: "50%"
};

var _getComment = function _getComment(params, callback) {
    var comments = void 0,
        commentsUrl = void 0,
        page = void 0;

    // 获取评论
    // Get comments
    comments = params.comments;
    commentsUrl = params.commentsUrl;
    page = params.page;
    $.ajax({
        url: commentsUrl + "?page=" + page,
        dataType: "json",
        cache: false,
        crossDomain: true,
        data: clientID && clientSecret ? "client_id=" + clientID +
                                         "&client_secret=" + clientSecret : "",
        success: function success(pageComments) {
            if (!pageComments || pageComments.length <= 0) {
                callback && typeof callback === "function" &&
                callback(comments);
                callback = null;
                return;
            }
            pageComments.forEach(function(comment) {
                comments.push(comment);
            });
            page += 1;
            params.comments = comments;
            params.page = page;
            _getComment(params, callback);
        },
        error: function error(err) {
            callback && typeof callback === "function" && callback(comments);
            callback = null;
        }
    });
};

var _getCommentsUrl = function _getCommentsUrl(params, callback) {
    var commentsIssueTitle = void 0,
        page = void 0;
    var found = false;
    commentsIssueTitle = params.commentsIssueTitle;
    page = params.page;

    var apiAddr = type == "github" ? githubApiAddr : oschinaApiAddr;
    $.ajax({
        url: apiAddr + username + "/" + repo + "/issues?page=" + page,
        dataType: "json",
        cache: false,
        crossDomain: true,
        data: clientID && clientSecret ? "client_id=" + clientID +
                                         "&client_secret=" + clientSecret : "",
        success: function success(issues) {
            if (!issues || issues.length <= 0) {
                callback && typeof callback === "function" && callback("", "");
                callback = null;
                return;
            }
            issues.forEach(function(issue) {
                // 匹配标题
                // Match title
                if (issue.title && issue.title == commentsIssueTitle) {
                    callback && typeof callback === "function" && callback(
                        issue.comments_url,
                        issue);
                    found = true;
                    callback = null;
                }
            });
            if (!found) {
                page += 1;
                params.page = page;
                _getCommentsUrl(params, callback);
            }
            return;
        },
        error: function error() {
            callback && typeof callback === "function" && callback("", "");
            callback = null;
        }
    });
};

var _getIssue = function _getIssue(commentsIssueID, callback) {
    var apiAddr = type == "github" ? githubApiAddr : oschinaApiAddr;
    var issueUrl = apiAddr + username + "/" + repo + "/issues/" +
                   commentsIssueID;
    _getIssueByUrl(issueUrl, function(issue) {
        callback && typeof callback === "function" && callback(issue);
        callback = null;
    });
};

var _getIssueByUrl = function _getIssueByUrl(issueUrl, callback) {
    $.ajax({
        url: issueUrl,
        dataType: "json",
        cache: false,
        crossDomain: true,
        data: clientID && clientSecret ? "client_id=" + clientID +
                                         "&client_secret=" + clientSecret : "",
        success: function success(issues) {
            if (!issues || issues.length <= 0) {
                callback && typeof callback === "function" && callback();
                callback = null;
                return;
            }
            var issue = issues;
            callback && typeof callback === "function" && callback(issue);
            callback = null;
        },
        error: function error() {
            callback && typeof callback === "function" && callback();
            callback = null;
        }
    });
};

var _renderComment = function _renderComment(comment) {
    var timeagoInstance = timeago();
    var user = comment.user;
    var content = marked(comment.body);
    var ago = timeagoInstance.format(comment.created_at);
    var currentUser = user.login == username ? "current-user" : "";
    var addr = type == "github" ? githubAddr : oschinaAddr;
    var owner = user.login == username ? "\n        <span class=\"timeline-comment-label text-bold tooltipped tooltipped-multiline tooltipped-s\" aria-label=\"" + username + " is the author of this blog.\">\n        Owner\n    </span>\n        " : "";
    return "\n        <div class=\"timeline-comment-wrapper js-comment-container\">\n        <div class=\"avatar-parent-child timeline-comment-avatar\">\n        <a href=\"" + addr + user.login + "\">\n        <img alt=\"@" + user.login + "\" class=\"avatar rounded-1\" height=\"44\" src=\"" + user.avatar_url + "&amp;s=88\" width=\"44\">\n        </a>\n        </div>\n        <div id=\"issuecomment-310820108\" class=\"comment previewable-edit js-comment js-task-list-container  timeline-comment js-reorderable-task-lists reorderable-task-lists " + currentUser + "\" data-body-version=\"0ff4a390ed2be378bf5044aa6dc1510b\">\n\n        <div class=\"timeline-comment-header\">\n        " + owner + "\n        <h3 class=\"timeline-comment-header-text f5 text-normal\">\n\n        <strong>\n        <a href=\"" + addr + user.login + "\" class=\"author\">" + user.login + "</a>\n        \n    </strong>\n\n    commented  \n\n        <a href=\"#issuecomment-" + comment.id + "\" class=\"timestamp\"><relative-time datetime=\"" + comment.created_at + "\" title=\"" + comment.created_at + "\">" + ago + "</relative-time></a>\n\n    </h3>\n        </div>\n        \n        <table class=\"d-block\">\n        <tbody class=\"d-block\">\n        <tr class=\"d-block\">\n        <td class=\"d-block comment-body markdown-body js-comment-body\">\n        " + content + "\n    </td>\n        </tr>\n        </tbody>\n        </table>\n        </div>\n        </div>\n        ";
};

var _renderRecentComment = function _renderRecentComment(user,
                                                         title,
                                                         content,
                                                         time,
                                                         url,
                                                         callback) {
    var addr = type == "github" ? githubAddr : oschinaAddr;
    var res = "\n        <div class=\"comment-item\">\n          <div class=\"row comment-widget-head\">\n            <div class=\"xl-col-3 comment-widget-avatar\">\n              <a href=\"" + addr + user.login + "\">\n                <img alt=\"@" + user.login + "\" class=\"avatar rounded-1\" height=\"44\" src=\"" + user.avatar_url + "&amp;s=88\" width=\"44\">\n              </a>\n            </div>\n            <div class=\"comment-widget-body\">\n              <span><a class=\"comment-widget-user\" href=\"" + addr + user.login + "\" target=\"_blank\">" + user.login + "</a> </span>\n              <div class=\"comment-widget-content\">" + content + "</div>\n            </div>\n          </div>\n          <br/>\n          <div class=\"comment-widget-meta\">\n            <span class=\"comment-widget-title\">" + title + "</span> | <span class=\"comment-widget-date\">" + time + "</span>\n          </div>\n        </div>\n        ";
    callback && typeof callback === "function" && callback(res);
    callback = null;
};

var _getRecentCommentList = function _getRecentCommentList(commentList,
                                                           i,
                                                           renderCount,
                                                           totalCount,
                                                           comments,
                                                           callback) {
    if (renderCount >= totalCount || i >= comments.length) {
        callback && typeof callback === "function" && callback(commentList);
        callback = null;
        return;
    }
    var comment = comments[i];
    if (!comment) {
        return;
    }
    var content = marked(comment.body);
    var title = comment.title;
    var user = comment.user;
    var timeagoInstance = timeago();
    var time = timeagoInstance.format(comment.created_at);
    var url = comment.html_url;
    if (!content || content == "") {
        i++;
        _getRecentCommentList(commentList,
                              i,
                              renderCount,
                              totalCount,
                              comments,
                              callback);
        callback = null;
        return;
    }
    if (!title) {
        // 获取问题的标题
        // Get title of issue
        _getIssueByUrl(comment.issue_url, function(issue) {
            _renderRecentComment(
                user,
                issue.title,
                content,
                time,
                url,
                function(item) {
                    commentList += item;
                    i++;
                    renderCount++;
                    _getRecentCommentList(commentList,
                                          i,
                                          renderCount,
                                          totalCount,
                                          comments,
                                          callback);
                }
            );
        });
    }
    else {
        _renderRecentComment(user, title, content, time, url, function(item) {
            commentList += item;
            i++;
            renderCount++;
            _getRecentCommentList(commentList,
                                  i,
                                  renderCount,
                                  totalCount,
                                  comments,
                                  callback);
        });
    }
};

var _renderRecentCommentList = function _renderRecentCommentList(comments,
                                                                 count) {
    var i = 0;
    var renderCount = 0;
    var commentList = "";
    _getRecentCommentList(
        commentList,
        i,
        renderCount,
        count,
        comments,
        function(commentList) {
            $(commentsRecentTarget).append(commentList);
        }
    );
};

var _renderHTML = function _renderHTML(params) {
    var issue = void 0,
        comments = void 0,
        commentsUrl = void 0,
        commentsIssueTitle = void 0;
    issue = params.issue;
    comments = params.comments;
    commentsUrl = params.commentsUrl;
    commentsIssueTitle = params.commentsIssueTitle;

    var addr = type == "github" ? githubAddr : oschinaAddr;
    var apiAddr = type == "github" ? githubApiAddr : oschinaApiAddr;
    var site = type == "oschina" ? "<a href='http://oschina.net' class='discussion-item-entity' target='_blank'>OSChina issue</a>" : "<a href='http://github.com' class='discussion-item-entity' target='_blank'>Github issue</a>";
    var footer = "\n        <div class=\"discussion-item discussion-item-labeled\">\n        <h3 class=\"discussion-item-header f5 text-normal\" id=\"event-1157063333\">\n\n        <span class=\"discussion-item-icon\">\n        <svg aria-hidden=\"true\" class=\"octicon octicon-tag\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"14\"><path fill-rule=\"evenodd\" d=\"M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z\"></path></svg>\n        </span>\n        The above comments are provided by \n        <a href=\"http://github.com/wzpan/comment.js\" class=\"discussion-item-entity\" target=\"_blank\">comment.js</a> with the help of " + site + ".\n        </h3>\n        </div>\n        ";
    if ((!issue || !issue.body || issue.body == "") &&
        (!comments || comments.length <= 0)) {
        var _res = "\n            <div class='js-discussion no-comment'>\n            <span>" + commentsNo + "</span>\n            </div>\n            ";
        $(commentsTarget).append(_res);
    }
    else {
        var _res2 = "\n            <div class=\"discussion-timeline js-quote-selection-container\">\n            <div class=\"js-discussion js-socket-channel\">\n            ";
        if (issue && issue.body && issue.body != "") {
            _res2 += _renderComment(issue);
        }
        comments.forEach(function(comment) {
            _res2 += _renderComment(comment);
        });
        _res2 += footer;
        _res2 += "</div></div>";
        $(commentsTarget).append(_res2);
    }
    var issueUrl = void 0;
    if (!commentsUrl) {
        issueUrl = addr + "/" + username + "/" + repo + "/issues/new?title=" +
                   commentsIssueTitle + "#issue_body";
    }
    else {
        issueUrl = commentsUrl.replace(apiAddr, addr).replace(/(.*)comments/, "$1") + "#new_comment_field";
    }
    var res = "\n        <p class=\"goto-comment\">\n        <a href=\"" + issueUrl + "\" class=\"" + commentsBtnClass + "\" target=\"_blank\">" + commentsGoTo + "</a>\n        </p>\n        ";
    $(commentsTarget).append(res);
};

var CompareDate = function CompareDate(a, b) {
    var d1 = a["created_at"].replace("T", " ").replace("Z", "").replace(/-/g,
                                                                        "\/");
    var d2 = b["created_at"].replace("T", " ").replace("Z", "").replace(/-/g,
                                                                        "\/");
    var date1 = new Date(d1);
    var date2 = new Date(d2);

    return (date2 - date1);
};

var _getRecentIssues = function _getRecentIssues(params, callback) {
    var count = void 0;
    count = params.count;

    var apiAddr = type == "github" ? githubApiAddr : oschinaApiAddr;
    $.ajax({
        url: apiAddr + username + "/" + repo +
             "/issues?per_page=100&sort=created&direction=desc",
        dataType: "json",
        cache: false,
        crossDomain: true,
        data: clientID && clientSecret ? "client_id=" + clientID +
                                         "&client_secret=" + clientSecret : "",
        success: function success(issues) {
            if (issues.length > count) {
                issues = issues.sort(CompareDate).slice(0, 5);
            }
            callback && typeof callback === "function" && callback(issues);
            callback = null;
        },
        error: function error(err) {
            callback && typeof callback === "function" && callback();
            callback = null;
        }
    });
};

var _getRecentComments = function _getRecentComments(params, callback) {
    var count = void 0;
    count = params.count;

    var apiAddr = type == "github" ? githubApiAddr : oschinaApiAddr;
    $.ajax({
        url: apiAddr + username + "/" + repo +
             "/issues/comments?per_page=100&sort=created&direction=desc",
        dataType: "json",
        cache: false,
        crossDomain: true,
        data: clientID && clientSecret ? "client_id=" + clientID +
                                         "&client_secret=" + clientSecret : "",
        success: function success(comments) {
            if (comments.length > count) {
                comments = comments.sort(CompareDate).slice(0, 5);
            }

            callback && typeof callback === "function" && callback(comments);
            callback = null;
        },
        error: function error(err) {
            callback && typeof callback === "function" && callback();
            callback = null;
        }
    });
};

var getRecentCommentsList = function getRecentCommentsList(params) {
    var count = void 0,
        user = void 0;
    type = params.type;
    user = params.user;
    repo = params.repo;
    clientID = params.clientID;
    clientSecret = params.clientSecret;
    count = params.count;
    commentsRecentTarget = params.commentsRecentTarget;

    username = user;
    commentsRecentTarget = commentsRecentTarget ? commentsRecentTarget :
                           "#comments-recent";
    var recentList = new Array();

    _getRecentIssues(params, function(issues) {
        recentList = recentList.concat(issues);
        _getRecentComments(params, function(comments) {
            recentList = recentList.concat(comments);
            recentList = recentList.sort(CompareDate);
            _renderRecentCommentList(recentList, count);
        });
    });
};

var getComments = function getComments(params) {
    var commentsIssueTitle = void 0,
        commentsIssueID = void 0,
        user = void 0;
    type = params.type;
    user = params.user;
    repo = params.repo;
    clientID = params.clientID;
    clientSecret = params.clientSecret;
    commentsNo = params.commentsNo;
    commentsGoTo = params.commentsGoTo;
    commentsIssueTitle = params.commentsIssueTitle;
    commentsIssueID = params.commentsIssueID;
    commentsBtnClass = params.commentsBtnClass;
    commentsTarget = params.commentsTarget;
    commentsLoadingTarget = params.commentsLoadingTarget;

    commentsTarget = commentsTarget ? commentsTarget : "#comments-thread";
    username = user;
    if (commentsLoadingTarget) var spinner = new Spinner(spinOpts);

    var comments = new Array();
    type = type ? type : "github";
    commentsBtnClass = commentsBtnClass ? commentsBtnClass : "btn";

    commentsLoadingTarget && spinner.spin(
        $("div" + commentsLoadingTarget).get(0));
    if (!commentsIssueID || commentsIssueID == "undefined" ||
        typeof commentsIssueID == "undefined") {
        _getCommentsUrl({
            commentsIssueTitle: commentsIssueTitle,
            page: 1
        }, function(commentsUrl, issue) {
            if (commentsUrl != "" && commentsUrl != undefined) {
                _getComment({
                    comments: comments,
                    commentsUrl: commentsUrl,
                    page: 1
                }, function(comments) {
                    commentsLoadingTarget && spinner.spin();
                    _renderHTML({
                        issue: issue,
                        comments: comments,
                        commentsUrl: commentsUrl,
                        commentsIssueTitle: commentsIssueTitle
                    });
                    return;
                });
            }
            else {
                commentsLoadingTarget && spinner.spin();
                _renderHTML({
                    issue: issue,
                    comments: comments,
                    commentsUrl: commentsUrl,
                    commentsIssueTitle: commentsIssueTitle
                });
                return;
            }
        });
    }
    else {
        var apiAddr = type == "github" ? githubApiAddr : oschinaApiAddr;
        var _comments_url = apiAddr + username + "/" + repo + "/issues/" +
                            commentsIssueID + "/comments";
        _getIssue(commentsIssueID, function(issue) {
            _getComment({
                comments: comments,
                commentsUrl: _comments_url,
                page: 1
            }, function(comments) {
                commentsLoadingTarget && spinner.spin();
                _renderHTML({
                    issue: issue,
                    comments: comments,
                    commentsUrl: _comments_url,
                    commentsIssueTitle: commentsIssueTitle
                });
                commentsLoadingTarget && spinner.spin();
                return;
            });
        });
    }
};
