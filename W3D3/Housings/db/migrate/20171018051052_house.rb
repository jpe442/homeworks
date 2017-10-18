class House < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |table|
      table.string :name, null: false
      table.string :address, null: false
    end
  end
end
