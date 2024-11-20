class EventSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :image, :date, :club_id, :district_id
end
