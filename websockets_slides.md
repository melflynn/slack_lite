# Websockets & Rails Action Cable

---

## Agenda

1. High Level Overview of Websockets
	* How are they different from HTTP?
2. Implementing Websockets with Rails Action Cable

---

## HTTP Request/Response Cycle

![http-request-response](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/rails/w6d3-routes-controllers/assets/basic-http-request.png?token=AIS3A4KXJVBE2N7A2XK4IWDBMCHZK)

---

## Websockets

* handshake: inital HTTP request, upgrades the protocol from HTTP to websocket protocol
* Sets up a bidirectional connection
	* remains open until the server shuts down or client unsubscribes/disconnects
  * Allows the server to send content to the client without the client initiating a request
![websockets](https://upload.wikimedia.org/wikipedia/commons/1/10/Websocket_connection.png)

---

## Action Cable

* Integrates WebSockets with the rest of your Rails application
* Provides both a client-side JavaScript framework and a server-side Ruby framework

---

## File Structure

* /app/channels/application_cable
	* channel.rb
  * connection.rb
  * *chat_channel.rb
* /app/assets/javascripts
	* cable.js
* /frontend/components
	* *chat_room.jsx
  
*some of these files will need to be manually created


---

## Cable.js
#### (provided)

```
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
```

* Access to App.cable in frontend

---

## Routes.rb

* The server needs a Cable endpoint for communicating data

```
mount ActionCable.server, at: '/cable'
```

---

## chat_channel.rb

```
rails g channel Chat
```

* Will have subscribed and unsubscribed methods
	* subscribed is called when a user successfully subscribes to the channel
 ; sets up the stream 
	* unsubscribed handles clean up (if needed) 
* Has access to params that are passed in when subscription is created

---

## chat_channel.rb

```
def subscribed
  stream_for channel_name
end
```

```
def speak(data)
  message = Message.create(body: data.body, ...)
  ChatChannel.broadcast_to(channel_name, message)
end
```

* The channel_name can be determined based on the params passed in when the subscription is created
* data will be passed in when speak is called on the front end. You will likely need to extract parts of the data for message creation
* Action Cable can only broadcast objects

---

## Client Side (Component)

1. Create a subscription to the appropriate channel when a user visits the chat
	* We have access to App.cable from cable.js

```
componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel", channelName: "..." },
      {
        received: data => {
          //Either update local or redux state
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
}
```

---

## Client Side (Component)

* Parts of the App.cable.subscriptions.create method:
	* params passed to the subscribed method:
```{ channel: "ChatChannel", channelName: "..." }```
  *	what to do when data is received
  ```received: data => {},```
  * a function to call the Channel's speak function 
  ```speak: function(data) { return this.perform("speak", data);}```
---

## Client Side (Component)

2. Send the data to the server upon submission of a message form
	* data could come from the local state, or be passed in to the handleSubmit function
	* data should include all the information necessary to create a message in the speak function of the ChatChannel

```
handleSubmit() {
	App.cable.subscriptions.subscriptions[0].speak(data)
}
``` 

---

## Client Side (Component)

3. Remove the subscription when a user leaves the current room

```
ComponentWillUnmount() {
	App.cable.subscriptions.subscriptions.pop();
}
```

---

## Resources

* [Action Cable and React Tutorial](https://medium.com/@benpong89/action-cable-and-react-9a00be5e391b)
* [Rails docs: Action Cable](https://guides.rubyonrails.org/action_cable_overview.html)