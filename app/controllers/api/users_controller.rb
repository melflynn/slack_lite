class Api::UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index 
    @users = []
    if params[:userIds]
      @users = User.find(params[:userIds])
    elsif params[:roomId]
      @users = Room.find_by(id: params[:roomId]).users
    else
      @users = User.all
    end

    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
