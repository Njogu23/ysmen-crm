class ActivitySerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :images, :date, :club_id
end
