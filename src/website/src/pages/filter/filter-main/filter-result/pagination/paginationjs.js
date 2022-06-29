require('./pagination.js');

function simpleTemplating(data) {
    var html = '<ul>';
    $.each(data, function(index, item){
        html += '<li>'+ item +'</li>';
    });
    html += '</ul>';
    return html;
}

$('#pagination-container').pagination({
    dataSource: function(done){
        var result = [];
        for (var i = 1; i <= 120; i++) {
            result.push(i);
        }
        done(result);
     },
    callback: function(data, pagination) {
        var html = simpleTemplating(data);
        $('#data-container').html(html);
    },
    showNavigator: true,
    formatNavigator: '<span style="color: rgba(31, 32, 65, 0.75)"><%= currentPage %></span>-<%= totalPage %> из <%= totalNumber %> вариантов аренды',
})