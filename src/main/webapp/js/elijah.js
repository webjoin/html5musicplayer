var musicplay={
		datas:{
			left:[
				[ [0, -12], 	 [20*5, 0], 	[40, 	0],				[50, -12]],			//重地			*5
				[ [100, -12],  	 [200, 0], 	[300, 	0],		[400, -12]],					//低				*5
				[ [800, -12],  	 [1000, 0], [1400, 	0],		[2000, -12]],					//中				*2
				[ [3200, -12],	 [3500, 0], [5000, 	0],		[20000, -12] ]					//高				*2
			],
			right:[
				[ [0, -12], 	 [20, 0], 	[40, 	0],			[50, -12]],
				[ [100, -12],  	 [200, 0], 	[300, 	0],			[400, -12]],
				[ [800, -12],  	 [1000, 0], [1400, 	0],			[2000, -12]],
				[ [3200, -12],	 [3500, 0], [5000, 	0],			[20000, -12] ]
			],
			FrontTW:{
				HP:[1,1.1,1.2,1.4,1.6,1.8,2,2.2,2.5,2.8,3.2,3.6,4,4.5,5,5.6,6.3,7.1,8,9,10,11,12.5,14,16,18],
				LP:[20,18,16,14,12.5,11,10,9,8,7.1,6.3,5.6,5,4.5,4,3.6,3.2,2.8,2.5,2.2,2,1.8, 1.6,1.4,1.2,1.1],
				Slope:[-6,-12,-18,-24,-30,-36],
				Level:[ +0, -0.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5, -5.5, -6, -6.5, -7, -7.5, -8, -8.5, -9, -9.5, -10, -10.5, -11, -11.5, -12, -12.5, -13, -13.5, -14, -14.5, -15, -15.5, -16, -16.5, -17, -17.5, -18]//,0.5/步。(默认 0.0)
				,Phase:[0,180],
				selectedValsL:{Slope1:-12,HP:3200,LP:20000,Slope2:-12,Level:0,Phase:0}, //*2
				selectedValsR:{Slope1:-12,HP:3200,LP:20000,Slope2:-12,Level:0,Phase:0}

			},
			FrontMid:{
				HP:[20,22,25,28,31.5,36,40,45,50,56,63,71,80,90,100,110, 125,140,160,180,200,220,250,280, 315,360,400,450,500,560,630,710, 800,900,1,1.1,1.2,1.4,1.6,1.8,2,2.2, 2.5,2.8,3.2,3.6,4,4.5, 5,5.6,6.3,7.1, 8,9,10,11,12.5,14,16,18],
				LP:[20,18,16,14,12.5,11,10,9,8,7.1,6.3, 5.6,5,4.5,4,3.6,3.2,2.8,2.5,2.2,2,1.8, 1.6,1.4,1.2,1.1,1,900,800,710,630, 560,500,450,400,360,315,280,250, 220,200,180, 160,140,125,110, 100,90,80,71,63,56,50,45, 40,36,31.5,28,25,22],
				Slope:[-6,-12,-18,-24,-30,-36],
				Level:[ +0, -0.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5, -5.5, -6, -6.5, -7, -7.5, -8, -8.5, -9, -9.5, -10, -10.5, -11, -11.5, -12, -12.5, -13, -13.5, -14, -14.5, -15, -15.5, -16, -16.5, -17, -17.5, -18]//,0.5/步。(默认 0.0)
				,Phase:[0,180],
				selectedValsL:{Slope1:-12,HP:800,LP:2000,Slope2:-12,Level:0,Phase:0},//*2
				selectedValsR:{Slope1:-12,HP:800,LP:2000,Slope2:-12,Level:0,Phase:0}
			},
			FrontWF:{
				HP:[20,22,25,28,31.5,36,40,45, 50,56,63,71,80,90,100,110, 125,140, 160,180,200,220,250, 280,315,360,400,450,500,560, 630,710,800,900,1,1.1, 1.2,1.4,1.6, 1.8,2,2.2,2.5,2.8,3.2,3.6,4,4.5, 5,5.6, 6.3,7.1,8,9,10,11,12.5,14,16,18],
				LP:[20,18,16,14,12.5,11,10,9,8,7.1,6.3, 5.6,5,4.5,4,3.6,3.2,2.8,2.5,2.2,2,1.8, 1.6,1.4,1.2,1.1,1,900,800,710,630,560,500,450,400,360,315,280, 250,220,200,180, 160,140,125, 110,100,90,80,71,63,56,50, 45,40,36,31.5,28,25,22],
				Slope:[-6,-12,-18,-24,-30,-36],
				Level:[ +0, -0.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5, -5.5, -6, -6.5, -7, -7.5, -8, -8.5, -9, -9.5, -10, -10.5, -11, -11.5, -12, -12.5, -13, -13.5, -14, -14.5, -15, -15.5, -16, -16.5, -17, -17.5, -18]//,0.5/步。(默认 0.0)
				,Phase:[0,180],
				selectedValsL:{Slope1:-12,HP:100,LP:400,Slope2:-12,Level:0,Phase:0},//*5
				selectedValsR:{Slope1:-12,HP:100,LP:400,Slope2:-12,Level:0,Phase:0}
			},
			Subwoofer:{
				//HZ
				HP:[20,22,25,28,31.5,36,40,45, 50,56,63,71,80,90,100,110, 125,140,160,180,200],
				//HZ K
				LP:[220,200,180,160,140,125,110, 100,90,80,71,63,56,50,45, 40,36,31.5,28,25,22],
				//db
				Slope:[-6,-12,-18,-24,-30,-36],
				//db
				Level:[+6, +5.5, +5, +4.5, +4, +3.5, +3, +2.5, +2, +1.5, +1, +0.5, +0, -0.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5, -5.5, -6, -6.5, -7, -7.5, -8, -8.5, -9, -9.5, -10, -10.5, -11, -11.5, -12, -12.5, -13, -13.5, -14, -14.5, -15, -15.5, -16, -16.5, -17, -17.5, -18]//,0.5/步。(默认 0.0)
				,
				Phase:[0,180],
				selectedValsL:{Slope1:-12,HP:0,LP:50,Slope2:-12,Level:0,Phase:0},//*5
				selectedValsR:{Slope1:-12,HP:0,LP:50,Slope2:-12,Level:0,Phase:0}
			},
			userSelectedBtnVal:{
				lrb:'' // left right both
				,sfff:''//subwoofer , FrontWF , FrontMid, FrontTW
				,sffslp:''//slope Frequency Frequency slope Level Phase
			}
		},
		operation:{
			initData:function(){
				var setup =  musicplay.common.LS.get("setup");//<setup>true</setup>
				if('true' != setup){
					//it's not true , so the data was needed initialization
					musicplay.common.LS.put(musicplay.common.constant.LEFT,JSON.stringify(musicplay.datas.left));
					musicplay.common.LS.put(musicplay.common.constant.RIGHT,JSON.stringify(musicplay.datas.right));
					//--
					musicplay.common.LS.put(musicplay.common.constant.SUBWOOFER,JSON.stringify(musicplay.datas.Subwoofer));
					musicplay.common.LS.put(musicplay.common.constant.FRONTWF,JSON.stringify(musicplay.datas.FrontWF));
					musicplay.common.LS.put(musicplay.common.constant.FRONTMID,JSON.stringify(musicplay.datas.FrontMid));
					musicplay.common.LS.put(musicplay.common.constant.FRONTTW,JSON.stringify(musicplay.datas.FrontTW));
					musicplay.common.LS.put(musicplay.common.constant.SETUP,'true');
				}

				// left1 means copy of left data
				musicplay.datas.left1		=JSON.parse(musicplay.common.LS.get(musicplay.common.constant.LEFT));
				musicplay.datas.right1		=JSON.parse(musicplay.common.LS.get(musicplay.common.constant.RIGHT));
				//data
				musicplay.datas.Subwoofer1	=JSON.parse(musicplay.common.LS.get(musicplay.common.constant.SUBWOOFER));
				musicplay.datas.FrontWF1	=JSON.parse(musicplay.common.LS.get(musicplay.common.constant.FRONTWF));
				musicplay.datas.FrontMid1	=JSON.parse(musicplay.common.LS.get(musicplay.common.constant.FRONTMID));
				musicplay.datas.FrontTW1	=JSON.parse(musicplay.common.LS.get(musicplay.common.constant.FRONTTW));
				//selectedValsL:{Slope1:-12,HP:100,LP:400,Slope2:-12,Level:0,Phase:0},//*5
				/*

				[ [0, -12], 	 [20*5, 0], 	[40, 	0],				[50, -12]],			//重地			*5
				[ [100, -12],  	 [200, 0], 	[300, 	0],		[400, -12]],					//低				*5
				[ [800, -12],  	 [1000, 0], [1400, 	0],		[2000, -12]],					//中				*2
				[ [3200, -12],	 [3500, 0], [5000, 	0],		[20000, -12] ]					//高				*2
				*/
				var Subwoofer1 = musicplay.datas.Subwoofer1 ;
				var FrontWF1   = musicplay.datas.FrontWF1   ;
				var FrontMid1 = musicplay.datas.FrontMid1;
				var FrontTW1 = musicplay.datas.FrontTW1;

				musicplay.datas.left1[0] = [[Subwoofer1.selectedValsL.HP*5, Subwoofer1.selectedValsL.Slope1],[20*5, 0],[40*5,0],	[Subwoofer1.selectedValsL.LP*5, Subwoofer1.selectedValsL.Slope2]];
				musicplay.datas.left1[1] =  [[FrontWF1.selectedValsL.HP*5, FrontWF1.selectedValsL.Slope1],[200*5, 0],[300*5,0],	[FrontWF1.selectedValsL.LP*5, FrontWF1.selectedValsL.Slope2]];
				musicplay.datas.left1[2] =[[FrontMid1.selectedValsL.HP*2, FrontMid1.selectedValsL.Slope1],[1000*2, 0],[1400*2,0],	[FrontMid1.selectedValsL.LP*2, FrontMid1.selectedValsL.Slope2]];
				musicplay.datas.left1[3] =[[FrontTW1.selectedValsL.HP*2, FrontTW1.selectedValsL.Slope1],[3500*2, 0],[5000*2,0],	[FrontTW1.selectedValsL.LP, FrontTW1.selectedValsL.Slope2]];

				musicplay.datas.right1[0] = [[Subwoofer1.selectedValsR.HP*5, Subwoofer1.selectedValsR.Slope1],[20*5, 0],[40*5,0],	[Subwoofer1.selectedValsR.LP*5, Subwoofer1.selectedValsR.Slope2]];
				musicplay.datas.right1[1] =  [[FrontWF1.selectedValsR.HP*5, FrontWF1.selectedValsR.Slope1],[200*5, 0],[300*5,0],	[FrontWF1.selectedValsR.LP*5, FrontWF1.selectedValsR.Slope2]];
				musicplay.datas.right1[2] =[[FrontMid1.selectedValsR.HP*2, FrontMid1.selectedValsR.Slope1],[1000*2, 0],[1400*2,0],	[FrontMid1.selectedValsR.LP*2, FrontMid1.selectedValsR.Slope2]];
				musicplay.datas.right1[3] =[[FrontTW1.selectedValsR.HP*2, FrontTW1.selectedValsR.Slope1],[3500*2, 0],[5000*2,0],	[FrontTW1.selectedValsR.LP, FrontTW1.selectedValsR.Slope2]];


			}
			,
			addVulume:function(){
				// 1. left or right
				// 2. subwoofer , FrontWF , FrontMid, FrontTW
				// 只有frequency采区别 左右吗？ slope不区分，那选择左边和右边的slope就没有什么区别了。
				var val = musicplay.datas.userSelectedBtnVal;
				if(val.lrb == '' || val.sfff == '' || val.sffslp == ''){  // this is a validation
					//
					return false ;
				}
				// to do something
				//
			},
			reduceVolume:function(){
				var val = musicplay.datas.userSelectedBtnVal;
				if(val.lrb == '' || val.sfff == '' || val.sffslp == ''){  // this is a validation
					//
					return false ;
				}
				// to do something

			}

		},
		common:{
			constant:{
				SETUP:'setup',
				LEFT:'left',
				RIGHT:'right',
				SUBWOOFER:"Subwoofer",
				FRONTWF:"FrontWF",
				FRONTMID:"FrontMid",
				FRONTTW:"FrontTW"

			},
			LS:{ //LS对象 localstorage 对象
				LS:window.localStorage,
				put:function(key,val){
					this.LS.setItem(key,val);
				},
				get:function(key){
					return this.LS.getItem(key);
				},
				remove:function (key){
					this.LS.removeItem(key);
				},
				removeAll:function(){
					this.LS.clear();
				}
			}

		}
};

