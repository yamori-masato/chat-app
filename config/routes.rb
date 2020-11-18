Rails.application.routes.draw do
  resources :users, only: [] do
    resources :rooms, only: [:index, :show]
  end
  resources :messages, only: [:create]
end
