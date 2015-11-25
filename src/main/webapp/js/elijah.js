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
	
	
	function sendTxt(val){
		socket.send(val);
	}
	$('#CYCLEBtn').click(function(){sendTxt('CYCLEBtn');});
	$('#CHINESEBtn').click(function(){sendTxt('CHINESEBtn');});
	$('.mono-btn').click(function(){sendTxt('MONOBTN');});
	//
});





