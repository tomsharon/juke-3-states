app.config(function($stateProvider){
	$stateProvider
	.state("artist", {
		url: '/artists/:id',
		templateUrl: '/templates/artist.html',
		controller: function ($scope, PlayerFactory, ArtistFactory, $stateParams) {	
				// $rootScope.$on('changeView', function (evt, data) {
				// 	if (data.name == 'oneArtist') {
				// 		$scope.showMe = true;
				// 		ArtistFactory.fetchById(data.id)
				// 		.then(function (artist) {
				// 			$scope.artist = artist;
				// 		});
				// 	} else {
				// 		$scope.showMe = false;
				// 	}
				// });


				$scope.artistId = $stateParams.id; 
				console.log($stateParams.id); 

				ArtistFactory.fetchById($scope.artistId)
						.then(function (artist) {
							$scope.artist = artist;
						});

				// $scope.viewAlbum = function (albumId) {
				// 	$rootScope.$broadcast('changeView', {
				// 		name: 'oneAlbum',
				// 		id: albumId
				// 	});
				// };

				$scope.isCurrent = function (song) {
					var current = PlayerFactory.getCurrentSong();
					return current && current._id == song._id;
				};
				$scope.start = function (song) {
					PlayerFactory.start(song, $scope.artist.songs);
				};		
			}
		})
	.state("artist.songs", {
		url: '/artists/:id/songs', 
		templateUrl: '/templates/artists-songs.html'
	})
	.state("artist.albums", {
		url: '/artists/:id/albums', 
		templateUrl: '/templates/artists-albums.html'
	})
})