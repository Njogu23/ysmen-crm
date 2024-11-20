class WhatWeDoSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :image_url, :description, :district_id
end
