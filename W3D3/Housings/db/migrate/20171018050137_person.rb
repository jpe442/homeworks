class Person < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |table|
      table.string :name, null: false
      table.timestamps
      table.integer :house_id, null: false
    end
  end
end
