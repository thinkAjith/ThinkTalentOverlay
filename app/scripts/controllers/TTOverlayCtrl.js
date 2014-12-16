'use strict';

/**
 * @ngdoc function
 * @name thinkTalentOverlayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thinkTalentOverlayApp
 */
angular.module('thinkTalentOverlayApp')
  .controller('TTOverlayCtrl', function ($scope) {
  		$scope.facebookShareValues = {
  			fb_share_picture : "http://placehold.it/100x100",
  			fb_share_name : "Test Facebook Share Name",
  			fb_share_link : "https://www.google.co.in/",
  			fb_share_caption : "Test Facebook Share Caption",
  			fb_share_description : "Test Facebook Share Description of a very very very long long long description goes here!!!!"
  		};

    	$scope.facebookShareClicked = function(){
    		FB.ui({
                method: 'feed',
                name: $scope.facebookShareValues.fb_share_name,
                link: $scope.facebookShareValues.fb_share_link,
                picture: $scope.facebookShareValues.fb_share_picture,
                caption: $scope.facebookShareValues.fb_share_caption,
                description: $scope.facebookShareValues.fb_share_description,
            }, function(response) {
                if (response && response.post_id) {
                    console.log(response.post_id);
                }
    		});
    	};
  });
