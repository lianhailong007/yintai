$(function(){
	 // ---------------银泰主图轮播---------------------
	 var headin=$(".headin")[0];
	 var headinbox=$(".headinbox",headin);
	 var lis=$("li",$("ul",headin)[0]);
   var btnL=$(".headinz")[0];
   var btnR=$(".headiny")[0];
	 var num=0;
   var flag=true;
	 // ------------------------------------------------
	 lis[0].style.background="#e5004f";
	 headinbox[0].style.zIndex=1;
	 // ------------------------------------------------
     var t=setInterval(moveR,3000);
      function moveR(){
          num++;
          if(num==headinbox.length){
             	num=0;
          }
          for(var i=0;i<headinbox.length;i++){
          	      animate(headinbox[i],{opacity:0},1000,Tween.Cubic.easeOut);
          	      lis[i].style.background="#211616";
          }
          animate(headinbox[num],{opacity:1},1000,Tween.Cubic.easeOut,function(){
              flag=true;
          });
          lis[num].style.background="#e5004f";
      }
      function moveL(){
      	   num--;
      	   if(num<0){
      	   	 num=headinbox.length-1;
      	   }
      	   for(var i=0;i<headinbox.length;i++){
                animate(headinbox[i],{opacity:0},1000,Tween.Cubic.easeOut);
                lis[i].style.background="#211616";
           }
           animate(headinbox[num],{opacity:1},1000,Tween.Cubic.easeOut,function(){
              flag=true;
           });
           lis[num].style.background="#e5004f";
      }
      // ------------------------------------------------
      headin.onmouseover=function(){
      	  clearTimeout(t);
      }
      headin.onmouseout=function(){
      	  t=setInterval(moveR,3000);
      }
      // ------------------------------------------------
      for(var i=0;i<lis.length;i++){
      	   lis[i].index=i;
       	   lis[i].onclick=function(){ 
       	   	    for(var j=0;j<lis.length;j++){
                         animate(headinbox[j],{opacity:0},1000,Tween.Cubic.easeOut);
       	   	             lis[j].style.background="#211616";	
       	   	    }
                   animate(headinbox[this.index],{opacity:1},1000,Tween.Cubic.easeOut);
       	   	       lis[this.index].style.background="#e5004f";
       	   	       num=this.index;
            }
      }
      // ------------------------------------------------
      btnL.onclick=function(){
         if(flag){
             flag=false;
             moveL();}
      }
      btnR.onclick=function(){
         if(flag){
             flag=false;
             moveR();}
      }
})
$(function(){
     var lis=$(".main1topl_t1");
     // console.log(lis)
     var mainb=$(".main1topl_b");
     // console.log(mainb)
     var spant=$(".spant");
     // console.log(spant);
     var main2bottomrin=$(".main2bottomrin");
     // console.log(main2bottomrin);
     var sanjiao=$(".sanjiao");
     // console.log(sanjiao);
     var sanjiao2=$(".sanjiao2");
     // -------------------------------------------------
     mainb[0].style.zIndex=1;
     main2bottomrin[0].style.zIndex=1;
     // -------------------------------------------------
     lis[0].style.borderBottom="5px solid #e5004f";
     sanjiao[0].style.display="block";
     spant[0].style.borderBottom="3px solid #e5004f";
     sanjiao2[0].style.display="block";
     // -------------------------------------------------
     for(var i=0;i<lis.length;i++){
         lis[i].index=i;
         lis[i].onmouseover=function(){
             for(var j=0;j<mainb.length;j++){
                 sanjiao[j].style.display="none";
                 lis[j].style.borderBottom="5px solid #333";
                 mainb[j].style.zIndex=0;
             }
             sanjiao[this.index].style.display="block";
             lis[this.index].style.borderBottom="5px solid #e5004f";
             mainb[this.index].style.zIndex=1;
         }
         // lis[i].onmouseout=function(){
         //     for(var x=0;x<lis.length;x++){
         //         lis[x].style.borderBottom="5px solid #333";
         //         mainb[x].style.zIndex=0;
         //     }
         //     lis[this.index].style.borderBottom="5px solid #e5004f";
         //     mainb[this.index].style.zIndex=1;
         // }
     }
     // -------------------------------------------------
     for(var x=0;x<spant.length;x++){
        spant[x].index=x;
        spant[x].onmouseover=function(){
            for(var y=0;y<main2bottomrin.length;y++){
                 sanjiao2[y].style.display="none";
                 spant[y].style.borderBottom="3px solid #333";
                 main2bottomrin[y].style.zIndex=0;
            }
            sanjiao2[this.index].style.display="block";
            spant[this.index].style.borderBottom="3px solid #e5004f";
            main2bottomrin[this.index].style.zIndex=1;
        }
     }
})
$(function(){
   var main1topl_b1=$(".main1topl_b1");
   // -----------------------------------------------
   for(var i=0;i<main1topl_b1.length;i++){
             line(main1topl_b1[i]);
    }
   // -----------------------------------------------
   function line(obj){
    var boxw=obj.offsetWidth;
    var boxh=obj.offsetHeight;
    var left=$(".left",obj)[0];
    var right=$(".right",obj)[0];
    var top=$(".top",obj)[0];
    var bottom=$(".bottom",obj)[0];

    obj.onmouseover=function(){
      animate(left,{height:boxh});
      animate(right,{height:boxh});
      animate(top,{width:boxw});
      animate(bottom,{width:boxw});
    }
    obj.onmouseout=function(){
      animate(left,{height:0});
      animate(right,{height:0});
      animate(top,{width:0});
      animate(bottom,{width:0});
    }
    }
})
$(function(){
    var bztj=$(".bztj");
    // -----------------------------------------
    for(var i=0;i<bztj.length;i++){
             line(bztj[i]);
    }

    function line(obj){
    var boxw=obj.offsetWidth;
    var boxh=obj.offsetHeight;
    var left=$(".left1",obj)[0];
    var right=$(".right1",obj)[0];
    var top=$(".top1",obj)[0];
    var bottom=$(".bottom1",obj)[0];

    obj.onmouseover=function(){
      animate(left,{height:boxh});
      animate(right,{height:boxh});
      animate(top,{width:boxw});
      animate(bottom,{width:boxw});
    }
    obj.onmouseout=function(){
      animate(left,{height:0});
      animate(right,{height:0});
      animate(top,{width:0});
      animate(bottom,{width:0});
    }
    }
})
$(function(){
    var main3inrbox=$(".main3inrbox");
    // console.log(main3inrbox)
    // -----------------------------------------
    for(var i=0;i<main3inrbox.length;i++){
             line(main3inrbox[i]);
    }

    function line(obj){
    var boxw=obj.offsetWidth;
    var boxh=obj.offsetHeight;
    var left=$(".left2",obj)[0];
    var right=$(".right2",obj)[0];
    var top=$(".top2",obj)[0];
    var bottom=$(".bottom2",obj)[0];

    obj.onmouseover=function(){
      animate(left,{height:boxh});
      animate(right,{height:boxh});
      animate(top,{width:boxw});
      animate(bottom,{width:boxw});
    }
    obj.onmouseout=function(){
      animate(left,{height:0});
      animate(right,{height:0});
      animate(top,{width:0});
      animate(bottom,{width:0});
    }
    }
})
$(function(){
  var win=$(".main3ini");
  for(var i=0;i<win.length;i++){
         ytlb(win[i]);
   }
   // --------------------------------
  function ytlb(obj){
    var wimg=$("a",obj);
   // console.log(wimg);
   var liss=$("li",obj);
   // console.log(lis);
   var widths=parseInt(getStyle(obj,"width"));
   // console.log(widths);
   var btnL1=$(".btnL1",obj)[0];
   // console.log(btnL1)
   var btnR1=$(".btnR1",obj)[0];
   // ---------------------------------
   for(var i=0;i<obj.length;i++){
         ytlb(obj[i]);
   }
   // ---------------------------------
   for(var i=0;i<wimg.length;i++){
        if(i==0){
           continue;
        }
        wimg[i].style.left=widths+"px";
   }
   // ---------------------------------
   liss[0].style.background="red";
   // ---------------------------------
   var index=0;
   var next=0;
   var flag=true;
   // ---------------------------------
   btnL1.onclick=function(){
      if(flag){
             flag=false;
             moveL1();
      }
    }
    btnR1.onclick=function(){
      if(flag){
             flag=false;
             moveR1();
      }
    }
   // ---------------------------------
   function moveR1(){
      next++;
      if(next==wimg.length){
        next=0;
      }
      wimg[next].style.left=widths+"px";
      liss[index].style.background="#ccc";
      liss[next].style.background="red";
      animate(wimg[index],{left:-widths});
      animate(wimg[next],{left:0},function(){
         flag=true;
      });
      index=next;
    }
    function moveL1(){
      next--;
      if(next<0){
        next=wimg.length-1;
      }
      wimg[next].style.left=-widths+"px";
      liss[index].style.background="#ccc";
      liss[next].style.background="red";
      animate(wimg[index],{left:widths});
      animate(wimg[next],{left:0},function(){
         flag=true;
      });
      index=next;
    }
    // ------------------------------- 
  }
})
$(function(){
   var cw=document.documentElement.clientWidth;
   var ch=document.documentElement.clientHeight;
   var divs=$(".lb");
   var qian=$(".lbtp");
   var hou=$(".zi");
   var floors=$(".floor");
   var floorArr=[];
   var sflag=true;
   var flag=true;
   var gd=$(".gd")[0];
   var main2=$(".main2")[0];
   var fanhui=$(".fanhui")[0];
   // ------------------------------------------------
   for(var i=0;i<floors.length;i++){
      floorArr.push(floors[i].offsetTop);//把每个楼层的高度压入空的数组里面
      
    }
    //添加事件（窗口滚动）
    window.onscroll=function(){
      //谷歌document.body.scrollTop  火狐document.documentElement.scrollTop
      //判断浏览器
      var obj=document.body.scrollTop?document.body:document.documentElement;
      var scrolltop=obj.scrollTop;
      if(!flag) return;
      for(var i=0;i<floors.length;i++){
        //可是窗口的高度+滚动条滚动的距离>=floor1.offsetTop+100
        if(ch+scrolltop>=floorArr[i]+200){
          for(var j=0;j<divs.length;j++){
                    qian[j].style.display="block"
                    hou[j].style.display="none"
                }
               qian[i].style.display="none"
               hou[i].style.display="block"
        }
      }
    // ------------------------------------------------
    for(var i=0;i<divs.length;i++){
        divs[i].index=i;
        divs[i].onclick=function(){
              flag=false;
              for(var j=0;j<divs.length;j++){
                    qian[j].style.display="block"
                    hou[j].style.display="none"
              }
                qian[this.index].style.display="none"
                hou[this.index].style.display="block"
              // var obj=document.body.scrollTop?document.body:document.documentElement;
              animate(document.body,{scrollTop:floorArr[this.index]},function(){
                 flag=true;
              });
              animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
                  flag=true;
              });
        }
    }
    // ------------------------------------------------
    var obj=document.body.scrollTop?document.body:document.documentElement;
        var uu=main2.offsetTop
        if(obj.scrollTop>=uu-300){
            if(sflag){
                sflag=false;
                gd.style.display="block"
            }
            
        }else if(obj.scrollTop<uu+300){
            if(!sflag){
                sflag=true;
                gd.style.display="none"
            }
            
        }
    }
    // ------------------------------------------------------------------------
    // var fanhuizi=$(".fanhuizi")[0];
    var obj=document.body.scrollTop?document.body:document.documentElement;
    fanhui.onclick=function(){
        animate(obj,{scrollTop:0});
        // fanhuizi.style.display="block"
    }
})
$(function(){
  var headinleft_in1div=$(".headinleft_in1div");
  // console.log(headinleft_in1div);
  var xuanxk=$(".xuanxk");
  // console.log(xuanxk);
  for(var i=0;i<headinleft_in1div.length;i++){
           headinleft_in1div[i].index=i;
           headinleft_in1div[i].onmouseover=function(){
                xuanxk[this.index].style.display="block";
           }
           headinleft_in1div[i].onmouseout=function(){
                xuanxk[this.index].style.display="none";
                }
  }
})
//补充轮播
$(function(){
    var win=$(".sxblbbox")[0];
    var img=$(".main3inlbottomin",$(".sxblb")[0]);
    var btnL=$(".btnL",$(".sxblbbtn")[0])[0];
    var btnR=$(".btnR",$(".sxblbbtn")[0])[0];
    var widths=parseInt(getStyle(win,"width"));

    for(var i=0;i<img.length;i++){
      if(i==0){
        continue;
      }
      img[i].style.left=widths+"px";
    }

    var flag=true;
    var index=0;
    var next=0;

    btnL.onclick=function(){
      if(flag){
               flag=false;
             moveL();
      }
    }
    btnR.onclick=function(){
      if(flag){
               flag=false;
             moveR();
      }
    }

    function moveR(){
      next++;
      if(next==img.length){
        next=0;
      }
      img[next].style.left=widths+"px";
      animate(img[index],{left:-widths});
      animate(img[next],{left:0},function(){
         flag=true;
      });
      index=next;
    }
    function moveL(){
      next--;
      if(next<0){
        next=img.length-1;
      }
      img[next].style.left=-widths+"px";
      animate(img[index],{left:widths});
      animate(img[next],{left:0},function(){
        flag=true;
      });
      index=next;
    }
})
$(function(){
    var win=$(".sxblbbox1")[0];
    var img=$(".main3inlbottomin",$(".sxblb1")[0]);
    var btnL=$(".btnL",$(".sxblbbtn1")[0])[0];
    var btnR=$(".btnR",$(".sxblbbtn1")[0])[0];
    var widths=parseInt(getStyle(win,"width"));

    for(var i=0;i<img.length;i++){
      if(i==0){
        continue;
      }
      img[i].style.left=widths+"px";
    }

    var flag=true;
    var index=0;
    var next=0;

    btnL.onclick=function(){
      if(flag){
               flag=false;
             moveL();
      }
    }
    btnR.onclick=function(){
      if(flag){
               flag=false;
             moveR();
      }
    }

    function moveR(){
      next++;
      if(next==img.length){
        next=0;
      }
      img[next].style.left=widths+"px";
      animate(img[index],{left:-widths});
      animate(img[next],{left:0},function(){
         flag=true;
      });
      index=next;
    }
    function moveL(){
      next--;
      if(next<0){
        next=img.length-1;
      }
      img[next].style.left=-widths+"px";
      animate(img[index],{left:widths});
      animate(img[next],{left:0},function(){
        flag=true;
      });
      index=next;
    }
})
$(function(){
    var win=$(".sxblbbox2")[0];
    var img=$(".main3inlbottomin",$(".sxblb2")[0]);
    var btnL=$(".btnL",$(".sxblbbtn2")[0])[0];
    var btnR=$(".btnR",$(".sxblbbtn2")[0])[0];
    var widths=parseInt(getStyle(win,"width"));

    for(var i=0;i<img.length;i++){
      if(i==0){
        continue;
      }
      img[i].style.left=widths+"px";
    }

    var flag=true;
    var index=0;
    var next=0;

    btnL.onclick=function(){
      if(flag){
               flag=false;
             moveL();
      }
    }
    btnR.onclick=function(){
      if(flag){
               flag=false;
             moveR();
      }
    }

    function moveR(){
      next++;
      if(next==img.length){
        next=0;
      }
      img[next].style.left=widths+"px";
      animate(img[index],{left:-widths});
      animate(img[next],{left:0},function(){
         flag=true;
      });
      index=next;
    }
    function moveL(){
      next--;
      if(next<0){
        next=img.length-1;
      }
      img[next].style.left=-widths+"px";
      animate(img[index],{left:widths});
      animate(img[next],{left:0},function(){
        flag=true;
      });
      index=next;
    }
})
$(function(){
    var win=$(".sxblbbox3")[0];
    var img=$(".main3inlbottomin",$(".sxblb3")[0]);
    var btnL=$(".btnL",$(".sxblbbtn3")[0])[0];
    var btnR=$(".btnR",$(".sxblbbtn3")[0])[0];
    var widths=parseInt(getStyle(win,"width"));

    for(var i=0;i<img.length;i++){
      if(i==0){
        continue;
      }
      img[i].style.left=widths+"px";
    }

    var flag=true;
    var index=0;
    var next=0;

    btnL.onclick=function(){
      if(flag){
               flag=false;
             moveL();
      }
    }
    btnR.onclick=function(){
      if(flag){
               flag=false;
             moveR();
      }
    }

    function moveR(){
      next++;
      if(next==img.length){
        next=0;
      }
      img[next].style.left=widths+"px";
      animate(img[index],{left:-widths});
      animate(img[next],{left:0},function(){
         flag=true;
      });
      index=next;
    }
    function moveL(){
      next--;
      if(next<0){
        next=img.length-1;
      }
      img[next].style.left=-widths+"px";
      animate(img[index],{left:widths});
      animate(img[next],{left:0},function(){
        flag=true;
      });
      index=next;
    }
})
$(function(){
    var win=$(".sxblbbox4")[0];
    var img=$(".main3inlbottomin",$(".sxblb4")[0]);
    var btnL=$(".btnL",$(".sxblbbtn4")[0])[0];
    var btnR=$(".btnR",$(".sxblbbtn4")[0])[0];
    var widths=parseInt(getStyle(win,"width"));

    for(var i=0;i<img.length;i++){
      if(i==0){
        continue;
      }
      img[i].style.left=widths+"px";
    }

    var flag=true;
    var index=0;
    var next=0;

    btnL.onclick=function(){
      if(flag){
               flag=false;
             moveL();
      }
    }
    btnR.onclick=function(){
      if(flag){
               flag=false;
             moveR();
      }
    }

    function moveR(){
      next++;
      if(next==img.length){
        next=0;
      }
      img[next].style.left=widths+"px";
      animate(img[index],{left:-widths});
      animate(img[next],{left:0},function(){
         flag=true;
      });
      index=next;
    }
    function moveL(){
      next--;
      if(next<0){
        next=img.length-1;
      }
      img[next].style.left=-widths+"px";
      animate(img[index],{left:widths});
      animate(img[next],{left:0},function(){
        flag=true;
      });
      index=next;
    }
})