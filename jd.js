import '../京东/jd.css';
import $ from 'jquery';
window.$= $;

// $('.position').addDropdown({
//     title:'福建',
//     width:220,
//     menuList: [{
//         title:"",
//         items:[{
//             [{
//                 title:"",
//                 name:'安徽',
//             },{
//                title:"",
//                name:'江苏'  
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'浙江',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             },{
//                 title:"",
//                 name:'安徽',
//             }

//         ],
// }]

// });


$('#myJD').addDropdown({
    href: '#',
    title: "我的京东",
    width: 126,
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }],
    }]
});

$('#procurement').addDropdown({
    href: '#',
    title: '企业采购',
    width: 56,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});


$('#service').addDropdown({
    href: '#',
    title: '客户服务',
    width: 70,
    position: 'right',
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropdown({
    href: '#',
    title: '网站导航',
    direction: 'x',
    menuList: [{
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }]
});


var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];

function createMenudom(menuList) {
    menuList.forEach(function(data) {
        var oLi = $('<li></li>');
        var title = data.title;
        for (var i = 0; i < title.length; i++) {
            $('<a href="#">' + title[i] + '</a>').appendTo(oLi);
            if (i != title.length - 1) {
                $('<span>/</span>').appendTo(oLi)
            }
        }
        oLi.appendTo($('#menu-list'))
    })
}
var timer = null;

function bindEvent() {
    $('#menu-list').on('mouseenter', 'li', function(e) {
        clearTimeout(timer);
        var index = $(this).index();
        $(this).css({ backgroundColor: '#eee' })
        renderMenuContent(menuList[index].content)
        $('#menu-content').show();
    }).on('mouseleave', function() {
        timer = setTimeout(function() {
            $('#menu-content').hide();
        }, 500)
    })
}

function renderMenuContent(data) {
    // <ul class="tabs">
    //     <li>家电馆</li>
    //     <li>镇乡专卖店</li>
    //     <li>家电服务</li>
    // </ul>
    // <div class="item-content">
    //     <dl>
    //         <dt>电视</dt>
    //         <dd>
    //             <a href="#">曲面电视</a>
    //             <a href="#">超薄电视</a>
    //             <a href="#">OLED电视</a>
    //             <a href="#">4K超清电视</a>
    //             <a href="#">55英寸</a>
    //             <a href="#">65英寸</a><a href="#">电视配件</a></dd>
    //     </dl>
    // </div> 
    $('#menu-content').html('');
    var otabs = $('<ul class ="tabs"></ul>');
    var tabs = data.tabs; //一级标题
    tabs.forEach(function(tab) {
        $('<li>' + tab + '</li>').appendTo(otabs);
    })
    var subs = data.subs;
    var subsDiv = $('<div class="item-content"></div>');
    subs.forEach(function(sub) {
        var oDl = $('<dl></dl>');
        $('<dt>' + sub.title + '</dt>').appendTo(oDl); //二级子标题
        var oDd = $('<dd></dd>'); //子内容
        sub.items.forEach(function(ele) {
            $('<a href ="#">' + ele + '</a>').appendTo(oDd);
        })

        oDl.append(oDd).appendTo(subsDiv);
    })
    $('#menu-content').append(otabs).append(subsDiv);

}
createMenudom(menuList)
bindEvent()

$('#swiper').Slider({
    imgList: ['https://img1.360buyimg.com/pop/jfs/t1/34441/17/1285/197831/5cb463ebEe81f91c3/4600bf8a8baf704c.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/37133/26/2273/30169/5cb594f2E3b91bb43/822488aa1d7b031e.jpg', 'https://img1.360buyimg.com/da/jfs/t1/37440/29/1488/102221/5cb52c56E454e4f66/383fac3e1d70d495.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/32341/26/11683/46759/5cb58102E544717ff/5d06d34c2c7b1c34.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/32101/27/12708/95957/5cb8174dEff60166c/f3ac6ca1bfcb4a51.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/36634/3/3870/101731/5cb99c15E1fafe167/689ebf2381d1b069.jpg',
        'https://img1.360buyimg.com/pop/jfs/t1/33677/36/4556/79197/5cb7e350E7683216e/41f070db83b4d47b.jpg'
    ],
    isAuto: true,
    animateType: 'fade'

});

function bindShowServiceEvent() {
    $('.item-frame').on('mouseenter', function(e) {
        $('.item-frame').removeClass('active');
        $('.service').addClass('service-extend');
        $(this).addClass('active');
    })

}
bindShowServiceEvent()
$('#close').click(function() {
    $('.item-frame').removeClass('active');
    $('.service').removeClass('service-extend');
    $('.item-frame').off('mouseenter');
    setTimeout(function() {
        bindShowServiceEvent()
    }, 500)
})


//搜索按钮事件
$('#search-btn').click(function() {
    var val = $('#search-inp').val();
    $.ajax({
        url: 'http://suggest.taobao.com/sug',
        data: {
            code: 'utf-8',
            q: val,
            callback: 'dealData',

        },
        dataType: 'jsonp',
    })
})

function dealData(data) {
    $('#shelper').empty();
    data = data.result;
    console.log(data)
    data.forEach(function(item) {
        $('<li>' + item[0] + '</li>').appendTo($('#shelper'));
    })
    $('#shelper').show();
}
//防抖
var searchTimer = null;
$('#search-inp').keyup(function(e) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function() {
        $('#search-btn').trigger('click');
    }, 300)
})
$('.search-box').mouseleave(function() {
    $('#shelper').hide();
}).click(function() {
    if ($('#search-inp').val()) {
        $('#shelper').show();
    }
}).find('#search-inp').focus(function(e) {
    e.preventDefault();
    if ($('#search-inp').val()) {
        $('#shelper').show();
    }

})

$('.sk-mid').Slider({
    imgList: [
        ['https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/19664/22/5029/146200/5c371ce7Ed88243bf/4050a27c714dd4f5.jpg!q90.webp',
            'https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/3445/3/12562/298328/5bd42169Edabf8535/6c3b5d81eb86b462.jpg!q90.webp'
        ],
        [
            'https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/24602/40/14233/166462/5ca57073E385a8e7c/b314d226c4216c99.png!q90.webp',
            'https://img11.360buyimg.com/mobilecms/s140x140_jfs/t26674/132/1799437842/185954/e68a4b67/5bee21edN5ec04279.jpg!q90.webp'
        ],
    ],
    imgWidth: 200,
    animateType: 'animate',
    isAuto: false,
})
$('.sk-right').Slider({
    imgList: ['https://img10.360buyimg.com/mobilecms/s180x260_jfs/t1/32935/40/11374/44668/5cb44a54Eb764ca0f/29020ab3d74cbd59.jpg!q90!cc_180x260',
        'https://img30.360buyimg.com/mobilecms/s180x260_jfs/t1/37067/4/2601/77956/5cb6a21dE63a9c262/976ce73ec28a8898.jpg!q90!cc_180x260',
    ],
    animateType: 'fade',
    isAuto: true,
    direction: 'right'
})