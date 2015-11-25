$(document).ready(function () {
	var status;
	var socket;
	var connected=0;
	var randid;
	var img1=new Image();
	var img2=new Image();
	var els,time=2222;
	var timecnt=0;
	var rootdir=[];
	var dirindex=[];
	var myip,mymask,mygate;
	var listoftracks=[];
	var listofplay=[];
	var trackinfostr;
    var currenttrack;
    var ipaddr;
	var timetask;
	var tmplang=setlanguage();
	if(tmplang=="zh"){		
		$("#lang_zh").attr("checked",true);
		$("#lang_en").attr("checked",false);
	}
	else{
		$("#lang_zh").attr("checked",false);
		$("#lang_en").attr("checked",true);
	}
	img1.src="images/pause8.png";
	img2.src="images/play8.png";
	jQMProgressBar('progressbar')
                    .setOuterTheme('b')
                    .setInnerTheme('e')
                    .isMini(true)
                    .setMax(100)
                    .setStartFrom(0)
                    .showCounter(true)
					.build();
	$( "#previous" ).click( function( ) {	
			socket.send('PLAYACTIONPREV');
            setTimeout(updatePage,100);
	});
	$( "#next" ).click( function( ) {	
			socket.send('PLAYACTIONNEXT');
            setTimeout(updatePage,100);
	});
	$( "#nfschg" ).click( function( ) {	
			var mtmp = $("#nfsflip").val();
			var mstr;
			if(mtmp =="on"){
				mstr='NFSCHG,1,"'+$("#nfslink").val()+'"';
			}
			else{
				mstr="NFSCHG,0";
			}
			console.log(mstr);
			socket.send(mstr);
			//socket.send('PLAYACTIONNEXT');
	});
	$( "#play" ).click( function( ) {
			if(status=="play") socket.send('PLAYACTIONSTOP');
			else socket.send('PLAYACTIONPLAY');
            setTimeout(updatePage,100);
	});
	$( "#update" ).click( function( ) {
			socket.send('UPDATE,');
			location.href = "#startpage";
	});
	$( "#ipchange" ).click( function( ) {
		if(f_check_IP()==true){
			var value;
			value=myip+","+mymask+","+mygate+",";
			console.log(value);
            var mtmp=$("input:radio[name=radio-nfs]:checked").val();
            console.log("nfs:"+mtmp);
			if(mtmp =="on")
				value=value+"1,"+'"'+$("#nfslink").val()+'"'
			else
				value=value+"0"
			/*var mtmp = $("#nfsflip").val()
			if(mtmp =="on")
				value=value+"1,"+'"'+$("#nfslink").val()+'"'
			else
				value=value+"0"
            */    
			socket.send('SETIP,'+value);
			location.href = "#startpage";
			//setTimeout(gotoIP,5000);
		}
        
        var lang=$("input:radio[name=radio-lang]:checked").val();
        console.log("lang:"+lang);
		
		window.localStorage.setItem("lang",lang);
        setlanguage();
	});
	
	function setlanguage(){
		var lang="en";
		lang = window.localStorage.getItem("lang");
		if(!lang){
			lang="en"
		}
		console.log("set lang "+lang);
		if(lang=="zh"){
			$("#MusicPlayer").html("网络播放器");
            $("#SetupInfo").html("设置");
			$("#homelink1").html("主页");
			$("#homelink2").html("主页");
			$("#homelink3").html("主页");
			$("#playlink1").html("播放列表");
			$("#playlink2").html("播放列表");
			$("#playheader").html("播放列表");
			$("#rootlink").html("根目录");
			$("#setuplink").html("设置");
			$("#update").html("升级程序");
			$("#ipchange").html("设置改变");
			$("#versionlink").html("版本");
			$("#ipaddrlink").html("IP地址");
			$("#netmasklink").html("网络掩码");
			$("#gatewaylink").html("网关");
	    }
		else{
			$("#MusicPlayer").html("Music Player");
            $("#SetupInfo").html("Setup");
			$("#homelink1").html("Home");
			$("#homelink2").html("Home");
			$("#homelink3").html("Home");
			$("#playlink1").html("PlayList");
			$("#playlink2").html("PlayList");
			$("#playheader").html("Play List");
			$("#rootlink").html("RootDir");
			$("#setuplink").html("Set Up");
			$("#update").html("Upadte Hardware");
			$("#ipchange").html("Change Setup");
			$("#versionlink").html("Version");
			$("#ipaddrlink").html("IP Address");
			$("#netmasklink").html("Net Mask");
			$("#gatewaylink").html("Gateway");
		}
		return lang;
	}
	
	function gotoIP(){
		var r = "http://"+myip&0xff000000+"."+myip&0xff0000+"."+myip&0xff00+"."+myip&0xff;
		console.log(r);
		location.href=r;
	}
	function f_check_IP() {  
		var ip = document.getElementById('ipaddr').value;
		var netmask = document.getElementById('netmask').value;
		var gateway = document.getElementById('gateway').value;
        /*if(ipaddr){
            if((ipaddr[0]==ip)&&(ipaddr[1]==netmask)&&(ipaddr[2]==gateway)) return false;
        }*/
		var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/; 
		if(!(re.test(ip))||( !(RegExp.$1<256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) ))   
		{   
		  alert("ip address error");  
		  return false;
		}   
		myip = parseInt(RegExp.$1)*16777216+parseInt(RegExp.$2)*65536+parseInt(RegExp.$3)*256+parseInt(RegExp.$4);
		if(!(re.test(netmask))||( !(RegExp.$1<256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) ))   
		{   
		  alert("network mask error");  
		  return false;
		} 	
		mymask = parseInt(RegExp.$1)*16777216+parseInt(RegExp.$2)*65536+parseInt(RegExp.$3)*256+parseInt(RegExp.$4);
		if(!(re.test(gateway))||( !(RegExp.$1<256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) ))   
		{   
		  alert("gateway error");  
		  return false;
		} 	
		mygate = parseInt(RegExp.$1)*16777216+parseInt(RegExp.$2)*65536+parseInt(RegExp.$3)*256+parseInt(RegExp.$4);
		console.log(myip);
		console.log(mymask);
		console.log(mygate);
		return true;    
	}
	
	
	function diradd(adir,objid,title,obj){
		var offset = title.indexOf('/');
		//if(adir.length<2) initdir(adir)
		//console.log("----------");
		//console.log(adir);
		//console.log(title);
		if(offset == -1){
			if(!obj['cue']){
				if(!adir['file']) adir['file']=[];
				adir['file'].push([title,objid]);
				//console.log(title);
			}
			else{
				if(!adir['dir']) adir['dir']=[];
				if(!adir['dir'][title]){
					adir['dir'][title]=[]
				}
				mdir = adir['dir'][title];
				mdir['file']=[];
				for(imm  in obj.cue){
					mdir['file'].push([obj.cue[imm],parseInt(objid)+parseInt(imm)]);
					//console.log("cue:"+objid+" imm:"+imm +" add:",(parseInt(objid)+parseInt(imm)));
				}
				
			}
		}
		else{
			if(!adir['dir']) adir['dir']=[];
			if(!adir['dir'][title.substring(0,offset)]){
				adir['dir'][title.substring(0,offset)]=[]
			}
			diradd(adir['dir'][title.substring(0,offset)],objid,title.substring(offset+1),obj);
		}
	}
	function getoffset(title,tels,alllen){
		//console.log("els="+els+" alllen="+alllen);
		var lindex=-1;
		for(index in listoftracks){
			if(listoftracks[index].title == title){
				lindex = index;
				break;
			}
		}
		//console.log("cueoffset:"+listoftracks[lindex].cueoffset);
		if((lindex>=0)&&(listoftracks[lindex].cue)){
			var cueindex=0;l1=0;l2=0;
			for(index=0;index<listoftracks[lindex].cueoffset.length;index++){
				if(parseInt(listoftracks[lindex].cueoffset[index])<tels) cueindex=index;
				else break;
			}
			//console.log("cueindex:"+cueindex);
			l1=listoftracks[lindex].cueoffset[cueindex];
			//console.log("l1:"+l1);
			if(listoftracks[lindex].cueoffset.length<(cueindex+1)){
				l2= alllen;
			}
			else
				l2 = listoftracks[lindex].cueoffset[cueindex+1];
			//console.log("l2:"+l2);
			return ["<H2>"+listoftracks[lindex].cue[cueindex]+"</H2>",tels-l1,l2-l1];
		}
		return ["",tels,alllen];
	}
	function idlesend(){
		socket.send('IDLE');
	}
	function timeWork()
	{
		els = parseInt(els)+1000;
		timecnt = (timecnt+1)%10;
		//alert(timecnt);
		if(status == "play"){
		    $("#trackinfo").html(trackinfostr+ parseInt(els/60000) +":"+parseInt((els%60000)/1000)+"/"+parseInt(time/60000) +":"+parseInt((time%60000)/1000) );
            var vvv = parseInt(els*100/time);
			jQMProgressBar('progressbar').setStartFrom(vvv).build();
        }
		if(timecnt==1) updatePage();
		//console.log("els:",els);
		//console.log("timecnt:",timecnt);
	}
	function updatePage()
	{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function()
		  {
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			  var serverResponse = xmlhttp.responseText;
		
				var serverResponseLine = eval('('+serverResponse+')');
				//alert(serverResponseLine)
				
				
				var playqueueCount = serverResponseLine.playqueueCount;
				currenttrack = serverResponseLine.track;
				var artist = serverResponseLine.artist;
				var album = serverResponseLine.album;
				els=parseInt(serverResponseLine.els);
				time = parseInt(serverResponseLine.length);
				ipaddr = serverResponseLine.ipaddr;
				var version = serverResponseLine.ver;
				//var plcnt = serverResponseLine.plcnt;
				//console.log(ipaddr[2]);
				if(status != serverResponseLine.status){
					status = serverResponseLine.status;
					if (status == "play")
					{
						//$("#play").html('<img src="images/pause8.png">');
						//$("#play img").attr("src", "images/pause8.png");
						$("#play img").attr("src", img1.src);
					}
					else{
						//$("#play").html('<img src="images/play8.png">');
						//$("#play img").attr("src", "images/play8.png");
						$("#play img").attr("src", img2.src);
					}
					//jQMProgressBar('progressbar').setValue(parseInt(serverResponseLine.els*100/serverResponseLine.length)).build();
				}
				if(randid != serverResponseLine.randid){
					listoftracks=[];
					randid = serverResponseLine.randid;
					updatePlayQueue();
				    $("#version").val(version);
                    if(ipaddr){
				        $("#ipaddr").val(ipaddr[0]);
				        $("#netmask").val(ipaddr[1]);
				        $("#gateway").val(ipaddr[2]);
                    }
				}
				
				
				// Deal with the status
				var statusText;
				var playPauseButtonState;
				
				var offset;
				var trackstr;
				var cuestr,cueels,cuelen;
				var cueoff = getoffset(currenttrack,serverResponseLine.els,serverResponseLine.length);
				//console.log(cueoff);
				trackstr = cueoff[0];
				els=parseInt(cueoff[1]);
				time=parseInt(cueoff[2]);
                var vvv = parseInt(els*100/time);
				jQMProgressBar('progressbar').setStartFrom(vvv).build();
				offset = currenttrack.lastIndexOf('/');
				if(offset!=-1){
				    trackstr +="<H2>"+currenttrack.substring(offset+1)+"</H2>";	//$("#track").html("<H2>"+track.substring(offset+1)+"</H2>"+"<p>"+track.substring(0,offset+1)+"</p>");
				}
				else{
					//$("#track").html("<H2>"+track+"</H2>");
					trackstr +="<H2>"+currenttrack+"</H2>";
				}
				$("#track").html(trackstr);
				$("#tracknumber").html(serverResponseLine.playqueueCount);
				//$("#version").val(serverResponseLine.ver);
				trackinfostr=""+serverResponseLine.frequency/1000+"K | "+serverResponseLine.bps+"bit | "+serverResponseLine.channel+"ch | ";
				$("#trackinfo").html(trackinfostr+ parseInt(els/60000) +":"+parseInt((els%60000)/1000)+"/"+parseInt(time/60000) +":"+parseInt((time%60000)/1000) );
				//$("#bps").html(serverResponseLine.frequency/1000);
				//$("#channel").html(serverResponseLine.channel);
				//$("#time").html(parseInt(serverResponseLine.length/60000) +"min"+parseInt((serverResponseLine.length%60000)/1000) +"sec");
			}
		}
		var mpdControlFile = "../mpdcontrol.json";
		xmlhttp.open("GET", mpdControlFile, false);
		xmlhttp.send();

	
	}
	$.playSong=function(trackNumber){
		socket.send('PLAYACTIONGO'+trackNumber);
		location.href = "#startpage";
		setTimeout(updatePage,100);
  
  // Change back to the controls
  //location.href = "#startpage";
	  }
	$.delSong=function(trackNumber){
		socket.send('DELETESONG,'+trackNumber);
        for(var i=listofplay.length-1;i>=0;i--){
            if(trackNumber ==listofplay[i].count) listofplay.splice(i,1);
        }
        updatePlayList();
    }
	$.refreshlist=function(){
		socket.send('REFRESHLIST');
	}  
	$.addSong=function(trackNumber){
		socket.send('PLAYLISTADD,'+trackNumber);
	}
	$.goDir=function(index){
	   dirindex.push(index);
	   console.log("godir"+ index);
	   console.log(dirindex);
	   showQueuePage();
	  }
	$.goRootdir=function(){
	   dirindex=[]
	   console.log("gorootdir");
	   showQueuePage();
	  }
	$.goCurrentdir=function(){
	   dirindex=[];
       var adir=rootdir;
       var lastoffset=-1;
       var tmptrack=currenttrack;
	   //console.log(currenttrack);
	   //console.log("rootdir");
	   //console.log(rootdir);
       while(1){
            var offset= tmptrack.indexOf('/');
            if(offset>=0){
                dirindex.push(tmptrack.substring(0,offset));
                adir=adir['dir'][tmptrack.substring(0,offset)];
                tmptrack=tmptrack.substring(offset+1);
                //console.log(tmptrack);
            }
            else{
                /*if(adir && adir['dir']){
                    if(currenttrack.substring(lastoffset+1) in adir['dir']){
                        dirindex.push(currenttrack.substring(lastoffset+1));
                    }
                }*/
                break;
            }
       }
       console.log(dirindex);
	   console.log("gocurrentdir");
	   showQueuePage();
	  }
	$.upDir=function(){
	   dirindex.pop();
	   console.log("updir"+ index);
	   showQueuePage();
	  }
	/*function playSong(trackNumber)
	{
	  var xmlhttp = new XMLHttpRequest();
	  xmlhttp.open("POST", "../PLAY?" + trackNumber, false);
	  xmlhttp.send();
	}*/
	function showQueuePage()
	{
		var adir = rootdir;
        //console.log("rootdir")
        //console.log(rootdir)
        //console.log(dirindex)
	    for(i in dirindex){
			console.log("s:"+dirindex[i]);
			adir=adir['dir'][dirindex[i]];
		}
	  	  var formatedTracks  = "";
		  if(dirindex.length>0)
		  {
			formatedTracks +=
				'<li>' +
				'  <a herf="#"' +
				'onClick="javascript:$.upDir()"'+
				'>'+
				'<img src="images/dir.png" alt="France" class="ui-li-icon ui-corner-none">'+
				".." +
				'  </a>' +
				'</li>';
		  }
		  if(adir['file']){
			  for (index in adir['file'])
			  {
				var trackNumber = adir['file'][index][1];
				var title       = adir['file'][index][0];
				formatedTracks +=
				'<li>' +
				'  <a id="ppa" trackn='+trackNumber+' '+'herf="#"' +
				'onClick="javascript:$.playSong('+trackNumber+')"'+
				'>'+
				//' + trackNumber + ')">' +
				title +
				'  </a>' +
			//	'  <a herf="#"' +
			//	'onClick="javascript:$.addSong('+trackNumber+')"'+
		//		'>'+
		//		'  </a>' +
				'</li>';
			  }
		  }
		  if(adir['dir']){
			  for (index in adir['dir'])
			  {
				
				formatedTracks +=
				'<li>' +
				'  <a id="ppa" herf="#"' +
				'onClick="javascript:$.goDir('+"'"+index.replace("'","\\'")+"'"+')"'+
				'>'+
				'<img src="images/dir.png" alt="France" class="ui-li-icon ui-corner-none">'+
				index +
				'  </a>' +
				'</li>';
			  }
		  }
		  $("#filelist").html(formatedTracks);
		  $("#filelist").listview();
		  $("#filelist").listview('refresh');

	}
	
	function updatePlayQueue()
	{
	  var xmlhttp = new XMLHttpRequest();
	  
	  xmlhttp.onreadystatechange=function()
	  {
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
          listoftracks = eval('('+xmlhttp.responseText+')');
		    rootdir = [];
			dirindex= [];
			for(index in listoftracks){
				title = listoftracks[index].title;
				//console.log(title);
				diradd(rootdir,parseInt(listoftracks[index].count),title,listoftracks[index]);
			}
			//console.log(rootdir);
		  showQueuePage();
		}
	  }
	  xmlhttp.open("GET", "../mpdquery.json", true);
	  xmlhttp.send();
	 }
	function updatePlayList()
	{
		
		var formatedTracks=
        '<li class="ui-field-contain">'+
            '<label for="flip2">Flip switch:</label>'+
            '<select name="flip2" id="flip2" data-role="slider">'+
                '<option value="off">Off</option>'+
                '<option value="on">On</option>'+
            '</select>'+
        '</li>';
        
		for(index in listofplay){
			title = listofplay[index].title;
			count = listofplay[index].count;
			formatedTracks +=
			'<li>' +
			'  <a herf="#"' +
			'onClick="javascript:$.playSong('+count+')"'+
			'>'+title+
			'  </a>' +
			'  <a herf="#"' +
			'onClick="javascript:$.delSong('+count+')"'+
			'>'+
			'  </a>' +
			'</li>';
		}
        console.log(formatedTracks);
		$("#playlist").html(formatedTracks);
		$("#playlist").listview();
		$("#playlist").listview('refresh');

	}
	