musicplay.operation.initData();

var url = [];
var host = location.host;
var port = location.port;
url.push('ws://');
var systemfiles = "http://192.168.10.105:8080/mpdquery.json";
url.push(host);
url.push('/websocket');

console.log("port-----" + url.join(''));
var socket = new WebSocket(url.join(''));
socket.onerror = function(event) {
	//
	console.log('socket----onerror')
};

socket.onopen = function(event) {
	console.log('socket----onopen')
};

socket.onmessage = function(event) {
	// console.log('socket----onmessage')
};

$(function() {
	$('.play-power > span').click(function() {
		if (!socket)
			return false;
		var cn = $(this).attr('class');
		if ('off' == cn) { // then turn off.
			sendTxt('OFF');
		} else { // turn on
			sendTxt('ON');
		}
	});
	$(".play-main-panel-setting-volume-middle-btn > span").click(function() {
		if (!socket)
			return false;
//		socket.send("PresetBtton" + $(this).text());
		sendTxt("PresetBtton" + $(this).text());
	});

});

// window.setTimeout(function(){
// if(socket){
// socket.send('Hello socket');
// }
// },3000);

$(function() {

	var url1 = "./data.json";
	// url='http://www.baidu.com'
	// debugger;

	// var obj1 = {u:main.u,status:status};
	var ajaxObj = {
			url : url1,
			timeout : 5000,
			dataType : "text",
			success : function(ctx) { // {f:true,m:'-----'}
//				eval("var datas = " + ctx);
//				var longObj = {
//					long : 0,
//					index : 0
//				};
//				var treeObj = {};
//				var treeNodes = {}; 
//				for (var i = 0; i < datas.length; i++) {
//					var le = datas[i].title.split('/').length;
//					var bool = le > longObj.long;
//					if (bool) {
//						longObj.long = le;
//						longObj.index = i;
//					}
//				}
//				for (var ii = 0; ii < datas.length; ii++) {
//					var longTitle = datas[ii]['title'];
//					var t = longTitle.replace(':/', '');
//					var ts = t.split('/');
//					for (var i = 0; i < ts.length; i++) {
//						if (i == 0) { // first
//							treeNodes.text = ts[i];
//							treeNodes.href = "#123456";
//							treeNodes.tags = [ '0' ];
//
//							treeObj = treeNodes;
//						} /*
//							 * else if (i == ts.length - 1) { // last if
//							 * (!treeObj.nodes) {
//							 * 
//							 * treeObj.nodes = [ { text : ts[i], href : "#123456",
//							 * tags : [ '0' ] } ]; treeObj = treeObj.nodes[0]; } }
//							 */else { // middle
//							//
//							// treeObj.nodes = [{}];
//							if (!treeObj.nodes) {
//
//								treeObj.nodes = [ {
//									text : ts[i],
//									href : "#123456",
//									tags : [ '0' ]
//								} ];
//								treeObj = treeObj.nodes[0];
//							} else {
//								var o = {
//									text : ts[i],
//									href : "#123456",
//									tags : [ '0' ]
//								};
//								treeObj.nodes.push(o);
//								treeObj = treeObj.nodes[treeObj.nodes.length - 1]; // last
//							}
//
//						}
//					}
//				}
//
//				console.log(JSON.stringify(treeNodes));
//				if ($('#treeview1') && $('#treeview1').treeview)
//					$('#treeview1').treeview({
//						data : [ treeNodes ]
//					});
				
				
				
				eval("var datas = " + ctx);
				var longObj = {
					long : 0,
					index : 0
				};
				var treeObj = {};
				var treeNodes = {}; 
				for (var i = 0; i < datas.length; i++) {
					var le = datas[i].title.split('/').length;
					var bool = le > longObj.long;
					if (bool) {
						longObj.long = le;
						longObj.index = i;
					}
				}
				//:/music/dir2/dir21/b21.flac
				for (var ii = 0; ii < datas.length; ii++) {
					var longTitle = datas[ii]['title'];
					var t = longTitle.replace(':/', '');
					var ts = t.split('/');
					var count = datas[ii]['count'];
//					var ctxt = +"<playcount style='display:none;'>"+count+"<playcount>";
					for (var i = 0; i < ts.length; i++) {
						if (i == 0) { // first
							treeNodes.text = ts[i];
							treeNodes.href = "http://www.baidu.com";
							treeNodes.tags = [ '0' ];
							treeObj = treeNodes;
						} else { //after first
							var nodes = treeObj.nodes ;
							if (!nodes) {
								treeObj.nodes = [ {
									text : ts[i],
									href : "http://www.baidu.com",
									tags : [ count ]
								} ];
								treeObj = treeObj.nodes[0];
							} else {
								var o = {
									text : ts[i],
									href : "http://www.baidu.com",
									tags : [ count ]
								};
								
								var bool = false;
								for(var k =0;k<nodes.length;k++){
									if( bool = (nodes[k].text == ts[i])) break ;
								}
								if(!bool)
									nodes.push(o);
								treeObj = treeObj.nodes[nodes.length - 1]; // last
							}

						}
					}
				}
				console.log(JSON.stringify(treeNodes));
				if ($('#treeview1') && $('#treeview1').treeview)
					$('#treeview1').treeview({
						data : [ treeNodes ],
						onNodeSelected: function(event, data) {
							if(!data['nodes']){
								var val = "PLAY="+data['tags'][0];
								console.log(val);
								sendTxt(val);
							}
						}
					});
				

			},
			error : function(a, b, c, d, ee) {
				console.log('error');
				// monitorReq();
			},
			complete : function(data) {
				console.log('complete')
			},
			statusCode : {
				404 : function() {
					alert("The page not found");
				}
			}
		};
	$.ajax(ajaxObj);
	
//	var datas = [ /**/{
//		'count' : '0',
//		'title' : ":/music/01.flac"
//	}, {
//		'count' : '128',
//		'title' : ":/music/dir1/a1.flac"
//	}, {
//		'count' : '256',
//		'title' : ":/music/dir2/b1.flac"
//	}, {
//		'count' : '384',
//		'title' : ":/music/dir2/b2.wav"
//	}, {
//		'count' : '512',
//		'title' : ":/music/dir2/dir21/b21.flac"
//	} ];
	
	
	
	if($('#container1').get(0) != null){
		$('#container1').highcharts(
				{
					xAxis : {title : {text : '[Hz]'} 
						// ,categories: [0, 1, '10k', '20k', '50k']
						,tickInterval: 10000
					},
					yAxis : {
						title : {text : '[dB]'},
						tickInterval: 5,
						plotLines : [ { value : 0, width : 1, color : '#808080' } ]
					},
					chart : { fontSize : '14px',fontWeight : 'bold',color : '#fff',backgroundColor : 'rgba(52, 52, 52,0.5)'},
					credits : {enabled : false},
					legend : {enabled : false},
					exporting : {enabled : false},
					title : {text : ''},
					subtitle : {text : ''},
					tooltip : {enabled : false},
					series : [
							//pointStart: 10
							{
								name : 'Green',
								marker : {
									fillColor : '#BF0B23',
									lineWidth : 10,
									radius : 0
								},
								// data : [ 9, 9, 4, -1, -6, -11]
								// data :[  null,null,null,null,null,null,null,null,[25.3, -30], [30, 0],[41, 0], [50, -20] ]
								data : musicplay.datas.left1[0]
							},
							{
								name : 'New York',
								marker : {
									fillColor : '#BF0B23',
									width : 0,
									radius : 0
								},
								// data : [ -12, -12, -12, -7, -2, 9, 9, 9, -2,-7, -12, -12 ],

								data : musicplay.datas.left1[1]
							},
							{
								name : 'Berlin',
								marker : {
									fillColor : '#BF0B23',
									width : 0,
									radius : 0
								},
								// data : [ -12, -12, -12, -7, -12, -4, 4, 9, 9,4, -4, -12 ]
								data : musicplay.datas.left1[2]
							},
							{
								name : 'London',
								marker : {
									fillColor : '#BF0B23',
									width : 0,
									radius : 0
								},
								// data : [ -12, -12, -12, -12, -12, -12, -12,-12, -12, -6, 0.6, 7, 7, 7, 0, 0 ]
								data : musicplay.datas.left1[3]
							} ]
				});



		$('#container2').highcharts({
            xAxis: { title: {text: '[Hz]'}	,tickInterval: 10000},
            yAxis: {
                title: {text: '[dB]'},
                plotLines: [{value: 0,width: 1,color: '#808080'}]
            },
            chart :{fontSize:'14px',fontWeight:'bold',color:'#fff',backgroundColor:'rgba(52, 52, 52,0.5)'},
            credits:{enabled:false},
            legend:{ enabled:false },
            exporting:{enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            tooltip:{enabled:false},
            series: [{
                name: 'Tokyo',
                marker: {
                    fillColor: '#BF0B23',
                    lineWidth:10,
                    radius: 0
                },
                // data: [9, 9, 4, -1, -6, -11,]
                data : musicplay.datas.right1[0]
            }, {
                name: 'New York',
                marker: {
                    fillColor: '#BF0B23',
                    width: 0,
                    radius: 0
                },
                // data: [-12, -4, 4, 9, 9, 4, -4, -12]
                data : musicplay.datas.right1[1]
            }, {
                name: 'Berlin',
                marker: {
                    fillColor: '#BF0B23',
                    width: 0,
                    radius: 0
                },
                // data: [-12, -12, -12, -7, -2, 9, 9, 9, -2, -7, -12, -12]
                data : musicplay.datas.right1[2]
            }, {
                name: 'London',
                marker: {
                    fillColor: '#BF0B23',
                    width: 0,
                    radius: 0
                },
                // data: [-12, -12, -12,-12, -12, -12,-12, -12, -12,-6, 0.6,7,7,7,0,0]
                data : musicplay.datas.right1[3]
            }]
        });
	}

	$(".split-middle-btn > .btn").click(function(){  //调具体的值
		var val  = $(this).siblings().text();
		musicplay.datas.userSelectedBtnVal.sffslp = val ;
		console.log("You clicked on the "+val+" button.");
		$(".split-middle-btn > .btn").css({'background':'#fff'});
		$(this).css('background','-webkit-gradient(linear, 0 0, 10% 100%, from(rgba(192, 220, 255, 0.4)), to(rgba(22, 99, 197, 0.72)))');
	});
	$('.split-left-btn > .btn').click(function(){  // click on the LEFT RIGHT BOTH
		var val = $(this).text();

		musicplay.datas.userSelectedBtnVal.lrb = val;  // selected
		console.log("You clicked on the "+val+" button.");
		$(this).siblings().css({'background':'#343434'});
		$(this).css('background','-webkit-gradient(linear, 0 0, 10% 100%, from(rgba(192, 220, 255, 0.4)), to(rgba(22, 99, 197, 0.72)))');
	});

	$(".split-right-btn > .btn").click(function(){   // 重低音
		// this function is very hard .
		var val = $(this).text() ;
		console.log("You clicked on the "+val+" button.");
		if( val == 'Return') return ;
		musicplay.datas.userSelectedBtnVal.sfff = val;  // selected
		$(this).siblings().css({'background':'#343434'});
		$(this).css('background','-webkit-gradient(linear, 0 0, 10% 100%, from(rgba(192, 220, 255, 0.4)), to(rgba(22, 99, 197, 0.72)))');
		// TODO do something
		// 1. 去LS数据赋值给 .split-middle-btn > .btn  对应的频度。
		//

	});
	// this is to compute 
	$('.wan-volume split-right-volume > span').click(function(){
		//
		if($(this).attr('class') == 'addVulume'){  //addVulume

			musicplay.operation.addVulume();
			//
		}else{ //reduceVolume
			//
			musicplay.operation.reduceVolume();
		}
	});
	/**
	 * ==================================================Events
	 * Arae=========================================
	 */
	function sendTxt(val){
		socket.send(val);
	}
	$('#CYCLEBtn').click(function(){sendTxt('CYCLEBtn');});
	$('#CHINESEBtn').click(function(){sendTxt('CHINESEBtn');});
	$('.mono-btn').click(function(){sendTxt('MONOBTN');});
	//
});





