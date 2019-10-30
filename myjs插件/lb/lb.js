function createBannerArea(areaDom, options) {
    var wrapper = document.getElementById('wrapper');
    var imgArea = document.createElement('div');
    var indexArea = document.createElement('div');
    var curIndex = 0;
    var autotimer = null;

    areaDom.innerHTML = " ";
    areaDom.appendChild(imgArea);
    areaDom.appendChild(indexArea);


    createImgArea()
    createNumberArea()
    changeStatus(0);

    imgArea.addEventListener('mouseenter', function() {
        clearInterval(autotimer);
        autotimer = null;
    })
    imgArea.addEventListener('mouseleave', function() {
        autoChange();
    })

    //1.创建一个区域显示图片
    function createImgArea() {
        imgArea.style.width = '100%';
        imgArea.style.height = '100%';
        imgArea.style.display = 'flex';
        for (var prop of options) {
            console.log(prop)
            var img = document.createElement('img');
            img.src = prop.imgUrl;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.display = "block";
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                if (prop.link) {
                    location.href = prop.link;
                }
            }, false)
            imgArea.appendChild(img);
        }
    }
    //2.创建一个区域显示下标
    function createNumberArea() {
        indexArea.style.textAlign = 'center';
        indexArea.style.position = ' relative';
        indexArea.style.marginTop = '-30px';
        for (var i = 0; i < options.length; i++) {
            var span = document.createElement('span');
            span.style.display = "inline-block";
            span.style.width = '12px';
            span.style.height = '12px';
            span.style.backgroundColor = 'lightgray'
            span.style.cursor = 'pointer';
            span.style.borderRadius = '50%';
            span.style.margin = '0 5px ';
            (function(index) {
                span.addEventListener('click', function() {
                    changeStatus(index);
                }, false)
            })(i)
            indexArea.appendChild(span);
        }
    }

    //3.根据指定的索引，切换当前的状态

    function changeStatus(nowIndex) {
        curIndex = nowIndex
        for (let i = 0; i < indexArea.children.length; i++) {
            var element = indexArea.children[i];
            if (i == nowIndex) {
                element.style.backgroundColor = '#be926f';
            } else {
                element.style.backgroundColor = 'lightgray'
            }
            var targetMarginLeft = curIndex * -100;
            imgArea.children[0].style.marginLeft = targetMarginLeft + '%'
        }

    }

    //4.实现自动切换
    function autoChange() {
        if (autotimer) {
            return;
        }
        clearInterval(autotimer)
        autotimer = setInterval(function() {
            if (curIndex == options.length - 1) {
                changeStatus(0);
            } else {
                changeStatus(curIndex + 1)
            }
        }, 1000)
    }
}