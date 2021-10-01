class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_for "chat_channel"
    # debugger
    @room = Room.find_by(id: params[:id])
    stream_for @room
  end

  def speak(data)
    # debugger
    message = Message.create(user_id: data["user_id"], room_id: data["room_id"], content: data["content"])
    @room = Room.find_by(id: message.room_id);
    # socket = message
    ChatChannel.broadcast_to(@room, message);
  end

  def unsubscribed
    # debugger
    # Any cleanup needed when channel is unsubscribed
  end
end
