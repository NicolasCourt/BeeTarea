Rails.application.routes.draw do
  root 'pagina#index'

  namespace :api do
    resources :autos, param: :patente
  end
  get '*path', to: 'pagina#index', via: :all
end
