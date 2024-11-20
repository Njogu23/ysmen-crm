class ClubSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :location, :email, :phone_number, :date_of_charter, :district_id
end