function get_appropriate_ws_url()
{
    var pcol;
    var u = document.URL;
	pcol = "ws://";
	if (u.substring(0, 4) == "http")
		u = u.substr(7);
    u = u.split('/');
    return pcol + u[0]; //+":81";
}
	
function webSocketConnect() {
    if (typeof MozWebSocket != "undefined") {
        socket = new MozWebSocket(get_appropriate_ws_url());
    } else {
        socket = new WebSocket(get_appropriate_ws_url());
    }

    try {
        socket.onopen = function() {
            console.log("connected");
			connected=1;
        }

        socket.onmessage = function got_packet(msg) {
            if(!msg.data || msg.data.length == 0)
                return;
			//console.log(msg.data);
			//var aaa1= decodeFromGb2312(msg.data);
           var obj = eval('('+msg.data+')');
			//console.log(obj);
			if(timetask){
				clearTimeout(timetask);
				
			}
			timetask=setTimeout(idlesend,10000);
            switch (obj.type) {
                case "status":
                    updatePage(obj.data);
                    break;
                case "queue":
					console.log(obj.data);
                    updatePlayQueue(obj.data);
					break;
                case "playlist":
					console.log(obj.data);
                    listofplay=obj.data;
                    updatePlayList();
					break;
                default:
                    break;
            }


        }
        socket.onclose = function(){
            console.log("disconnected");
			connected=0;
            setTimeout(webSocketConnect,3000);
        }

    } catch(exception) {
        alert('<p>Error' + exception);
    }

}	
//updatePlayQueue();
//setTimeout(updatePage,100);
webSocketConnect();
updatePage();
setInterval(timeWork, 1000 );

});
