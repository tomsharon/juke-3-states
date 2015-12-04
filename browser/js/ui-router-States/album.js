app.config(function($stateProvider) {
	$stateProvider.state("album", {
		url: "/albums/:id",
		templateUrl: "/templates/album.html",
		controller: function ($scope, PlayerFactory, AlbumFactory, $stateParams) {
			$scope.isCurrent = function (song) {
				var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			}
			$scope.start = function (song) {
				PlayerFactory.start(song, $scope.album.songs);
			}
			$scope.albumId = $stateParams.id;  
			AlbumFactory.fetchById($scope.albumId)
				.then(function (album) {
					$scope.album = album;
				});
			// $rootScope.$on('changeView', function (evt, data) {
			// 	if (data.name == 'oneAlbum') {
			// 		$scope.showMe = true;
			// 		AlbumFactory.fetchById(data.id)
			// 		.then(function (album) {
			// 			$scope.album = album;
			// 		});
			// 	} else {
			// 		$scope.showMe = false;
			// 	}
			// });
		}
	})
})

//We're using states to control our views...