class DistrictSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :email, :phone_number
end
