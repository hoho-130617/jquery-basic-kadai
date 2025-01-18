$(function() {
    // 文字色変化ボタンがクリックされた場合
    $('#change-color').on('click', function() {
        // 文字色が変わる
        $('#target').css('color', 'red');
    });
    // 文字内容変化ボタンがクリックされた場合
    $('#change-text').on('click', function() {
        // 文字内容が変わる
        $('#target').text('Hello!');
    });
    // フェードアウトボタンがクリックされた場合
    $('#fade-out').on('click', function() {
        // フェードアウトで文字が消える
        $('#target').fadeOut();
    });
    // フェードインボタンがクリックされた場合
    $('#fade-in').on('click', function() {
        // フェードインで文字が現れる
        $('#target').fadeIn();
    });
});