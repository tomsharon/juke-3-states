app.config(function($stateProvider) {
	$stateProvider.state('albums', {
		url: "/albums",
		templateUrl: "/templates/all-albums.html",
		controller: function ($scope, AlbumFactory) {
			AlbumFactory.fetchAll()
				.then(function (albums) {
					$scope.albums = albums;
				});
				// $rootScope.$on('changeView', function (evt, data) {
				// 	$scope.showMe = (data.name == 'allAlbums');
				// });
				$scope.viewAlbum = function (albumId) {
					// $rootScope.$broadcast('changeView', {
					// 	name: 'oneAlbum',
					// 	id: albumId
					// });
				};
		}
	})
})