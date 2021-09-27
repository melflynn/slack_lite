json.partial! '/api/users/user', user: @user

json.rooms do
  json.extract! @user.rooms, :ids
end