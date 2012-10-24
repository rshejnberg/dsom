class PublicController < ApplicationController
  def home
  end

  def whatdo
  end

  def aboutme
  end

  def projects
    @projects = Project.all
      
      respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @projects }
    end
  end
   def contact
    @title = "Contact"
    @sender = ''
    @subject = ''
    @message = ''
  end

  def send_mail
    @sender = params[:sender]
    @subject = params[:subject]
    @message = params[:message]
    if validate(@sender, @subject, @message)
      UserMailer.contact(@sender, @subject, @message).deliver      
      flash[:success] = "Message sent successfully"      
      redirect_to contact_path
    else
      flash.now[:error] = @error     
      render 'public/contact'
    end
  end

  private
    def validate(sender, subject, message)
      @email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
      if sender.blank? || subject.blank? || message.blank?
        @error = "Message not sent: Required information not filled"
        return false
      elsif subject.length >= 50
        @error = "Message not sent: Subject must be smaller than 50 characters"
        return false
    elsif sender[@email_regex].nil?
        @error = "Message not sent: Email not valid"
        return false
      else
        return true
      end
    end
 
end
