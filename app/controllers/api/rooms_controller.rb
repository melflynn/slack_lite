class Api::RoomsController < ApplicationController

  def index 
    if params[:user_id]
      @rooms = User.find_by(id: params[:user_id]).rooms
    elsif params[:roomIds]
      @rooms = Room.find(params[:roomIds])
    else
      @rooms = Room.all
    end

    render :index
  end

  def show
    @room = Room.find_by(id: params[:id])
    render :show
  end

  def create
    @room = Room.new({name: params[:room][:name]})
    @room.owner_id = current_user.id

    if @room.save
      RoomUser.new({user_id: current_user.id, room_id: @room.id}).save
      render :show
    else
      render json: @room.errors.full_messages, status: 422
    end

  end

  def destroy

    @room = Room.find_by(id: params[:id])
    if @room
      @room.destroy
      render :show
    else
      render json: ["There is no room with that id"], status: 404
    end

  end

end
