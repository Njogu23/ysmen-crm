class ActivitySerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :images, :date, :club_id, :district_id
end
