// HTMLドキュメントが読み込み完了した場合
$(window).on('load',function(){
    // 「loadイベントが発生しました」とコンソールに出力
    console.log('loadイベントが発生しました');
});
// 画面をスクロールした場合   
$(window).on('scroll',function(){
    // 「scrollイベントが発生しました」とコンソールに出力
    console.log('scrollイベントが発生しました');
});