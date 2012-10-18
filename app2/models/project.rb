class Project < ActiveRecord::Base

attr_accessible :backend, :company, :created, :database, :description, :design, :photo
  
  has_attached_file :photo, :styles => {:small => '300x300>', :large => '800x2600>'}
end
