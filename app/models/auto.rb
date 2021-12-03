class Auto < ApplicationRecord # validacion de datos ingresados
    validates :lat, presence: true,
                numericality: { only_float: true, greater_than_or_equal_to: -90, less_than_or_equal_to: 90 } 

    validates :lng, presence: true,
                numericality: { only_float: true, greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }

    validates :patente, presence: true,
                length: { minimum: 1, maximum: 8 }
end
