class Project < ActiveRecord::Base

attr_accessible :backend, :company, :created, :database, :description, :design, :photo, :photo2, :photo3
  
 has_attached_file :photo, :styles => {:small => '300x300>', :large => '800x2600>'}
 has_attached_file :photo2, :styles => {:small => '300x300>', :large => '800x2600>'}
 has_attached_file :photo3, :styles => {:small => '300x300>', :large => '1200x2600>'}  
end
