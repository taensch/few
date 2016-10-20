Rails.application.routes.draw do
  get 'static_pages/index'

  root 'static_pages#index' 
  post 'static_pages/mail_sent'

end
