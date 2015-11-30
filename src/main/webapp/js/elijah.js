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
			]
		},
		operation:{
			initData:function(){
				var setup =  musicplay.common.LS.get("setup");//<setup>true</setup>
				if('true' == setup){
					musicplay.datas.left  =JSON.parse(musicplay.common.LS.get(musicplay.common.constant.LEFT));
					musicplay.datas.right =JSON.parse(musicplay.common.LS.get(musicplay.common.constant.RIGHT));
				}else{//it's not true , so the data was needed initialization
					musicplay.common.LS.put(musicplay.common.constant.LEFT,JSON.stringify(musicplay.datas.left));
					musicplay.common.LS.put(musicplay.common.constant.RIGHT,JSON.stringify(musicplay.datas.right));
					musicplay.common.LS.put(musicplay.common.constant.SETUP,'true');
				}
			}
		},
		common:{
			constant:{
				SETUP:'setup',
				LEFT:'left',
				RIGHT:'right'

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





