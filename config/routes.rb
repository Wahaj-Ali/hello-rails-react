Rails.application.routes.draw do
  # namespace :api do
  #   get 'messages/index'
  # end
  namespace :api do
    get '/', to: 'messages#index'
    resources :messages, only: [:index]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"
end
