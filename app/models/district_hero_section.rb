class DistrictHeroSection < ApplicationRecord
  validates :title, presence: true
  validates :subtitle, presence: true
  validates :subtext, presence: true
  validates :image_url, presence: true
end
