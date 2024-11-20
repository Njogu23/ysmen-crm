class HeroSectionSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :subtitle, :subtext, :image, :club_id, :district_id
end
