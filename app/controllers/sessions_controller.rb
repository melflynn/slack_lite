class SessionsController < ApplicationController
  # skip_before_action :verify_authenticity_token


  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      login(user)
    else
      render json: user, status: 422
    end
  end

  def destroy
    user = current_user
    if user
      logout
    else
      render json: ['Not currently logged in'], status: 404
    end
  end

end
