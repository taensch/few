class StaticPagesController < ApplicationController
  def index
  end

def mail_sent
  @name = params[:name]
  @email = params[:email]
  @message = params[:message]
  UserMailer.contact_form(@email, @name, @message).deliver_now
 flash[:notice] = "Ihre Nachricht wurde versendet!"
  redirect_to :back

end

end
