class UserMailer < ApplicationMailer
default from: "from@example.com"

  def contact_form(email, name, message)
  @message = message
    mail(:from => email,
        :to => 'savanin.tanja@gmail.com',
        :subject => "Eine neue FEW-Nachricht von #{name}")
  end
end
