
var shop = (function () {
    var tbody = document.querySelector('.tbody');
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
            this.$inp = document.querySelector('.inp');
            this.$actbtn = document.querySelector('.actbtn');
            this.$actbtn.onclick = function () {
                localStorage.count = _this.$inp.value;
                alert("添加购物车成功");
            }
        }
    }
}())
shop.init();

