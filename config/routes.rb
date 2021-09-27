Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do
      resources :rooms, only: [:index]
    end
    resources :rooms, only: [:index, :show, :create, :destroy] do 
      resources :messages, only: [:index, :create]
    end
    resources :messages, only: [:show, :destroy, :update]
    resources :room_users, only: [:create, :destroy]
  end

  resource :session, only: [:create, :destroy]
end
