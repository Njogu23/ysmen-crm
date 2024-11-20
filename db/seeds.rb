# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts 'seeding Districts 🍒🍒🍒'
District.create!(
  name: "Kenya District",
  email: "info@ysmenkenya.org",
  phone_number: "0712345678"  # Reference the first club or adjust accordingly
)
puts 'done seeding District 🍒🍒🍒'

puts 'seeding Clubs!'
Club.create!(
  name: "Kitui Club",
  email: "info@ysmenkitui.org",
  phone_number: "0712345678",
  location: "Kitui County",
  date_of_charter: "19-09-2018",
  district_id: District.first.id # Reference the first club or adjust accordingly
)
puts 'done seeding Clubs!'