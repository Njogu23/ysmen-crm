class HeroSectionSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :subtitle, :subtext, :image, :club_id
end
