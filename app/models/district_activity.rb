class DistrictActivity < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :date, presence: true
end
