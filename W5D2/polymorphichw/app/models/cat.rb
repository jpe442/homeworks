class Cat < ApplicationRecord
  has_many :toys, as: :imageable
end
