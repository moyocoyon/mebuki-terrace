// PWAとして認識させるための空のサービスワーカー
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // オフライン対応などを本格的に行う場合はここに追記しますが、
  // 今回は「ホーム画面に追加」を有効にするための最小構成です
});