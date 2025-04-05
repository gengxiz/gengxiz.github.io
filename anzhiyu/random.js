var posts=["2025/03/31/我的第一篇博文/","2025/03/30/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };