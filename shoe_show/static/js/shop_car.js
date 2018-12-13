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
        },
        insertData(data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                var $tr = document.createElement('tr');
                $tr.innerHTML = `
            <tr>
                        <td>
                            <img style="width:50px;height:50px" src="static/images/03_small.jpg" alt="" />
                            <a style="font-size:10px" href="../details.html">NIKE耐克男鞋跑步鞋2018新款ZOOM系列减震透气舒适运动鞋AA7406</a>
                        </td>
                        <td>
                            ￥<span>111</span>
                        </td>
                        <td>
                            <span class="numadjust derease"></span>
                            <input class="inp" type="text" name="num" size="5" value=${localStorage.count}>
                            <span class="numadjust increase"></span>
                        </td>
                        <td>
                                ￥<span>222</span>
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