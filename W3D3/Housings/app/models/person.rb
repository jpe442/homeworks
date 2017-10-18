# For each model, you should validate the presence of each of
# the attributes that model can have.

class Person < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :house_id, presence: true

  belongs_to :house,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: 'House'
end
