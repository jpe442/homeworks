class Corgi < ApplicationRecord

  has_many :toys, as: :imageable
end
