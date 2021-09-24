class Api::MessagesController < ApplicationController

  def index
    @messages = Room.find_by(id: params[:room_id]).messages
    render :index
  end

  def show 
    @message = Message.find_by(id: params[:id])
    render :show
  end

  def create
    @message = Message.new(message_params)
    @message.room_id = params[:room_id]
    @message.user_id = current_user.id
    if @message.save
      render :show
    else
      render @message.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

  def message_params
    params.require(:message).permit(:content)
  end

end
