class DistrictHomePageDetail < ApplicationRecord
  validates :motto, presence: true
  validates :history, presence: true
  validates :vision, presence: true
  validates :mission, presence: true
end
