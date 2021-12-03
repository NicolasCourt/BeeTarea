class Auto < ApplicationRecord
    validates :lat, presence: true,
                numericality: {only_float: true}
    validates :lng, presence: true,
                numericality: {only_float: true}
    validates :patente, presence: true,
                length: { minimum: 1 }
end
