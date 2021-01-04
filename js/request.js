function request(url, type, callback) {
    $.ajax({
        type: type,
        url: url,
        dataType: 'json',
        success: function(res) {
            callback(res)
        }
    })
}