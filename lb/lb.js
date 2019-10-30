(function(){

    function Slider(options){
        //根据 轮播图属性全部保存到轮播图对象身上
        this.wrap = options.wrap
        this.imgList = options.imgList;
        this.imgNum = this.imgList.length;
        this.imgWidth = options.imgWidth;
        this.width = options.width || $(this.wrap).width();
        this.height = options.height || $(this.wrap).height();
        this.animateType = options.animateType || 'animate';
        this.isAuto = options.isAuto;
        this.direction = options.direction || 'right';
        this.nowIndex = 0;
        this.flag = false;
        this.createDom();//创建轮播图的结构
        this.initStyle();//初始化轮播图样式
        this.bindEvent();//绑定轮播图事件
        if(this.isAuto){
                 this.autoMove();
        }

    }
    Slider.prototype.createDom =function(){
        var oUl = $('<ul class = "slider"></ul>');
        var oSpot = $('<div class="spot"></div>')
        this.imgList.forEach(function(ele,index){
        var oLi = $('<li><a href="#"><img src = "'+ ele +'"></img></a></li>');
        var oSpan = $('<span></span>');
        oLi.appendTo(oUl);
        oSpan.appendTo(oSpot);
        })
        if(this.animateType =='animate'){
            $('<li><a href ="#"><img src =" '+this.imgList[0]+'"></img></a></li>').appendTo(oUl)
        }
        var leftBtn = $('<div class= "left-btn">&lt</div>')
        var rightBtn = $('<div class= "right-btn">&gt</div>')
        oUl.appendTo(this.wrap);
        oSpot.appendTo(this.wrap);
        leftBtn.appendTo(this.wrap);
        rightBtn.appendTo(this.wrap);
    }
    Slider.prototype.initStyle = function(){
        $(this.wrap).css({
            overflow:'hidden',
            position:'relative',  
        })
         $('*',this.wrap).css({
             listStyle:'none',
             margin:0,
             padding:0,
         })
         $('.slider',this.wrap).css({
             width:this.animateType =='animate'?(this.imgNum+1)* this.width: this.width,
             height:this.height,
             position:'absolute',   
         })
         if(this.animateType =='animate'){
             $('.slider > li').css({
                 width:this.width,
                 height:this.height,
                 float:'left',
             })
         }else if(this.animateType =='fade'){
            $('.slider > li',this.wrap).css({
                width:this.width,
                height:this.height,
                position:'absolute',
                top:0,
                left:0,
                dispaly:'none',
            }).eq(this.nowIndex).css({
                dispaly:'block'
            }) 
         };
          $('.slider>li a, .slider>li a img',this.wrap).css({
              dispaly:'inline-block',
              width:this.width,
              height:this.height,
          });
         $('.left-btn , .right-btn',this.wrap).css({
             position:'absolute',
             textAlign:'center',
             height:30,
             width:50,
             top:'50%',
             lineHeight:'30px',
             cursor:'pointer',
             backgroundColor:'rgba(0, 0, 0, 0.5)',
             color:'#fff',
             marginTop: -15,
         });
         $('.right-btn',this.wrap).css({
             right: 0,
         });
         $('.spot').css({
             position:'absolute',
             bottom:0,
             left:'50%',
             marginLeft: -16*this.imgNum / 2,
         });
         $('.spot > span').css({
             display:'inline-block',
             width:10,
             height:10,
             margin:3,
             borderRadius:'50%',
             backgroundColor:'#fff',
             cursor: 'pointer',
         }).eq(this.nowIndex).css({
             backgroundColor:'red',
         });
    }
    Slider.prototype.bindEvent = function(){
        var self = this ;
       $('.left-btn',this.wrap).click(function(e){
           self.move('prev');
       })
       $('.right-btn',this.wrap).click(function(e){
           self.move('next');
       });
       $('.spot span',this.wrap).click(function(){
           self.move($(this).index());
       })
       $(this.wrap).mouseenter(function(){
           clearInterval(self.timer)
       }).mouseleave(function(){
           if(self.isAuto){
               self.autoMove();
           }
       })
    }
    Slider.prototype.move = function(dir){
        if(this.flag){
            return false
        };  
        this.flag = true; 
        switch(dir){
            case 'prev':
             if(this.animateType == 'animate'){
                 if(this.nowIndex == 0){
                     console.log(nowIndex)
                     $('.slider',this.wrap).css({
                         left:-this.imgNum * this.width,
                     })
                     this.nowIndex = this.imgNum - 1;
                 }else{
                     this.nowIndex -- ;
                 }
             }else if(this.animateType == 'fade'){
                 if(this.nowIndex == 0){
                     this.nowIndex = this.imgNum - 1;
                 }else{
                     this.nowIndex--;
                 }
             }
             break;
             case 'next':
             if(this.animateType == 'animate' && this.nowIndex == this.imgNum){
                $('.slider', this.wrap).css({
                    left:0,
                })
                this.nowIndex =1;
             }else if(this.animateType == 'fade' && this.nowIndex == this.imgNum-1){
                 this.nowIndex = 0;
             }else{
                 this.nowIndex++;
             }
             break;
        default:
            this.nowIndex = dir ;
            
            break;
        }
        var self = this;
        if(this.animateType == 'animate'){
         $('.slider',this.wrap).animate({
             left:-this.nowIndex*this.width,
         },function(){
             self.flag = false;
         })
         }else if(this.animateType = 'fade'){
        $('.slider li', this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function(){
            self.flag = false;
        })
    }   
     $('.spot > span',this.wrap).css({
         backgroundColor:'#fff',
     }).eq(this.nowIndex % this.imgNum).css({
         backgroundColor:'red',
     })
    }
    Slider.prototype.autoMove=function(){
        var self = this;
        this.timer = setInterval(function(){
            if(self.direction = 'left'){
                $('.left-btn',self.wrap).trigger('click')
            }else{
                $('.right-btn',self.wrap).trigger('click')
            }
        },3000)
    }
    
    $.fn.extend({
        Slider:function(options){
            options.wrap = this ; //创建轮播图的包裹层 插入轮播图的位置
            new Slider(options);
        }
    })
}())