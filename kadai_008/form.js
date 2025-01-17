$(function () {
    // クラス属性がbtnの要素がクリックされたら
    $('.btn').on('click', function () {
        // 要素を表示
        $('.text-box').val('クリックしました！');
    });
});