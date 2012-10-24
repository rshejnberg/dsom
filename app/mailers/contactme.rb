class Contactme < ActionMailer::Base
  default :to => "raphael.shejnberg@gmail.com"
...
  def contact (sender, subject, message, sent_at = Time.now)
    @sender = sender
    @message = message
    @sent_at = sent_at.strftime("%B %e, %Y at %H:%M")
    mail(:subject => subject)
  end

end
end
