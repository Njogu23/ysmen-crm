# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_11_19_213759) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.json "images"
    t.date "date"
    t.bigint "club_id", null: false
    t.bigint "district_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_activities_on_club_id"
    t.index ["district_id"], name: "index_activities_on_district_id"
  end

  create_table "clubs", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "email"
    t.string "phone_number"
    t.string "date_of_charter"
    t.bigint "district_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["district_id"], name: "index_clubs_on_district_id"
  end

  create_table "districts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "image"
    t.date "date"
    t.bigint "club_id", null: false
    t.bigint "district_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_events_on_club_id"
    t.index ["district_id"], name: "index_events_on_district_id"
  end

  create_table "hero_sections", force: :cascade do |t|
    t.string "title"
    t.string "subtitle"
    t.text "subtext"
    t.string "image"
    t.bigint "club_id", null: false
    t.bigint "district_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_hero_sections_on_club_id"
    t.index ["district_id"], name: "index_hero_sections_on_district_id"
  end

  create_table "home_page_details", force: :cascade do |t|
    t.text "motto"
    t.text "history"
    t.text "vision"
    t.string "mission"
    t.string "text"
    t.bigint "club_id", null: false
    t.bigint "district_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_home_page_details_on_club_id"
    t.index ["district_id"], name: "index_home_page_details_on_district_id"
  end

  create_table "publications", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "link"
    t.bigint "club_id", null: false
    t.bigint "district_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_publications_on_club_id"
    t.index ["district_id"], name: "index_publications_on_district_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "nickname"
    t.string "phone_number"
    t.string "date_of_birth"
    t.string "date_joined"
    t.integer "role"
    t.string "designation"
    t.string "image_url"
    t.string "occupation"
    t.bigint "club_id", null: false
    t.string "jti", null: false
    t.index ["club_id"], name: "index_users_on_club_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "what_we_dos", force: :cascade do |t|
    t.string "title"
    t.string "image_url"
    t.text "description"
    t.bigint "district_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["district_id"], name: "index_what_we_dos_on_district_id"
  end

  add_foreign_key "activities", "clubs"
  add_foreign_key "activities", "districts"
  add_foreign_key "clubs", "districts"
  add_foreign_key "events", "clubs"
  add_foreign_key "events", "districts"
  add_foreign_key "hero_sections", "clubs"
  add_foreign_key "hero_sections", "districts"
  add_foreign_key "home_page_details", "clubs"
  add_foreign_key "home_page_details", "districts"
  add_foreign_key "publications", "clubs"
  add_foreign_key "publications", "districts"
  add_foreign_key "users", "clubs"
  add_foreign_key "what_we_dos", "districts"
end
