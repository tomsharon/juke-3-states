app.config(function($stateProvider) {
	$stateProvider.state("artists", {
		url: "/artists",
		templateUrl: "/templates/all-artists.html",
		controller: function ($scope, ArtistFactory) {
			ArtistFactory.fetchAll()
				.then(function (artists) {
					$scope.artists = artists;
					console.log(artists); 
				});
				// $rootScope.$on('changeView', function (evt, data) {
				// 	$scope.showMe = (data.name == 'allArtists');
				// });
				$scope.viewArtist = function (artistId) {
					// $rootScope.$broadcast('changeView', {
					// 	name: 'oneArtist',
					// 	id: artistId
					// });
				}
		}
	})	
})