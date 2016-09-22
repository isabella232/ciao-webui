/*Image service component
  Client implementation for Image service api
*/

var imageService = function (adapter, tokenManager) {
    this.adapter = adapter;
    this.tokenManager = tokenManager;
};

imageService.prototype.getImages = function () {
    var adapter = this.adapter;
    var tokenManager = this.tokenManager;
    return function(req, res, next) {
        var uri = "/v2/"+req.params.tenant+"/images";
        return adapter.onSuccess((data) => res.send(data.json))
            .onError((data) => res.send(data))
            .get(uri,req.session.token);
    };
};

imageService.prototype.getImageDetails = function () {
    var adapter = this.adapter;
    var tokenManager = this.tokenManager;
    return function(req, res, next) {
        var uri = "/v2/"+req.params.tenant+"/images/"+req.params.image_id;
        return adapter.onSuccess((data) => res.send(data.json))
            .onError((data) => res.send(data))
            .get(uri,req.session.token);
    };
};

module.exports = imageService;
