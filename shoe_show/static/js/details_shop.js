
var shop = (function () {
    var tbody = document.querySelector('.tbody');
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            this.$inp = document.querySelector('.inp');
            this.$actbtn = document.querySelector('.actbtn');
            this.$actbtn.onclick = function () {
                localStorage.count = _this.$inp.value;
                _this.setItem(localStorage.count);
                alert("添加购物车成功");
            }
        },
        setItem(data) {
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
            console.log(shopList, data);
            for (var i = 0; i < shopList.length; i++) {
                if (data.id == shopList[i].id) {
                    shopList[i].count += data.count;
                    break;
                }
            }
            if (i == shopList.length) {
                shopList.push(data);
            }
            localStorage.shopList = JSON.stringify(shopList);

        }
    }
}())
shop.init();

