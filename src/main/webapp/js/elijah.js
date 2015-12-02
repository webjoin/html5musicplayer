var musicplay={
		datas:{
			left:[
				[ 9, 9, 4, -1, -6, -11],
				[ -12, -12, -12, -7, -2, 9, 9, 9, -2,-7, -12, -12 ],
				[ -12, -12, -12, -7, -12, -4, 4, 9, 9,4, -4, -12 ],
				[ -12, -12, -12, -12, -12, -12, -12,-12, -12, -6, 0.6, 7, 7, 7, 0, 0 ]
			],
			right:[
				[9, 9, 4, -1, -6, -11,],
				[-12, -4, 4, 9, 9, 4, -4, -12],
				[-12, -12, -12, -7, -2, 9, 9, 9, -2, -7, -12, -12],
				[-12, -12, -12,-12, -12, -12,-12, -12, -12,-6, 0.6,7,7,7,0,0]
			],
			Subwoofer:{
				HP:["20HZ","22HZ","25HZ","28HZ","31.5HZ","36HZ","40HZ","45HZ"," 50HZ","56HZ","63HZ","71HZ","80HZ","90HZ","100HZ","110HZ"," 125HZ","140HZ","160HZ","180HZ","200HZ"],
				LP:["220HZ","200HZ","180HZ","160HZ","140HZ","125HZ","110HZ"," 100HZ","90HZ","80HZ","71HZ","63HZ","56HZ","50HZ","45HZ"," 40HZ","36HZ","31.5HZ","28HZ","25HZ","22HZ"],
				Slope:["-6db","-12db","-18db","-24db","-30db","-36db"],
				Level:["+6db", "+5.5db", "+5db", "+4.5db", "+4db", "+3.5db", "+3db", "+2.5db", "+2db", "+1.5db", "+1db", "+0.5db", "+0db", "-0.5db", "-1db", "-1.5db", "-2db", "-2.5db", "-3db", "-3.5db", "-4db", "-4.5db", "-5db", "-5.5db", "-6db", "-6.5db", "-7db", "-7.5db", "-8db", "-8.5db", "-9db", "-9.5db", "-10db", "-10.5db", "-11db", "-11.5db", "-12db", "-12.5db", "-13db", "-13.5db", "-14db", "-14.5db", "-15db", "-15.5db", "-16db", "-16.5db", "-17db", "-17.5db", "-18db"]//,0.5db/步。(默认 0.0db)
				,Phase:[0,180],
				selectedVals:{
					HP:"",
					Slope:"",
					Level:"",
					Phase:""
				}
			},
			FrontWF:{
				HP:["20HZ","22HZ","25HZ","28HZ","31.5HZ","36HZ","40HZ","45HZ"," 50HZ","56HZ","63HZ","71HZ","80HZ","90HZ","100HZ","110HZ"," 125HZ","140HZ"," 160HZ","180HZ","200HZ","220HZ","250HZ"," 280HZ","315HZ","360HZ","400HZ","450HZ","500HZ","560HZ"," 630HZ","710HZ","800HZ","900HZ","1K","1.1K"," 1.2K","1.4K","1.6K"," 1.8K","2K","2.2K","2.5K","2.8K","3.2K","3.6K","4K","4.5K"," 5K","5.6K"," 6.3K","7.1K","8K","9K","10K","11K","12.5K","14K","16K","18K"],
				LP:["20K","18K","16K","14K","12.5K","11K","10K","9K","8K","7.1K","6.3K"," 5.6K","5K","4.5K","4K","3.6K","3.2K","2.8K","2.5K","2.2K","2K","1.8K"," 1.6K","1.4K","1.2K","1.1K","1K","900HZ","800HZ","710HZ","630HZ","560HZ","500HZ","450HZ","400HZ","360HZ","315HZ","280HZ"," 250HZ","220HZ","200HZ","180HZ"," 160HZ","140HZ","125HZ"," 110HZ","100HZ","90HZ","80HZ","71HZ","63HZ","56HZ","50HZ"," 45HZ","40HZ","36HZ","31.5HZ","28HZ","25HZ","22HZ"],
				Slope:["-6db","-12db","-18db","-24db","-30db","-36db"],
				Level:[ "+0db", "-0.5db", "-1db", "-1.5db", "-2db", "-2.5db", "-3db", "-3.5db", "-4db", "-4.5db", "-5db", "-5.5db", "-6db", "-6.5db", "-7db", "-7.5db", "-8db", "-8.5db", "-9db", "-9.5db", "-10db", "-10.5db", "-11db", "-11.5db", "-12db", "-12.5db", "-13db", "-13.5db", "-14db", "-14.5db", "-15db", "-15.5db", "-16db", "-16.5db", "-17db", "-17.5db", "-18db"]//,0.5db/步。(默认 0.0db)
				,Phase:[0,180],
				selectedVals:{
					HP:"",
					Slope:"",
					Level:"",
					Phase:""
				}
			},
			FrontMid:{
				HP:["20HZ","22HZ","25HZ","28HZ","31.5HZ","36HZ","40HZ","45HZ","50HZ","56HZ","63HZ","71HZ","80HZ","90HZ","100HZ","110HZ"," 125HZ","140HZ","160HZ","180HZ","200HZ","220HZ","250HZ","280HZ"," 315HZ","360HZ","400HZ","450HZ","500HZ","560HZ","630HZ","710HZ"," 800HZ","900HZ","1K","1.1K","1.2K","1.4K","1.6K","1.8K","2K","2.2K"," 2.5K","2.8K","3.2K","3.6K","4K","4.5K"," 5K","5.6K","6.3K","7.1K"," 8K","9K","10K","11K","12.5K","14K","16K","18K"],
				LP:["20K","18K","16K","14K","12.5K","11K","10K","9K","8K","7.1K","6.3K"," 5.6K","5K","4.5K","4K","3.6K","3.2K","2.8K","2.5K","2.2K","2K","1.8K"," 1.6K","1.4K","1.2K","1.1K","1K","900HZ","800HZ","710HZ","630HZ"," 560HZ","500HZ","450HZ","400HZ","360HZ","315HZ","280HZ","250HZ"," 220HZ","200HZ","180HZ"," 160HZ","140HZ","125HZ","110HZ"," 100HZ","90HZ","80HZ","71HZ","63HZ","56HZ","50HZ","45HZ"," 40HZ","36HZ","31.5HZ","28HZ","25HZ","22HZ"],
				Slope:["-6db","-12db","-18db","-24db","-30db","-36db"],
				Level:[ "+0db", "-0.5db", "-1db", "-1.5db", "-2db", "-2.5db", "-3db", "-3.5db", "-4db", "-4.5db", "-5db", "-5.5db", "-6db", "-6.5db", "-7db", "-7.5db", "-8db", "-8.5db", "-9db", "-9.5db", "-10db", "-10.5db", "-11db", "-11.5db", "-12db", "-12.5db", "-13db", "-13.5db", "-14db", "-14.5db", "-15db", "-15.5db", "-16db", "-16.5db", "-17db", "-17.5db", "-18db"]//,0.5db/步。(默认 0.0db)
				,Phase:[0,180],
				selectedVals:{
					HP:"",
					Slope:"",
					Level:"",
					Phase:""
				}
			},
			FrontTW:{
				HP:["1K","1.1K","1.2K","1.4K","1.6K","1.8K","2K","2.2K","2.5K","2.8K","3.2K","3.6K","4K","4.5K","5K","5.6K","6.3K","7.1K","8K","9K","10K","11K","12.5K","14K","16K","18K"],
				LP:["20K","18K","16K","14K","12.5K","11K","10K","9K","8K","7.1K","6.3K","5.6K","5K","4.5K","4K","3.6K","3.2K","2.8K","2.5K","2.2K","2K","1.8K"," 1.6K","1.4K","1.2K","1.1K"],
				Slope:["-6db","-12db","-18db","-24db","-30db","-36db"],
				Level:[ "+0db", "-0.5db", "-1db", "-1.5db", "-2db", "-2.5db", "-3db", "-3.5db", "-4db", "-4.5db", "-5db", "-5.5db", "-6db", "-6.5db", "-7db", "-7.5db", "-8db", "-8.5db", "-9db", "-9.5db", "-10db", "-10.5db", "-11db", "-11.5db", "-12db", "-12.5db", "-13db", "-13.5db", "-14db", "-14.5db", "-15db", "-15.5db", "-16db", "-16.5db", "-17db", "-17.5db", "-18db"]//,0.5db/步。(默认 0.0db)
				,Phase:[0,180],
				selectedVals:{
					HP:"",
					Slope:"",
					Level:"",
					Phase:""
				}
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
					xAxis : {title : {text : '[Hz]'} },
					yAxis : {
						title : {text : '[dB]'},
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
							{
								name : 'Green',
								marker : {
									fillColor : '#BF0B23',
									lineWidth : 10,
									radius : 0
								},
								// data : [ 9, 9, 4, -1, -6, -11]
								data : musicplay.datas.left[0]
							},
							{
								name : 'New York',
								marker : {
									fillColor : '#BF0B23',
									width : 0,
									radius : 0
								},
								// data : [ -12, -12, -12, -7, -2, 9, 9, 9, -2,-7, -12, -12 ],
								data : musicplay.datas.left[1]
							},
							{
								name : 'Berlin',
								marker : {
									fillColor : '#BF0B23',
									width : 0,
									radius : 0
								},
								// data : [ -12, -12, -12, -7, -12, -4, 4, 9, 9,4, -4, -12 ]
								data : musicplay.datas.left[2]
							},
							{
								name : 'London',
								marker : {
									fillColor : '#BF0B23',
									width : 0,
									radius : 0
								},
								// data : [ -12, -12, -12, -12, -12, -12, -12,-12, -12, -6, 0.6, 7, 7, 7, 0, 0 ]
								data : musicplay.datas.left[3]
							} ]
				});



		$('#container2').highcharts({
            xAxis: { title: {text: '[Hz]'}, },
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
                data : musicplay.datas.right[0]
            }, {
                name: 'New York',
                marker: {
                    fillColor: '#BF0B23',
                    width: 0,
                    radius: 0
                },
                // data: [-12, -4, 4, 9, 9, 4, -4, -12]
                data : musicplay.datas.right[1]
            }, {
                name: 'Berlin',
                marker: {
                    fillColor: '#BF0B23',
                    width: 0,
                    radius: 0
                },
                // data: [-12, -12, -12, -7, -2, 9, 9, 9, -2, -7, -12, -12]
                data : musicplay.datas.right[2]
            }, {
                name: 'London',
                marker: {
                    fillColor: '#BF0B23',
                    width: 0,
                    radius: 0
                },
                // data: [-12, -12, -12,-12, -12, -12,-12, -12, -12,-6, 0.6,7,7,7,0,0]
                data : musicplay.datas.right[3]
            }]
        });
	}

	$(".split-middle-btn > .btn").click(function(){
		console.log('--');
		$(".split-middle-btn > .btn").css({'background':'#fff'});
		$(this).css('background','-webkit-gradient(linear, 0 0, 10% 100%, from(rgba(192, 220, 255, 0.4)), to(rgba(22, 99, 197, 0.72)))');
	});
	$('.split-left-btn > .btn').click(function(){
		console.log('--');
		$(this).siblings().css({'background':'#343434'});
		$(this).css('background','-webkit-gradient(linear, 0 0, 10% 100%, from(rgba(192, 220, 255, 0.4)), to(rgba(22, 99, 197, 0.72)))');
	});

	$(".split-right-btn > .btn").click(function(){
		//
		if($(this).text() == 'Return') return ;
		
		$(this).siblings().css({'background':'#343434'});
		$(this).css('background','-webkit-gradient(linear, 0 0, 10% 100%, from(rgba(192, 220, 255, 0.4)), to(rgba(22, 99, 197, 0.72)))');
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





