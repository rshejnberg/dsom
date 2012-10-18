class PublicController < ApplicationController
  def home
  end

  def whatdo
  end

  def aboutme
  end

  def projects
    @projects = Project.all
      
  end
end
