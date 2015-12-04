app.controller('AlbumsCtrl', function ($scope, AlbumFactory) {
	console.log("Launched albums controller")
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
});