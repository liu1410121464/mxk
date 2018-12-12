var shop = (function () {

    return {
        init() {
            this.$shop = document.querySelector('.shop_list');
            this.$ul = this.$shop.querySelector('ul');
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
        },
        getData() {
            sendAjax('static/json/list.json').then(res => {
                res = JSON.parse(res);
                this.data = res;
                this.insertData(this.data);
            });
        },
        insertData(data) {
            for (var i = 0; i < 5; i++) {
                for (let i = 0; i < data.length; i++) {
                    var $li = document.createElement('li');
                    $li.innerHTML = `
                    <a href='../details.html'><img class='img' src='${this.data[i].src}'></a>
                    <a href='../details.html' class='descride'>${this.data[i].descride}</a>
                    <a href='../details.html' class='price'>${this.data[i].price}</a>
                    <button class='buy' href='../details.html'>立即抢购</button>
                `
                    this.$ul.appendChild($li);
                }

            }

        }
    }
}())
