class HomePageDetailSerializer
  include JSONAPI::Serializer
  attributes :id, :motto, :history, :vision, :mission, :text, :club_id, :district_id
end
