var blogApp = angular.module('blogApp', []);
blogApp.controller('headerControl', function($scope) {
  var userName = "Cole"; // TODO get user.name from database
  $scope.title = userName + "'s Blog";
});
blogApp.controller('blogControl', function($scope) {
  var post1 = { // TODO get this info from database
    title: "I am a Post Title!!",
    body: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cor magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    date: "31 October 2015",
    tags: [
      "test",
      "stuff",
      "blogs",
      "cats"
    ]
  };
  var post2 = { // TODO get this info from database
    title: "I am a Post Title Again!!",
    body: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cor magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    date: "31 October 2015",
    tags: [
      "test",
      "stuff",
      "blogs",
      "cats"
    ]
  };
  var post3 = { // TODO get this info from database
    title: "I am a Post Title!!",
    body: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cor magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    date: "31 October 2015",
    tags: [
      "test",
      "stuff",
      "blogs",
      "cats"
    ]
  };
  var posts = [post1, post2, post3];
  $scope.posts = posts;
});

blogApp.controller('loginControl', function($scope) {
  $scope.setUserIdAndPassword = function(userId, password) {
    // TODO "authenticate" with the server, basically get the posts json for this user name
    var localUserId = userId;
    var localPassword = password;
    console.log(localUserId + " " + localPassword);
  };
});
$(document).ready(function(){$('#sidebar').affix({
    offset: {
      top: 240
    }
  });
});
