(function(){
  function DropDown(options){
     this.father = options.father; //$('#myJD') this指向的是DropDown
     this.width = options.width;
     this.title = options.title;
     this.href = options.href;
     this.menuList = options.menuList;
     this.position = options.position || 'left';
     this.direction = options.direction || 'y'
     this.createDom();
     this.initStyle();
     this.bindEvent();
  }

  DropDown.prototype.createDom = function(){
     var dropDownDiv = $('<div class = "my-dropdown"></div>');
      this.menuList.forEach(function(menu,index){
          var oDl = $('<dl></dl>'); 
          var items =  menu.items; 
          if(menu.title){
              oDl.append($('<dt> '+menu.title+'</dt> '))
          }  
          
          items.forEach(function(item){
            oDl.append($('<dd><a href=" '+item.href+'">' +item.name+'</a></dd>'))
        }) 
        dropDownDiv.append(oDl);
                 
      })  
      $(this.father).append($('<a class ="dropDown-btn" href ="'+this.href+'" >'+this.title+'</a>'))
                    .append(dropDownDiv)
  }
 
  DropDown.prototype.initStyle = function(){
    var width = (this.width + 14) * 2;
    if(this.direction == 'x'){  
      $('.my-dropdown',this.father).css({
        display:'none',
        position: 'absolute',
        width: 1184,
        backgroundColor: '#fff',
        border: '1px solid black' ,
        left:this.position == 'right'? -1:'auto',
        right: this.position == 'right' ? -1 : 'auto',
        right:-75,
        zIndex:100
       });
       var self =this;
       $('.my-dropdown>dl',this.father).each(function(i){
           $(this).css({
             width:self.menuList[i].width,
             float:'left',
             borderRight:'1px solid #eee',
             margin:10,

           }).find('dd').css({
              width:self.menuList[i].itemWidth
           })
       })

    }else{
      $('.my-dropdown',this.father).css({
        position:'absolute',
        width:width,
        backgroundColor:'#fff',
        border:'1px solid black',
        left:this.position == 'right' ?-1:'auto',
        right: this.position == 'right' ? -1 : 'auto',
        border:'1px solid #eee',
        display:'none',
        zIndex:100,
      })
      $('.my-dropdown dl',this.father).css({
        overflow: 'hidden',
        borderBottom: '1px solid #ccc',
        padding: '10px 0 10px 15px',
     
       })
    }
       $('.my-dropdown dl dt',this.father).css({
         fontWeight:'bold',
         color:'#666'
       })
       $('.my-dropdown dl dd',this.father).css({
         width:this.width,
         float:'left',
         whiteSpace:'nowrap'
       })
  }

    DropDown.prototype.bindEvent = function(){ 
      var self = this ;
      $('.dropDown-btn',this.father).hover(function(){
        $('.dropDown-btn',self.father).css({'background-color':'red'})
           $('.my-dropdown',self.father).show();
      },function(){
        $(this).css({'background-color':'transparent'})
        $('.my-dropdown',self.father).hide();
        
      })
    }



    $.fn.extend({
        addDropdown:function(options){
           options.father = this;
           new DropDown(options);
        }
    })
}())