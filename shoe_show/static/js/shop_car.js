var shopCar = (function () {
    var tbody = document.querySelector('.tbody');
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
        },
        getData() {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            console.log(shopList);
            this.insertData(shopList);
            sendAjax('static/json/list.json').then(res => {
                res = JSON.parse(res);
                this.data = res;
                this.insertData(this.data);
            });

        },
        insertData(data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                var $tr = document.createElement('tr');
                $tr.innerHTML = `
                <tr>
                            <td>
                                <img src=${this.data[i].src} alt="" />
                                <a href=${this.data[i].descride}</a>
                            </td>
                            <td>
                                ￥<span>${this.data[i].price}</span>
                            </td>
                            <td>
                                <span class="numadjust derease"></span>
                                <input class="inp" type="text" name="num" size="5" value=${localStorage.count}>
                                <span class="numadjust increase"></span>
                            </td>
                            <td>
                                    ￥<span>${this.data[i].price}*${localStorage.count}</span>
                            </td>
                            <td>
                                <button class="del">删除</button>
                            </td>
                        </tr>
                    `
                tbody.appendChild($tr);
            }
        },
    }

}())
shopCar.init();