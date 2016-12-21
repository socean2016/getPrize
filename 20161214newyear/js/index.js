$(function(){
	var e;
	var list;
	var list2;
	var times;
	var getPrize ={
			Pn:0,
			prize_list:$(".prize_list li"),
			alert_list:$(".alert_list li"),
			createArr:function(ele){
				var arr1=[];
				
				for(var i=0;i<ele.length;i++){
					arr1.push(ele.eq(i).html());	
				}
				//console.log(this);
				return arr1;	
			},
			blingFun:function(){
					
					function randomsort(c, d) {  
						return Math.random()>.5 ? -1 : 1;  
					}				  
					var arr2=getPrize.createArr(this.prize_list).sort(randomsort);
					for(var i=0;i<this.prize_list.length;i++){
						this.prize_list.eq(i).html(arr2[i]);	
					}
					
					var b =parseInt(Math.random()*8);
					
					while(e==b){b=parseInt(Math.random()*8);}
					//console.log(e,b);
					e=b;
					$(".top_list li").eq(b).addClass("bling").siblings().removeClass("bling");	
				},	
			click:function(ele,num){
				
				ele.hide().siblings().show();
				Pn=this.roll();
				this.prize_list.eq(num).html(list[Pn]);
				
				$(".alert_prize").html("<div class='close'></div>"+"<a href='http://www.baidu.com'>"+list2[Pn]+"</a>");
				$(".alert_prize").show();	
			},	
			roll:function(){//概率在此
				
				$.ajax({
					url:"/jquery/test1.txt",
					async:false
					
				})
				
				
				var a =parseInt(Math.random()*100);
				
				if(a<10){
					Pn=0;	
				}else if((a>=10)&&(a<20)){
					Pn=1;	
				}else if((a>=20)&&(a<30)){
					Pn=2;	
				}else if((a>=30)&&(a<40)){
					Pn=3;	
				}else if((a>=40)&&(a<50)){
					Pn=4;	
				}else if((a>=50)&&(a<=100)){
					Pn=5;	
				}
				//console.log(Pn);
				return Pn;
					
			}
		
		}
	list=getPrize.createArr(getPrize.prize_list);
	
	list2 = getPrize.createArr(getPrize.alert_list);
	
	console.log(list,list2);
	var changeBling = setInterval(function(){
		getPrize.blingFun();	
	},800);
	$(".top_list li").click(function(){
		var indexPrize = $(this).index();
		clearInterval(changeBling);
		getPrize.click($(this),indexPrize);
	});
	$(".alert_prize").click(function(event){
		//console.log(list);
		//console.log(event.target.className);
		/*if(event.target.className==""){
			return false;	
		}*/
		$(".alert_prize").hide();
		$(".top_list li").show();
		changeBling = setInterval(function(){
			getPrize.blingFun();	
		},800);
	});
	
	
	
})
