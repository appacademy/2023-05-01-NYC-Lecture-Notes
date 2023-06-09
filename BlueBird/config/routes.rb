Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/chirps', to: 'chirps#index'
  # post '/chirps', to: 'chirps#create'
  # get '/chirps/:id', to: 'chirps#show', as: 'chirp'
  # patch '/chirps/:id', to: 'chirps#update'
  # put '/chirps/:id', to: 'chirps#update'
  # delete '/chirps/:id', to: 'chirps#destroy'
  # get '/chirps/new', to: 'chirps#new'
  # get '/chirps/:id/edit', to: 'chirps#edit'

  resources :chirps, except: [:new, :edit]
  # resources :chirps, only: [:index, :show, :create, :update, :destroy]
  resources :users

end
