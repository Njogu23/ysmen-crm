Rails.application.routes.draw do
  resources :what_we_dos
  resources :home_page_details
  resources :publications
  resources :hero_sections
  resources :events
  resources :activities
  resources :clubs
  resources :districts

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  }, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
  }

  # Health check route
  get "up" => "rails/health#show", as: :rails_health_check

  # You can also use a simple JSON response as the root for an API
  root to: "application#root"  # Or any other controller action
end
