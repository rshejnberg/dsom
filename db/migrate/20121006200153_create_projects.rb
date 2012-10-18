class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :company
      t.date :created
      t.boolean :design
      t.boolean :backend
      t.boolean :database
      t.text :description

      t.timestamps
    end
  end
end
