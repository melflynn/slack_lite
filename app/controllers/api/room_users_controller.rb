class Api::RoomUsersController < ApplicationController

  def create

    room_user = RoomUser.new(room_user_params)
    if room_user.save
      render json: room_user
    else
      render json: room_user.errors.full_messages, status: 422
    end

  end

  def destroy
    room_user = RoomUser.find_by(id: params[:id])
    if room_user
      room_user.destroy
      render json: room_user
    else
      render json: ["No room_user with that id"], status: 404
    end
  end

  private

  def room_user_params
    params.require(:room_user).permit(:room_id, :user_id)
  end
end
