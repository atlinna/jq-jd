var searchTimer = null
$('#search-text').on('input', function() {
    var val = $(this).val()
    if (val) {
        searchTimer = setTimeout(function() {
            clearTimeout(searchTimer)
            $.ajax({
                url: 'https://suggest.taobao.com/sug',
                data: {
                    code: 'utf-8',
                    q: val,
                    callback: 'renderResults',
                    area: '',
                },
                dataType: 'jsonp',
            })
        }, 500)
    }
}).on('focus', function() {
    var val = $(this).val()
    if (val) {
        $('.search-results').show()
    }
})

function renderResults(data) {
    var ret = data.result;
    var val = $('#search-text').val()
    var str = ret.reduce(function(prev, item) {
        var longStr = item[0].slice(val.length)
        return prev + `<li>
        <a href="#">
            <span class="product-name">${val}<strong>${longStr}</strong></span>
            <span class="product-number">约${parseInt(item[1])}个商品</span>
        </a>
    </li>`
    }, '')

    $('.search-results').html(str).show()
}

$('.search-results').on('click', 'li', function() {
    var val = $(this).find('.product-name').text()
    $('#search-text').val(val)
})

var timer = null
$('.search-box').mouseleave(function() {
    timer = setTimeout(function() {
        $('.search-results').hide()
    }, 500)
}).mouseenter(function() {
    clearTimeout(timer)
}, 500)