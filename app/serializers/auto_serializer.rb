class AutoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :patente, :lat, :lng
end
