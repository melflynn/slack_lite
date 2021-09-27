json.partial! '/api/rooms/room', room: @room

json.users do 
  json.extract! @room.users, :ids
end
