var details = (function () {

    return {
        init: function () {
            this.Multiple = 2;
            this.$box = document.querySelector('.box');
            this.$showImage = this.$box.querySelector('.show-image');
            this.$showBigImage = this.$box.querySelector('.show-big-image');
            this.$ulbox = this.$box.querySelector('.img-box');
            this.$liAll = this.$ulbox.children;
            this.$filter = this.$showImage.querySelector('.filter');

            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].index = i;
            }
            this.event();
        },

        event: function () {
            var _this = this;
            this.$ulbox.onmouseover = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'IMG') {
                    _this.showImage(target.parentNode.index);
                }
            }

            this.$showImage.onmouseenter = function () {
                _this.$filter.style.display = 'block';
                _this.$showBigImage.style.display = 'block';
                _this.bigWidth = _this.$showBigImage.clientWidth;
                _this.bigHeight = _this.$showBigImage.clientHeight;
                _this.$filter.style.width = _this.bigWidth / _this.Multiple + 'px';
                _this.$filter.style.height = _this.bigHeight / _this.Multiple + 'px';
                _this.$showBigImage.querySelector('img').style.width = this.offsetWidth * _this.Multiple + 'px';
            }

            this.$showImage.onmousemove = function (e) {
                window.event;
                let x = e.pageX,
                    y = e.pageY;
                var left = x - _this.$filter.offsetWidth / 2 - this.offsetLeft;
                var top = y - _this.$filter.offsetHeight / 2 - this.offsetTop;
                var maxL = this.clientWidth - _this.$filter.offsetWidth,
                    maxT = this.clientHeight - _this.$filter.offsetHeight;
                if (left <= 0) {
                    left = 0;
                } else if (left > maxL) {
                    left = maxL;
                }
                if (top < 0) {
                    top = 0;
                } else if (top > maxT) {
                    top = maxT;
                }
                _this.$filter.style.left = left + 'px';
                _this.$filter.style.top = top + 'px';
                var img = _this.$showBigImage.querySelector('img');
                img.style.left = -_this.Multiple * left + 'px';
                img.style.top = -_this.Multiple * top + 'px';
            }

            this.$showImage.onmouseleave = function () {
                _this.$filter.style.display = 'none';
                _this.$showBigImage.style.display = 'none';
            }
        },
        showImage: function (index) {
            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].className = '';
            }
            this.$liAll[index].className = 'active';
            var src = this.$liAll[index].querySelector('img').getAttribute('src');
            this.$showImage.querySelector('img').src = src.replace('small', 'big');
            this.$showBigImage.querySelector('img').src = src.replace('small', 'largest');
        }
    }
}())