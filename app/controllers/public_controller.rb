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
end
