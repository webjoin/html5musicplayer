package com.viewt.websocket;

import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;


@ServerEndpoint(value = "/websocket")
public class HelloWebSocket {
	public HelloWebSocket(){}
	static Set<HelloWebSocket> set = new HashSet<HelloWebSocket>();
	
	@OnMessage
    public void onMessage(String message, Session session)   
        throws IOException, InterruptedException {  
		System.out.println("onMessage----------"+message);
    }
      
    @OnOpen  
    public void onOpen (Session session) {
    	System.out.println("onOpen------"+session);
    }  
  
    @OnClose  
    public void onClose (Session session) {
        System.out.println("Connection closed");  
    }  

    @OnError
    public void onError(Session session, Throwable error){
    	 System.out.println("发生错误");
         error.printStackTrace();
    }
    
    

}
