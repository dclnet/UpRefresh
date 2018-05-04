/*
** new UpRefresh({
**   wrapId: '#wrap',   // 定高父块
**   childId: '#list',  // 变高子块
**   init: function(){ // 执行些初始化工作 },
**   up: function() { // 上拉执行call }
** });
*/
function UpRefresh(option) {
    var _ = this;
    this.child = document.querySelector(option.childId);
    this.wrap = document.querySelector(option.wrapId);
    option.init && option.init();
    this.wrap.onscroll = function(e) {
        var childHt = _.wrap.children[0].clientHeight;
        var wrapHt = _.wrap.clientHeight;
        var sTop = e.target.scrollTop;
        if (childHt <= (sTop + wrapHt)) {
            option.up && option.up();
        }
    }
}