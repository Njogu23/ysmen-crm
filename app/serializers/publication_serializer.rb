class PublicationSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :link, :club_id
end
